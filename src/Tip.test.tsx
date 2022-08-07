import { describe, it, expect } from "vitest";
import { round, Tip } from "./Tip";
import { render } from "@testing-library/react";

describe("round", () => {
  it("rounds correctly to nearest 2 decimals", () => {
    expect(round(6.774)).toEqual(6.77);
    expect(round(6.775)).toEqual(6.78);
    expect(round(1.005)).toEqual(1.01);
  });
});

describe("Tip", () => {
  it("should render nothing when there is no base or percent", () => {
    const { asFragment } = render(<Tip />);
    expect(asFragment()).toMatchInlineSnapshot("<DocumentFragment />");
  });

  it("should render something with base and percent when there is no base", () => {
    const { asFragment } = render(<Tip base={35.25} percent={15} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          <div
            class="tip-show"
          >
            15%: $35.25 + 
            <strong>
              $5.29
            </strong>
             = 
            <strong>
              $40.54
            </strong>
          </div>
          <div
            class="tip-show--small"
          >
            16.31%: $35.25 + 
            <strong>
              $5.75
            </strong>
             = 
            <strong>
              $41.00
            </strong>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
