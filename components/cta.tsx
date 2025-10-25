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
        alt="Runwise AI Logo - AI-Powered Automation Platform"
        className="mx-auto h-12 w-12 my-4"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <h1 className="text-center text-3xl font-medium tracking-tighter sm:text-5xl">
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
        </h1>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg">
          <TextBlur
            className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
            text="Join the Runwise AI waitlist to get early access and exclusive perks for revolutionary AI automation tools"
            duration={0.8}
          />
        </h2>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4">
        <p className="mx-auto max-w-[30rem] text-center text-sm text-zinc-400">
          Runwise AI is revolutionizing automation with intelligent AI-powered solutions. 
          Be among the first to experience effortless automation that transforms how you work.
        </p>
      </motion.div>
    </motion.div>
  );
}
