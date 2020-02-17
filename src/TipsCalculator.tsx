import * as React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Tip } from "./Tip";

export interface ITipsCalculatorProps {}

export default function TipsCalculator(props: ITipsCalculatorProps) {
  const [currentValue, setCurrentValue] = React.useState<number>(0);

  return (
    <div>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment className="total-input__adornment" position="start">$</InputAdornment>
        }}
        className="total-input"
        inputProps={{ align: "right" }}
        fullWidth
        value={currentValue}
        type="number"
        onChange={e => setCurrentValue(+e.target.value)}
      />
      <Tip base={currentValue} percent={15} />
      <Tip base={currentValue} percent={18} />
      <Tip base={currentValue} percent={20} />
    </div>
  );
}
