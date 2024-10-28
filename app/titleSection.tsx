import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TitleSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 1.5 + i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const titleWords = ["Clouden's", "Calculator"];
  const mainTitleDuration = "Clouden's Calculator".length * 0.07 + 0.6;
  const subtitleWords =
    "Skip spending 5k points on Terminus for BEAM SMASHER".split(" ");

  return (
    <Card className="relative max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      <CardContent className="p-8 space-y-6 relative">
        {/* Static SEO-friendly content that's hidden when JS loads */}
        <div className="sr-only">
          <h1>Clouden&apos;s Calculator</h1>
          <h2>Skip spending 5k points on Terminus for BEAM SMASHER</h2>
          <p>
            Please select a symbol for each variable below. These can be found
            on the sticky notes located on the terminal.
          </p>
        </div>

        {/* Animated content */}
        <div className="inline-block w-full text-center">
          <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            <div className="flex justify-center flex-wrap gap-x-3">
              {titleWords.map((word, wordIndex) => (
                <div key={wordIndex} className="flex">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      custom={letterIndex + wordIndex * 10}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      className="text-4xl md:text-5xl font-extrabold tracking-tight whitespace-nowrap"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent inline-block mx-auto">
            <div className="flex flex-wrap justify-center mb-3">
              {subtitleWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                  className="text-base md:text-lg font-semibold px-1"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: mainTitleDuration + 1, duration: 0.8 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed"
          >
            Please select a symbol for each variable below. These can be found
            on the sticky notes located on the terminal.
          </motion.p>
        </div>
      </CardContent>
    </Card>
  );
}
