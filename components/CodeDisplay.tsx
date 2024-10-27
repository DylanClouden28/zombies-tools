// components/CodeDisplay.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Selection } from "../app/types";
import { calculateCodes } from "../app/calculations";

interface CodeDisplayProps {
  selections: Selection[];
}

export function CodeDisplay({ selections }: CodeDisplayProps) {
  const allSelected = selections.every((s) => s.value !== null);

  let codes: [number, number, number] | null = null;

  if (allSelected) {
    const x = selections.find((s) => s.variable === "X")?.value ?? 0;
    const y = selections.find((s) => s.variable === "Y")?.value ?? 0;
    const z = selections.find((s) => s.variable === "Z")?.value ?? 0;
    codes = calculateCodes(x, y, z);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Calculated Codes</CardTitle>
        <CardDescription className="text-center">
          Based on your symbol selections
        </CardDescription>
      </CardHeader>
      <CardContent>
        {codes ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {codes.map((code, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 py-2">
                  <CardTitle className="text-center text-sm text-gray-600">
                    Code {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="text-center font-mono text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {code}
                  </div>
                  <div className="text-center text-xs text-gray-500 mt-2">
                    {index === 0 && "2X + 11"}
                    {index === 1 && "(2Z + Y) - 5"}
                    {index === 2 && "|Y + Z - X|"}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            Select all symbols to generate codes
          </div>
        )}
      </CardContent>
    </Card>
  );
}
