export interface ITipProps {
  percent?: number;
  base?: number;
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
}) {
  return (
    <div
      className={
        props.small
          ? "flex text-right text-3xl text-info pb-4"
          : "flex text-5xl pb-4 pt-4 text-right"
      }
    >
      <div className="opacity-80">{props.percent}%:</div>

      <div className="ml-auto">
        <div>+{props.tipValue.toFixed(2)}</div>
        <div className="font-semibold">{props.totalVal.toFixed(2)}</div>
      </div>
    </div>
  );
}

export function Tip({ base, percent }: ITipProps) {
  if (!base || !percent) {
    return null;
  }

  const tipValue = round(base * (percent / 100));
  const totalVal = base + tipValue;
  const roundUpTotalVal = Math.ceil(totalVal);
  const roundUpTipValue = roundUpTotalVal - base;
  const roundUpPercent = round((roundUpTipValue / base) * 100);

  return (
    <div>
      <TipShow percent={percent} base={base} tipValue={tipValue} totalVal={totalVal} />
      {roundUpPercent !== percent && (
        <TipShow
          small
          percent={roundUpPercent}
          base={base}
          tipValue={roundUpTipValue}
          totalVal={roundUpTotalVal}
        />
      )}
    </div>
  );
}
