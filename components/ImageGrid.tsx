import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageOption } from "../app/types";

interface ImageGridProps {
  images: ImageOption[];
  selectedId: number | null;
  onSelect: (image: ImageOption) => void;
  className?: string;
}

export function ImageGrid({
  images,
  selectedId,
  onSelect,
  className,
}: ImageGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center",
        className
      )}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={cn(
            "aspect-square cursor-pointer rounded-lg max-h-32 w-32 overflow-hidden border-2",
            selectedId === image.id ? "border-blue-500" : "border-transparent"
          )}
          onClick={() => onSelect(image)}
        >
          <Image
            src={image.src}
            alt={image.label}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
