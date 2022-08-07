import * as React from "react";
import { Tip } from "./Tip";

export default function TipsCalculator() {
  const [currentValue, setCurrentValue] = React.useState<number>(0);

  return (
    <div className="card bg-base-200 p-6">
      <div className="form-control w-full">
        <input
          ref={null}
          type="text"
          placeholder="Type here"
          className="input input-lg input-bordered w-full text-4xl p-4 text-right"
          onChange={(e) => +e.target.value && setCurrentValue(+e.target.value)}
        />
      </div>
      <Tip base={currentValue} percent={15} />
      <Tip base={currentValue} percent={18} />
      <Tip base={currentValue} percent={20} />
    </div>
  );
}
