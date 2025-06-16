// app/components/contact-modal-views/ContactFormView.js
import { FaPaperPlane } from "react-icons/fa";

export default function ContactFormView({
  register,
  errors,
  handleSubmit,
  processForm,
  isSubmitting,
  messageValue,
}) {
  return (
    <form onSubmit={handleSubmit(processForm)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-black/20 border ${errors.name ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full bg-black/20 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <span className="text-xs text-gray-400">
            {messageValue?.length || 0} / 1000
          </span>
        </div>
        <textarea
          id="message"
          rows="4"
          {...register("message")}
          className={`w-full bg-black/20 border ${errors.message ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
          placeholder="What would you like to discuss?"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
      >
        <FaPaperPlane />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
