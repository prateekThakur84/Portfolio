// src/constants/ProjectList.js
import expensoImg from "@/assets/projects/expenso.png";
import expenso2 from "@/assets/projects/expenso2.png"; // Example import
import expenso3 from "@/assets/projects/expenso3.png"; // Example import

import dsaBuddy from "@/assets/projects/dsaBuddy.png";
import dsaBuddy2 from "@/assets/projects/dsaBuddy2.png"; // Example import
import dsaBuddy3 from "@/assets/projects/dsaBuddy3.png"; // Example import

export const ProjectList = [
  {
    id: 1,
    name: "Expenso",
    description: [
      "Engineered a scalable PWA with a mobile-first React UI...",
      "Integrated Google Gemini API to build 'Expenso AI'...",
      "Implemented Cloudinary for secure image storage...",
    ],
    // CHANGED: From 'img' to 'images' array
    images: [expensoImg, expenso2, expenso3], 
    tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "GenAI"],
    source: "https://github.com/prateekThakur84/Expensooo",
    demo: "https://expensooo.vercel.app/about",
  },
  {
    id: 2,
    name: "DSA Buddy",
    description: [
      "Built a DSA practice platform with 100+ coding questions...",
      "Implemented secure authentication with Google OAuth 2.0...",
      "Integrated Razorpay payments...",
    ],
    // CHANGED: From 'img' to 'images' array
    images: [dsaBuddy, dsaBuddy2, dsaBuddy3], 
    tech: ["MERN Full-Stack Platform", "Judge0 API", "Generative AI"],
    source: "https://github.com/prateekThakur84/DSA_Buddy",
    demo: "https://dsa-buddy-frontend.onrender.com",
  },
];