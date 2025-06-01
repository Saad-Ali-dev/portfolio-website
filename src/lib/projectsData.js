export const projectsData = [
  {
    slug: "amazon-clone-ecommerce",
    name: "Amazon Clone Ecommerce App",
    tagline:
      "A full-stack e-commerce platform mimicking Amazon's core functionalities, built with MERN stack and modern features.",
    mainImage: "/amazon-clone-homepage.webp", // Placeholder
    date: "May 2024",
    liveLink:
      "https://github.com/Saad-Ali-dev/fullstack-projects/tree/main/ecommerce-app", // Using GitHub link as placeholder
    repoLink:
      "https://github.com/Saad-Ali-dev/fullstack-projects/tree/main/ecommerce-app",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
    accentColor: "hover:text-orange-400", // Example accent color for this project
    about: {
      id: "about-project",
      titleIconName: "HiOutlineLink",
      title: "What is this Amazon Clone?",
      description:
        "<p>This project is a comprehensive, full-stack e-commerce application designed to replicate the user experience and core features of Amazon. It allows users to browse products, add items to their cart, manage orders, and make payments.</p><p>Built using the MERN stack (MongoDB, Express.js, React, Node.js), it showcases robust backend development and a dynamic frontend with features like product search, user authentication, shopping cart, and order management, with Stripe integration for payments.</p>",
      image: "/projects/amazon-clone/about-image.png", // Placeholder
    },
    features: {
      id: "features",
      titleIconName: "HiOutlineSparkles",
      title: "Features",
      items: [
        {
          iconName: "HiOutlineShoppingCart",
          title: "Product Catalog & Search",
          description:
            "Browse a wide array of products with advanced search and filtering capabilities.",
        },
        {
          iconName: "HiOutlineUser",
          title: "User Authentication",
          description:
            "Secure user registration and login system with JWT authentication.",
        },
        {
          iconName: "HiOutlineCreditCard",
          title: "Shopping Cart & Checkout",
          description:
            "Fully functional shopping cart with Stripe integration for secure payments.",
        },
        {
          iconName: "HiOutlineClipboardList",
          title: "Order Management",
          description:
            "Users can view their order history and track order status.",
        },
        {
          iconName: "HiOutlineCog",
          title: "Admin Panel",
          description:
            "Admin dashboard for managing products, users, and orders.",
        },
        {
          iconName: "HiOutlinePaintBrush",
          title: "Responsive Design",
          description:
            "Ensures a seamless experience across all devices using Tailwind CSS.",
        },
      ],
    },
    technologiesUsed: {
      id: "technologies-used",
      titleIconName: "HiOutlineLightningBolt",
      title: "Technologies Used",
      items: [
        {
          name: "MongoDB",
          description: "NoSQL database for flexible data storage.",
          iconName: "SiMongodb",
        },
        {
          name: "Express.js",
          description: "Backend framework for building robust APIs.",
          iconName: "SiExpress",
        },
        {
          name: "React",
          description: "Frontend library for building dynamic user interfaces.",
          iconName: "SiReact",
        },
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side logic.",
          iconName: "SiNodedotjs",
        },
        {
          name: "Redux",
          description: "State management for complex application states.",
          iconName: "SiRedux",
        },
        {
          name: "Stripe API",
          description: "Integration for secure online payment processing.",
          iconName: "SiStripe",
        },
        {
          name: "JWT",
          description: "JSON Web Tokens for secure authentication.",
          iconName: "SiJsonwebtokens",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for styling.",
          iconName: "SiTailwindcss",
        },
      ],
    },
    tableOfContents: true,
  },
  {
    slug: "ai-chatbot",
    name: "AI-Powered Chatbot",
    tagline:
      "An intelligent chatbot leveraging OpenAI's API for natural language understanding and engaging conversations.",
    mainImage: "/new-chatbot.webp",
    date: "April 2024",
    liveLink:
      "https://github.com/Saad-Ali-dev/fullstack-projects/tree/main/chatbot", // Using GitHub link as placeholder
    repoLink:
      "https://github.com/Saad-Ali-dev/fullstack-projects/tree/main/chatbot",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "LangChain"],
    accentColor: "hover:text-sky-400", // Example accent color
    about: {
      id: "about-project",
      titleIconName: "HiOutlineLink",
      title: "What is this AI Chatbot?",
      description:
        "<p>This project is an advanced AI chatbot built with Next.js and powered by the OpenAI API. It's designed to understand natural language queries, provide intelligent responses, and engage in human-like conversations.</p><p>The chatbot can be integrated into various applications to enhance user interaction and provide instant support, featuring contextual awareness and real-time responses facilitated by LangChain and Vercel AI SDK.</p>",
      image: "/projects/ai-chatbot/about-image.png", // Placeholder
    },
    features: {
      id: "features",
      titleIconName: "HiOutlineSparkles",
      title: "Features",
      items: [
        {
          iconName: "HiOutlineChatAlt2",
          title: "Natural Language Processing",
          description:
            "Utilizes OpenAI's state-of-the-art models for understanding and generating human-like text.",
        },
        {
          iconName: "HiOutlineSparkles",
          title: "Contextual Conversations",
          description:
            "Maintains conversation context for more relevant and coherent interactions.",
        },
        {
          iconName: "HiOutlineCog",
          title: "Customizable & Extendable",
          description:
            "Easily customizable prompts and adaptable for various use cases with LangChain integration.",
        },
        {
          iconName: "HiOutlineLightningBolt",
          title: "Real-time Streaming",
          description:
            "Provides quick and efficient answers to user queries with Vercel AI SDK.",
        },
        {
          iconName: "HiOutlineCubeTransparent",
          title: "Memory Capable",
          description:
            "Remembers previous parts of the conversation to provide coherent answers.",
        },
        {
          iconName: "HiOutlinePaintBrush",
          title: "Sleek UI/UX",
          description:
            "Modern and intuitive user interface built with Next.js and Tailwind CSS.",
        },
      ],
    },
    technologiesUsed: {
      id: "technologies-used",
      titleIconName: "HiOutlineLightningBolt",
      title: "Technologies Used",
      items: [
        {
          name: "Next.js",
          description:
            "React framework for server-side rendering and streaming.",
          iconName: "SiNextdotjs",
        },
        {
          name: "OpenAI API",
          description:
            "Powers the natural language understanding and generation.",
          iconName: "SiOpenai",
        },
        {
          name: "TypeScript",
          description: "Superset of JavaScript for type safety.",
          iconName: "SiTypescript",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development.",
          iconName: "SiTailwindcss",
        },
        {
          name: "LangChain",
          description:
            "Framework for developing applications powered by language models.",
          iconName: "SiLangchain",
        },
        {
          name: "Vercel AI SDK",
          description:
            "For seamless integration of AI features and streaming responses.",
          iconName: "HiOutlineCubeTransparent",
        }, // Placeholder icon
      ],
    },
    tableOfContents: true,
  },
  // Add more projects here following the same structure
];
