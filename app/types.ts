export interface ImageOption {
  id: number;
  src: string;
  value: number;
  label: string;
}

export interface Selection {
  variable: "X" | "Y" | "Z";
  imageId: number | null;
  value: number | null;
}
