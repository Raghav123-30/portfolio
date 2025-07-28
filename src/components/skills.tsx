"use client";

import { motion } from "motion/react";

const techGroups: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Sveltekit", "TailwindCSS"],
  "Cross Platform": ["Flutter", "React Native"],
  "Native Mobile Development": [
    "Jetpack Compose",
    "SwiftUI",
    "Kotlin Multiplatform",
  ],
  Backend: [
    "Node.js",
    "Go",
    "SpringBoot",
    "Ktor",
    "Python",
    "GraphQL",
    "Redis",
    "Kafka",
  ],
  Databases: ["PostgreSQL", "Redis", "MongoDB", "SQLite"],
  Enterprise: [
    "Architecture & Design",
    "Microservices",
    "Paylod(Headless CMS)",
  ],
  "Cloud & Deployment": ["AWS", "Vercel", "Firebase", "Serverless Framework"],
  "AI / ML": ["PyTorch", "LangChain", "OpenAI API", "Gemini API", "MCP"],
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.3,
    },
  }),
};

export default function Skills() {
  return (
    <div className="p-10 max-w-6xl mx-auto text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Skills
      </motion.h1>

      <div className="space-y-12">
        {Object.entries(techGroups).map(([group, items]) => (
          <div key={group}>
            <h2 className="text-2xl font-semibold mb-5">{group}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((tech, i) => (
                <motion.div
                  key={tech}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center py-3 px-4 text-base font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
