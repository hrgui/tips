import * as React from "react";
import { Tip } from "./Tip";

export default function TipsCalculator() {
  const [currentValue, setCurrentValue] = React.useState<number>(0);

  return (
    <>
      <div className="card bg-base-200 z-10 mb-4 form-control w-full sticky top-0 p-4 shadow-md">
        <input
          id="tipInput"
          ref={null}
          type="text"
          placeholder="Type here"
          className="input input-lg input-bordered w-full text-4xl p-4 text-right"
          onChange={(e) => +e.target.value && setCurrentValue(+e.target.value)}
        />
      </div>
      <div className="card bg-base-200 p-6 pt-4 pb-4">
        <Tip base={currentValue} percent={15} />
        <Tip base={currentValue} percent={18} />
        <Tip base={currentValue} percent={20} />
      </div>
    </>
  );
}
