import { useState } from "react";

export interface ITipProps {
  percent?: number;
  base?: number;
  onDelete?: () => void;
}

/**
 * Rounds to the nearest 2 decimals
 * https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
 */
export function round(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export function TipShow(props: {
  percent: number;
  base: number;
  tipValue: number;
  totalVal: number;
  small?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div
      className={
        props.small
          ? "flex text-right text-3xl text-info pb-4"
          : "flex text-5xl pb-4 pt-4 text-right"
      }
    >
      <div className="opacity-80">
        {props.onChange ? (
          <input
            type="number"
            className="input input-lg text-center text-4xl w-[6ch]"
            onChange={props.onChange}
            value={props.percent}
          />
        ) : (
          props.percent
        )}
        %:
      </div>

      <div className="ml-auto">
        <div>+{props.tipValue.toFixed(2)}</div>
        <div className="font-semibold">{props.totalVal.toFixed(2)}</div>
      </div>
    </div>
  );
}

export function Tip({ base, percent, onDelete }: ITipProps) {
  const [_percent, setPercent] = useState(percent);

  if (!base || !_percent) {
    return null;
  }

  const tipValue = round(base * (_percent / 100));
  const totalVal = base + tipValue;
  const roundUpTotalVal = Math.ceil(totalVal);
  const roundUpTipValue = roundUpTotalVal - base;
  const roundUpPercent = round((roundUpTipValue / base) * 100);

  return (
    <div>
      <TipShow
        onChange={(e) => setPercent(+e.target.value)}
        percent={_percent}
        base={base}
        tipValue={tipValue}
        totalVal={totalVal}
      />
      {roundUpPercent !== percent && (
        <TipShow
          small
          percent={roundUpPercent}
          base={base}
          tipValue={roundUpTipValue}
          totalVal={roundUpTotalVal}
        />
      )}
      <button className="btn btn-sm w-full" onClick={onDelete}>
        -
      </button>
    </div>
  );
}
