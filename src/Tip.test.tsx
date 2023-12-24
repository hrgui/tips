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
            class="flex text-5xl pb-4 pt-4 text-right"
          >
            <div
              class="opacity-80"
            >
              <input
                class="input input-lg text-center text-4xl w-[6ch]"
                type="number"
                value="15"
              />
              %:
            </div>
            <div
              class="ml-auto"
            >
              <div>
                +5.29
              </div>
              <div
                class="font-semibold"
              >
                40.54
              </div>
            </div>
          </div>
          <div
            class="flex text-right text-3xl text-info pb-4"
          >
            <div
              class="opacity-80"
            >
              16.31%:
            </div>
            <div
              class="ml-auto"
            >
              <div>
                +5.75
              </div>
              <div
                class="font-semibold"
              >
                41.00
              </div>
            </div>
          </div>
          <button
            class="btn btn-sm w-full"
          >
            -
          </button>
        </div>
      </DocumentFragment>
    `);
  });
});
