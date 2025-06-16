import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import * as z from "zod";

// Zod schema for server-side validation, ensuring data is clean.
const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long"),
});

// Set SendGrid API key from environment variables.
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY is not set. Emails will not be sent.");
}

export async function POST(request) {
  // Verify that the server is configured to send emails.
  if (
    !process.env.SENDGRID_API_KEY ||
    !process.env.CONTACT_FORM_EMAIL_TO ||
    !process.env.CONTACT_FORM_EMAIL_FROM
  ) {
    return NextResponse.json(
      { error: "Server is not configured to send emails." },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();

    // Validate the incoming request body against our schema.
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input.", details: validation.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message } = validation.data;

    // Construct the email message.
    const msg = {
      to: process.env.CONTACT_FORM_EMAIL_TO,
      from: process.env.CONTACT_FORM_EMAIL_FROM, // This must be a verified sender in SendGrid.
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1a1a1a;">New Message from Your Portfolio</h2>
          <p>You have received a new message from your portfolio website's contact form.</p>
          <div style="background-color: #f9f9f9; border-left: 4px solid #007bff; padding: 15px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            <h3 style="margin-bottom: 5px;">Message:</h3>
            <p style="white-space: pre-wrap; margin-top:0;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p style="font-size: 0.8em; color: #777;">This email was sent automatically from your portfolio contact form.</p>
        </div>
      `,
    };

    // Send the email.
    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error(error.response.body);
    }
    return NextResponse.json(
      { error: "An error occurred while sending the email." },
      { status: 500 },
    );
  }
}
