"use client";

import { ImageGrid } from "./ImageGrid";
import { ImageOption, Selection } from "../app/types";
import { imageOptions } from "../app/imageData";

interface VariableSelectionProps {
  variable: "X" | "Y" | "Z";
  selection: Selection;
  onSelect: (selection: Selection) => void;
  className?: string;
}

export default function VariableSelection({
  variable,
  selection,
  onSelect,
  className,
}: VariableSelectionProps) {
  const handleSelect = (image: ImageOption) => {
    onSelect({
      variable,
      imageId: image.id,
      value: image.value,
    });
  };

  return (
    <div className={className}>
      <ImageGrid
        images={imageOptions}
        selectedId={selection.imageId}
        onSelect={handleSelect}
        variable={variable}
        className="p-4"
      />
    </div>
  );
}
