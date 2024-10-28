import { Card, CardContent } from "@/components/ui/card";

export default function TitleSection() {
  const titleWords = ["Clouden's", "Calculator"];
  const subtitleWords =
    "Skip spending 5k points on Terminus for BEAM SMASHER".split(" ");

  return (
    <Card className="relative max-w-4xl mx-auto overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      <CardContent className="p-8 space-y-6 relative">
        <div className="inline-block w-full text-center">
          <div className="flex justify-center flex-wrap gap-x-3">
            {titleWords.map((word, wordIndex) => (
              <div key={wordIndex} className="flex">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`${wordIndex}-${letterIndex}`}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight animate-pop text-violet-600"
                    style={{
                      animationDelay: `${
                        (letterIndex + wordIndex * 10) * 70
                      }ms`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {subtitleWords.map((word, i) => (
              <span
                key={i}
                className="text-base md:text-lg font-semibold animate-pop-word text-rose-600"
                style={{
                  animationDelay: `${1500 + i * 150}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center animate-fade">
          Please select a symbol for each variable below. These can be found on
          the sticky notes located on the terminal.
        </p>
      </CardContent>
    </Card>
  );
}
