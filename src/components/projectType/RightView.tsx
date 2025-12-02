"use client";
import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ImageCarousel from "../ImageCarousel";

// Define strict types to satisfy the build
interface RightViewProps {
  id: any;
  name: any;
  description: any[];
  img?: any;    // Added '?' to make it optional
  tech: any[];
  source: string;
  demo: string;
  images: any;  // This is the new main prop
}

const RightView = ({ id, name, description, img, tech, source, demo, images }: RightViewProps) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 lg:mt-[120px] xl:grid-cols-12 gap-y-10 xl:gap-0">
      
      {/* --- CAROUSEL SECTION --- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
        animate={
          inViewContent
            ? { opacity: 1, x: 0, filter: "blur(0px)" }
            : { opacity: 1, x: -50, filter: "blur(6px)" }
        }
        transition={{ duration: 1 }}
        className="col-span-7 w-full flex justify-center lg:justify-start transition-all duration-700 ease-in-out hover:z-20 hover:scale-[1.02]"
      >
        <div className="relative h-[300px] w-full sm:h-[350px] md:w-[500px]">
          <ImageCarousel images={images || img} />
        </div>
      </motion.div>

      {/* --- TEXT CONTENT SECTION --- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{
          once: true,
          amount: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative col-span-5 flex w-full flex-col items-end"
      >
        <div className={`w-full px-3 py-2 text-right text-3xl font-[600] transition-all duration-300 ease-in-out lg:py-0`}>
          <h3 className="text-heading font-bold">{name}</h3>
        </div>

        <div className="group right-0 top-[40px] z-10 mt-1 w-full rounded-lg bg-bgDark shadow-sm shadow-slate-800 p-2 lg:absolute lg:w-[500px]">
          {description?.map((item, i) => (
            <div key={i} className="flex items-start gap-1 sm:gap-2">
              <ArrowRight className={" h-5 w-4 flex-none"} />
              <div className="text-sm text-textWhite">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-end items-center gap-2 text-xs text-heading font-medium md:gap-3 md:text-sm lg:mt-[200px] ">
          {tech?.map((item, i) => {
            return <span key={i} className="rounded bg-white/10 px-2 py-1">{item}</span>;
          })}
        </div>

        <div className="mt-5 flex w-full items-center justify-end gap-8 text-sm font-[500]">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer items-center gap-1"
            >
              <GitHubIcon />
              <span className="absolute -left-[135%] top-7 w-[90px] whitespace-nowrap px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex animate-bounce cursor-pointer items-center gap-2"
            >
              <LaunchIcon />
              <span className="absolute -left-[60%] top-7 w-fit px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RightView;