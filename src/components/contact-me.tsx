"use client";

import { ContactMeAction } from "@/actions/contact";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function ContactMe() {
  const [state, action, isPending] = useActionState(ContactMeAction, {
    error: false,
    message: "",
  });

  const showForm = !state.message;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 text-slate-900"
      >
        Contact Me
      </motion.h2>

      {showForm ? (
        <motion.form
          action={action}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-3xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isPending}
            className="w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow transition"
          >
            {isPending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      ) : state.error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center space-y-4 text-red-600"
        >
          <XCircle className="w-16 h-16" />
          <p className="text-lg font-medium">
            Something went wrong. Please try again later.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center text-center space-y-4 text-green-600"
        >
          <CheckCircle className="w-16 h-16" />
          <p className="text-lg font-medium">
            Message sent successfully. I’ll get back to you soon!
          </p>
        </motion.div>
      )}
    </section>
  );
}
