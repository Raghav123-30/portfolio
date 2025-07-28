"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 via-white to-white px-6 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="flex-1 relative">
            <Image
              src={"/profile.jpg"}
              alt="profile"
              height={400}
              width={400}
              className="rounded-xl shadow-md hover:shadow-xl cursor-pointer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            {`Hi, I'm`} <span className="text-blue-700">Raghavendra Bhat</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            {`I'm a `}
            <span className="text-purple-600 font-semibold">
              {` Software Engineer `}
            </span>
            with over <strong>2 years</strong> of experience working across web,
            mobile, and backend systems.
            <br />
            <br />
            {`Over that time, I've had the chance to build and ship frontend
            interfaces, mobile apps, and backend APIs — as well as design
            cloud-based solutions that support real-world use cases. I really
            enjoy building things that are reliable, easy to use, and make a
            difference for the people who use them.`}
            <br />
            <br />
            {`Lately, I've been diving into AI-driven development — exploring
            agentic systems, Retrieval-Augmented Generation (RAG), and the Model
            Context Protocol (MCP) to better understand how we can build
            smarter, more adaptive applications.`}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
