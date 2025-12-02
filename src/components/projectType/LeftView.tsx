"use client";
import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "../ImageCarousel";

const LeftView = ({ id, name, description, img, tech, source, demo, images }) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 xl:mt-[120px] xl:grid-cols-12 gap-y-10 xl:gap-0">
      
      {/* --- TEXT CONTENT SECTION --- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: -50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5 }}
        className="relative order-2 col-span-5 flex w-full flex-col items-start xl:order-1"
      >
        <div className="w-full px-3 py-2 text-left text-3xl font-[600] transition-all duration-300 ease-in-out lg:py-0">
          <h3 className="font-bold text-heading">{name}</h3>
        </div>

        <div className="group left-0 top-[40px] z-10 mt-1 w-full rounded-lg bg-bgDark p-2 shadow-sm shadow-slate-800 lg:absolute lg:w-[500px]">
          {description.map((item, i) => (
            <div key={i} className="flex items-start gap-1 sm:gap-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <div className="text-sm text-textWhite">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-heading md:gap-3 md:text-sm lg:mt-[200px]">
          {tech?.map((item, i) => (
            <span key={i} className="rounded bg-white/10 px-2 py-1">{item}</span>
          ))}
        </div>

        <div className="mt-5 flex w-full items-center justify-start gap-10 text-sm font-[500]">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer flex-col items-center gap-1"
            >
              <GitHubIcon />
              <span className="absolute left-[50%] top-[150%] w-[90px] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer flex-col items-center gap-1"
            >
              <LaunchIcon />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* --- CAROUSEL SECTION --- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={inViewContent ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1, filter: "blur(6px)" }}
        transition={{ duration: 1 }}
        className="order-1 col-span-7 flex justify-center xl:justify-end xl:order-2"
      >
        <div className="relative h-[300px] w-full sm:h-[350px] md:w-[500px]"> 
          <ImageCarousel images={images || img} />
        </div>
      </motion.div>
    </div>
  );
};

export default LeftView;