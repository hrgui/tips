import { useState } from "react";
import { Tip } from "./Tip";

interface TipsCalculatorProps {
  currentValue?: number;
  tipPercents?: number[];
}

export default function TipsCalculator({
  currentValue: _currentValue = 0,
  tipPercents: _tipPercents = [15, 18, 20],
}: TipsCalculatorProps) {
  const [currentValue, setCurrentValue] = useState<number>(_currentValue);
  const [tipPercents, setTipPercents] = useState<number[]>(_tipPercents);

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
        {tipPercents.map((tipPercent, index) => (
          <Tip
            onDelete={() => {
              setTipPercents([...tipPercents.slice(0, index), ...tipPercents.slice(index + 1)]);
            }}
            key={`${tipPercent}-${index}`}
            base={currentValue}
            percent={tipPercent}
          />
        ))}
        <button
          className="btn w-full mt-4"
          onClick={() => setTipPercents([...tipPercents, tipPercents[tipPercents.length - 1] + 1])}
        >
          +
        </button>
      </div>
    </>
  );
}
