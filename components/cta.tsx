import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/logo.png"
        alt="Runwise logo"
        className="mx-auto h-12 w-12 my-4"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <div className="text-center text-3xl font-medium tracking-tighter sm:text-5xl">
          <TextBlur
            className="inline"
            text="AI-powered automation made "
          />
          <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 bg-clip-text text-transparent font-semibold">
            effortless
          </span>
          <TextBlur
            className="inline"
            text="."
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join the Runwise waitlist to get early access and perks"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
