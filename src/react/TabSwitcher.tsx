import type { TabSwitcherItem } from "@/types/TabSwitcherItem";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  items: TabSwitcherItem[];
  className?: string;
  textSize?: string;
}
const TabSwitcher: React.FC<Props> = ({
  items,
  className = "",
  textSize = "text-base",
}) => {
  const [selected, setSelected] = useState<number>(0);

  const noSelectedClasses =
    "bg-white/10 text-on-container-inactive hover:bg-white/20 border-white/10";
  const selectedClasses =
    "bg-accent/90 text-on-container shadow-md border-transparent";

  return (
    <div
      className={`flex flex-col xl:flex-row items-center gap-6 h-full w-full ${className}`}
    >
      <div className="gap-3 flex flex-row flex-wrap justify-center xl:flex-col max-w-4xl xl:max-w-[200px]">
        {items.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setSelected(i)}
            className={`z-100 w-[45%] sm:w-auto rounded-2xl ${textSize} font-semibold border px-3 sm:px-6 py-1 xl:py-2 transition-all duration-200
              ${selected === i ? selectedClasses : noSelectedClasses}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex-1"
        >
          {items[selected].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabSwitcher;
