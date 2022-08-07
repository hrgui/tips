import * as React from "react";
import { Tip } from "./Tip";

export interface ITipsCalculatorProps {}

export default function TipsCalculator(props: ITipsCalculatorProps) {
  const [currentValue, setCurrentValue] = React.useState<number>(0);

  return (
    <div className="card bg-base-200 p-6 shadow-xl">
      <div className="form-control w-full">
        <input
          ref={null}
          type="text"
          placeholder="Type here"
          className="input w-full text-5xl p-4 text-right"
          onChange={(e) => +e.target.value && setCurrentValue(+e.target.value)}
        />
      </div>
      <Tip base={currentValue} percent={15} />
      <Tip base={currentValue} percent={18} />
      <Tip base={currentValue} percent={20} />
    </div>
  );
}
