import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ClassioLabs() {
 const tasks = [
  {
    text: "Developed 15+ RESTful APIs using Node.js and Express.js, reducing response time by 25%",
  },
  {
    text: "Integrated APIs with the frontend, collaborating with a team of 3 engineers, improving performance by 20%",
  },
  {
    text: "Implemented OAuth 2.0 authentication with RBAC for 500+ users",
  },
  {
    text: "Optimized 20+ database queries and indexing, improving data retrieval speeds by 30%",
  },
];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
    >
      <div className="flex w-full flex-col space-y-3 ">
        <div className="spacey-y-2 flex flex-col">
          {/* Title */}
          <div className="flex items-center justify-between">
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              Full Stack Developer Intern
            </span>
            <span className="text-sm">Indore, MP</span>
          </div>

          <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
            {/* Company name */}
            <span>Classio Labs</span>

            {/* Date */}
            <span>July 2025 - Sept 2025</span>
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-sm sm:text-base">
          {/* Tasks */}
          {tasks?.map((item, index) => (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span>{item.text}</span>
            </div>
          ))}

          <div className="flex flex-row space-x-2">
            <ArrowRight className="h-5 w-4 flex-none" />
            <span className="font-bold text-heading">
              Technologies used: ReactJS, NodeJS, MongoDB, ExpressJS.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
