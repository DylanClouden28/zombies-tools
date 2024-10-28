"use client";

import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSelect = (image: ImageOption) => {
    onSelect({
      variable,
      imageId: image.id,
      value: image.value,
    });
    setOpen(false);
  };

  const content = (
    <ImageGrid
      images={imageOptions}
      selectedId={selection.imageId}
      onSelect={handleSelect}
      className="p-4"
    />
  );

  if (isDesktop) {
    return (
      <div className={className}>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-32 h-32">
              {selection.imageId ? (
                <Image
                  src={
                    imageOptions.find((img) => img.id === selection.imageId)
                      ?.src || ""
                  }
                  alt="Selected"
                  width={300}
                  height={300}
                />
              ) : (
                `Select ${variable}`
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Select Image for Variable {variable}</DialogTitle>
            </DialogHeader>
            {content}
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className={className}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-24 h-24">
            {selection.imageId ? (
              <Image
                src={
                  imageOptions.find((img) => img.id === selection.imageId)
                    ?.src || ""
                }
                alt="Selected"
                width={80}
                height={80}
              />
            ) : (
              `Select ${variable}`
            )}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Select Image for Variable {variable}</DrawerTitle>
          </DrawerHeader>
          <div className="w-full flex flex-col justify-center items-center"></div>
          {content}
          <DrawerClose asChild>
            <Button variant="outline" className="m-4">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
