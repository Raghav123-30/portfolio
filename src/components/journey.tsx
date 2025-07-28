"use client";

import { motion } from "motion/react";
import { CalendarDays, Briefcase } from "lucide-react";

const journey = [
  {
    title: "Software Engineer at Pequrel Technologies",
    duration: "Feb 2024 – Present",
    description: `Worked on software solutions for an agri-tech startup focused on increasing farmer income using IoT-based crop drying and growing systems.Implemented web-based admin services and a Flutter-based mobile app for their customers.

The web app allows IoT product registration, customer onboarding, crop-training assignments, and serves an API documentation hub for microcontroller programming. Admins can upload documents and product details for their customers.

All APIs are deployed using the Serverless Framework on AWS Lambda. The mobile app (localized in Hindi and Kannada) lets customers deploy crops to their owned infrastrucutre, monitor sensor data, read guidelines, and view the latest product info.`,
    tools: [
      "Next.js",
      "TailwindCSS",
      "ShadCN",
      "Payload(Headless CMS)",
      "RazorPay API",
      "Flutter",
      "Spring Boot",
      "MongoDB",
      "AWS EC2",
      "Lambda",
      "Serverless Framework",
      "S3",
      "Amplify",
      "SNS",
      "Route53",
    ],
  },
  {
    title: "Internship at Pequrel Technologies",
    duration: "Jan 2023 – May 2023",
    description: `Built an admin dashboard to manage customers, products, and crop data. Designed solution for scheduling features to track crop drying sessions and farmer pickup times.

Contributed to a React Native mobile app used by infrastructure operators to control and monitor deployed systems.`,
    tools: ["React", "Express", "Firebase", "React Native"],
  },
  {
    title: "Academic Project at KLE Technological University",
    duration: "June 2022 – Dec 2022",
    description: `Worked on a research project focused on AI-based medical image synthesis using Generative Adversarial Networks (GANs).\n\nThe goal was to generate corresponding MRI scan t2 images from t1 brain MRI scan inputs and vice versa, using an unsupervised approach. We implemented CycleGAN to handle the image-to-image translation task without paired datasets.\n\nThis involved reviewing multiple research papers and understanding statistical techniques to evaluate model outputs.`,
    tools: ["Python", "PyTorch", "OpenCV", "Statistics"],
  },
  {
    title: "Academic Project at KLE Technological University",
    duration: "April 2021 – May 2022",
    description: `Worked on a research project focused on AI-based Talking Face Generation (TFG), focusing on generating realistic head and facial movements synchronized with speech input.\n\nWe explored state-of-the-art methods including Pix2Pix, CycleGAN, U-Net, and contrastive learning frameworks. Our work involved mapping speech features to facial expressions, incorporating concepts like facial action units and key point tracking.\n\n We studied related literature and conducted domain analysis on emotion modeling, temporal alignment, and visual fidelity challenges in speech-driven facial animation.`,
    tools: ["Python", "PyTorch", "OpenCV", "Statistics"],
  },
];

export default function Journey() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-slate-900 font-bold text-center mb-16"
      >
        My Journey
      </motion.h2>

      <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[36px] top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
            <h3 className="text-2xl font-semibold text-slate-900">
              <Briefcase className="inline-block w-5 h-5 mr-2 text-blue-600" />
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 mb-3 flex items-center">
              <CalendarDays className="w-4 h-4 mr-1" /> {item.duration}
            </p>
            <p className="text-gray-700 whitespace-pre-line mb-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full shadow"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
