import * as React from 'react';

export interface ITipProps {
  percent: number;
  base: number;
}

/**
 * Rounds to the nearest 2 decimals
 * https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
 */
export function round(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export function TipShow(props: {percent: number, base: number, tipValue: number, totalVal: number, small?: boolean}) {
  return <div className={props.small ? 'tip-show--small' : 'tip-show'}>{props.percent}%: ${props.base.toFixed(2)} + <strong>${props.tipValue.toFixed(2)}</strong> = <strong>${props.totalVal.toFixed(2)}</strong></div>
}

export function Tip (props: ITipProps) {
  const tipValue = round(props.base * (props.percent / 100));
  const totalVal = props.base + tipValue;
  const roundUpTotalVal = Math.ceil(totalVal);
  const roundUpTipValue = roundUpTotalVal - props.base;
  const roundUpPercent = round((roundUpTipValue / props.base) * 100);

  if (props.base === 0) {
    return null;
  }

  return (
    <div>
      <TipShow percent={props.percent} base={props.base} tipValue={tipValue} totalVal={totalVal} />
      {roundUpPercent !== props.percent && <TipShow small percent={roundUpPercent} base={props.base} tipValue={roundUpTipValue} totalVal={roundUpTotalVal} />}
    </div>
  );
}
