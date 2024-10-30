"use client";

import { useState } from "react";
import VariableSelection from "@/components/variableSelection";
import { CodeDisplay } from "@/components/CodeDisplay";
import { Selection } from "./types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import TitleSection from "./titleSection";
import { Analytics } from "@vercel/analytics/react";

const variableColors = {
  X: "text-blue-600",
  Y: "text-emerald-600",
  Z: "text-purple-600",
};

const badgeColors = {
  X: "bg-blue-600 hover:bg-blue-700",
  Y: "bg-emerald-600 hover:bg-emerald-700",
  Z: "bg-purple-600 hover:bg-purple-700",
};

const variableBorders = {
  X: "border-blue-200 hover:border-blue-400",
  Y: "border-emerald-200 hover:border-emerald-400",
  Z: "border-purple-200 hover:border-purple-400",
};

export default function Home() {
  const [selections, setSelections] = useState<Selection[]>([
    { variable: "X", imageId: null, value: null },
    { variable: "Y", imageId: null, value: null },
    { variable: "Z", imageId: null, value: null },
  ]);

  const handleSelect = (newSelection: Selection) => {
    setSelections((prev) =>
      prev.map((selection) =>
        selection.variable === newSelection.variable ? newSelection : selection
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="max-w-5xl mx-auto space-y-3 mb-12">
            <TitleSection />
            <p
              aria-hidden="true"
              className="text-transparent text-center"
              style={{ fontSize: "0.1px", opacity: "0", pointerEvents: "none" }}
            >
              Terminus Calculator, Beam Smasher Calculator, Clouden’s Terminus
              Tool for COD Zombies, Calculator for Terminus Easter Egg, Black
              Ops 6 Terminus Tool, Black Ops Terminus Gameplay Calculator.
            </p>

            <div className="flex flex-col justify-center items-center">
              <div className="relative aspect-[16/9] w-full md:w-3/4 shadow-2xl">
                <img
                  src="/puzzle_images/puzzle_example.webp"
                  alt="Example Image for puzzle"
                  className="absolute w-full h-full object-cover"
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Selection Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 md:gap-8 mb-8">
              {selections.map((selection) => (
                <div
                  key={selection.variable}
                  className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 rounded-xl p-4 md:p-6 space-y-4"
                >
                  <div
                    className={`text-xl md:text-2xl font-bold text-center ${
                      variableColors[
                        selection.variable as keyof typeof variableColors
                      ]
                    }`}
                  >
                    Variable {selection.variable}
                  </div>
                  {/* Removed the extra wrapper div that was causing double border */}
                  <div className="flex flex-col justify-center items-center">
                    <VariableSelection
                      variable={selection.variable}
                      selection={selection}
                      onSelect={handleSelect}
                      className={`${
                        variableBorders[
                          selection.variable as keyof typeof variableBorders
                        ]
                      }`}
                    />
                  </div>
                  {selection.value != null && (
                    <div className="flex justify-center items-center space-x-2 text-base md:text-lg">
                      <span>Symbol&apos;s Value:</span>
                      <Badge
                        className={cn(
                          badgeColors[
                            selection.variable as keyof typeof badgeColors
                          ],
                          "text-white px-3 py-1"
                        )}
                      >
                        {selection.value}
                      </Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <CodeDisplay selections={selections} />
          </div>
        </div>
      </div>
      <footer className="w-full py-6 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 mt-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-6">
          <div className="text-sm text-gray-500 space-y-2">
            <p>Calculator made by Clouden</p>
            <p>
              Example image from{" "}
              <a
                href="https://www.reddit.com/r/BlackOps6Zombies/comments/1gchx3g/stop_spending_5k_at_peck_for_the_laboratory_code/#lightbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
              >
                Reddit post
              </a>{" "}
              (because I am lazy)
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}
