import { cn } from "@/lib/utils";
import { ImageOption } from "../app/types";
import Head from "next/head";

interface ImageGridProps {
  images: ImageOption[];
  selectedId: number | null;
  onSelect: (image: ImageOption) => void;
  className?: string;
  variable?: "X" | "Y" | "Z";
}

const variableBorders = {
  X: "border-blue-400 border-4",
  Y: "border-emerald-400 border-4",
  Z: "border-purple-400 border-4",
};

export function ImageGrid({
  images,
  selectedId,
  onSelect,
  className,
  variable,
}: ImageGridProps) {
  // Calculate sprite position based on image id (1-based index)
  const getSpritePosition = (id: number) => {
    // Since IDs are 1-based, subtract 1 to get 0-based index
    const position = `${(id - 1) * -100}px 0px`;
    return position; // Use percentage for better scaling
  };

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-6 gap-4 place-items-center",
        className
      )}
    >
      <Head>
        <link
          rel="preload"
          href="/puzzle_images/spritesheet.webp"
          as="image"
          type="image/png"
        ></link>
      </Head>
      {images.map((image) => (
        <div
          key={image.id}
          className={cn(
            "aspect-square cursor-pointer rounded-lg max-h-32 w-32 overflow-hidden border-2",
            selectedId === image.id
              ? variableBorders[variable || "X"]
              : "border-transparent"
          )}
          onClick={() => onSelect(image)}
        >
          <div
            className="w-full h-full bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/puzzle_images/spritesheet.webp')",
              backgroundPosition: getSpritePosition(image.id),
              transform: "scale(1.25)", // Scale up the background image
              transformOrigin: "left top", // Keep the scaling from the top left corner
              backgroundSize: "600px 100px", // Original sprite sheet size
            }}
          />
        </div>
      ))}
    </div>
  );
}
