import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import { itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.footer 
      className="w-full py-4 mt-8"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center text-sm text-gray-400">
        <TextBlur
          text="© 2025 Runwise. All rights reserved."
          className="text-gray-400"
          duration={0.8}
        />
      </div>
    </motion.footer>
  );
}
