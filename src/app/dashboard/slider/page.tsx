"use client"

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 30]);

  return (
    <div>
      <p className="mb-2">Value: {value}</p>
      <Slider
        defaultValue={[value]}
        onValueChange={(value) => setValue(value[0])}
        max={100}
        step={1}
      />
      
      <p className="mt-3 mb-2">Value: {rangeValue.join(" - ")}</p>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
}
