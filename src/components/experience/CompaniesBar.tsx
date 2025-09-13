import React from "react";
import { motion } from "framer-motion";

interface CompaniesBarProps {
  setDescriptionJob: (desc: string) => void;
}

interface CompanyButtonProps {
  index: number;
  name: string;
  barPosition: number;
  barAbovePosition: number;
  description: string;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setBarPosition: React.Dispatch<React.SetStateAction<number>>;
  setBarAbovePosition: React.Dispatch<React.SetStateAction<number>>;
  setDescriptionJob: (desc: string) => void;
}

const CompanyButton: React.FC<CompanyButtonProps> = ({
  index,
  name,
  barPosition,
  barAbovePosition,
  description,
  activeIndex,
  setActiveIndex,
  setBarPosition,
  setBarAbovePosition,
  setDescriptionJob,
}) => {
  const isActive = activeIndex === index;

  return (
    <button
      onClick={() => {
        setBarPosition(barPosition);
        setBarAbovePosition(barAbovePosition);
        setDescriptionJob(description);
        setActiveIndex(index);
      }}
      className={`w-32 flex-none rounded py-3 text-center font-mono text-sm duration-500 hover:text-gray-500 lg:w-44 lg:px-4 lg:pl-6 lg:text-left lg:text-base
        ${isActive ? "scale-[1.03] text-heading" : "text-textWhite"}`}
    >
      {name}
    </button>
  );
};

const CompaniesBar: React.FC<CompaniesBarProps> = ({ setDescriptionJob }) => {
  const [barPosition, setBarPosition] = React.useState<number>(0);
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(0);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const companies = [
    { name: "Classio Labs", description: "", barPosition: 0, barAbove: 0 },
  ];

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-scroll pb-4 md:items-center md:justify-center lg:w-[220px] lg:flex-row lg:overflow-hidden lg:pb-0 ">
      {/* Left bar holder */}
      <div className="relative order-1 hidden translate-y-1 rounded bg-gray-500 lg:block lg:h-[240px] lg:w-0.5">
        <motion.div
          animate={{ y: barPosition }}
          className="absolute h-0.5 w-10 rounded bg-heading lg:h-10 lg:w-0.5"
        />
      </div>

      {/* Company buttons */}
      <div className="order-1 flex flex-col space-y-1 px-4 md:px-8 lg:order-2 lg:px-0">
        <div className="flex flex-row lg:flex-col">
          {companies.map((company, index) => (
            <CompanyButton
              key={index}
              index={index}
              name={company.name}
              barPosition={company.barPosition}
              barAbovePosition={company.barAbove}
              description={company.description}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              setBarPosition={setBarPosition}
              setBarAbovePosition={setBarAbovePosition}
              setDescriptionJob={setDescriptionJob}
            />
          ))}
        </div>

        {/* Mobile bottom bar */}
        <div className="block h-0.5 rounded bg-gray-500 lg:hidden">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="h-0.5 w-[128px] rounded bg-heading"
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesBar;
