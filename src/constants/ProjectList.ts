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
      "Built a Progressive Web App with Expenso Chatbot used by many active users, providing 95% mobile-responsive UI for budget and expense tracking",
      "Built a secure backend integrating JWT authentication and OTP verification, ensuring 99% system uptime.",
      "Integrated Gemini AI API to analyze financial queries, processing 1000+ requests with an average 2-secondresponse time.",
      // "Automated Excel report generation using the XLSX library, improving expense summary reporting efficiency for end users."
    ],
    images: [expensoImg, expenso2, expenso3], 
    tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "GenAI"],
    source: "https://github.com/prateekThakur84/Expensooo",
    demo: "https://expensooo.vercel.app/about",
  },
  {
    id: 2,
    name: "DSA Buddy",
    description: [
      "Built a DSA practice platform with 100+ coding questions and support for 3+ programming languages, integrating Judge0 API to handle 500+ daily submissions with 98% code execution accuracy.",
      "Implemented secure authentication with Google OAuth 2.0, email verification, forgot/reset password, and JWT,improving user onboarding and platform safety.",
      // "Integrated Razorpay payments to enable subscriptions and automated admin content management, reducing upload time by 60% and generating recurring revenue.",
      // "Added Cloudinary-based video solutions and an AI-powered DSA Buddy using Gemini API for context-aware question support, increasing user engagement..."
    ],
    // CHANGED: From 'img' to 'images' array
    images: [dsaBuddy, dsaBuddy2, dsaBuddy3], 
    tech: ["MERN Full-Stack Platform", "Judge0 API", "Generative AI"],
    source: "https://github.com/prateekThakur84/DSA_Buddy",
    demo: "https://dsabuddyy.netlify.app",
  },
];