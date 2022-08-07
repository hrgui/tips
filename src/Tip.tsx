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
    <div className={props.small ? "tip-show--small" : "tip-show"}>
      {props.percent}%: ${props.base.toFixed(2)} + <strong>${props.tipValue.toFixed(2)}</strong> ={" "}
      <strong>${props.totalVal.toFixed(2)}</strong>
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
