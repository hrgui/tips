import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TipsCalculator from "./TipsCalculator";
import userEvent from "@testing-library/user-event";

it("should render default initial state nornally", () => {
  const { asFragment } = render(<TipsCalculator />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="card bg-base-200 p-6"
      >
        <div
          class="form-control w-full"
        >
          <input
            class="input w-full text-5xl p-4 text-right"
            placeholder="Type here"
            type="text"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

it("should handle case when an invalid value is typed", async () => {
  const { asFragment } = render(<TipsCalculator />);
  const input = screen.getByPlaceholderText("Type here");

  await userEvent.type(input, "a");

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="card bg-base-200 p-6"
      >
        <div
          class="form-control w-full"
        >
          <input
            class="input w-full text-5xl p-4 text-right"
            placeholder="Type here"
            type="text"
          />
        </div>
      </div>
    </DocumentFragment>
  `);
});

it("should handle case when legit value is typed", async () => {
  const { asFragment } = render(<TipsCalculator />);
  const input = screen.getByPlaceholderText("Type here");

  await userEvent.type(input, "13.37");

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="card bg-base-200 p-6"
      >
        <div
          class="form-control w-full"
        >
          <input
            class="input w-full text-5xl p-4 text-right"
            placeholder="Type here"
            type="text"
          />
        </div>
        <div>
          <div
            class="tip-show"
          >
            15%: $13.37 + 
            <strong>
              $2.01
            </strong>
             = 
            <strong>
              $15.38
            </strong>
          </div>
          <div
            class="tip-show--small"
          >
            19.67%: $13.37 + 
            <strong>
              $2.63
            </strong>
             = 
            <strong>
              $16.00
            </strong>
          </div>
        </div>
        <div>
          <div
            class="tip-show"
          >
            18%: $13.37 + 
            <strong>
              $2.41
            </strong>
             = 
            <strong>
              $15.78
            </strong>
          </div>
          <div
            class="tip-show--small"
          >
            19.67%: $13.37 + 
            <strong>
              $2.63
            </strong>
             = 
            <strong>
              $16.00
            </strong>
          </div>
        </div>
        <div>
          <div
            class="tip-show"
          >
            20%: $13.37 + 
            <strong>
              $2.67
            </strong>
             = 
            <strong>
              $16.04
            </strong>
          </div>
          <div
            class="tip-show--small"
          >
            27.15%: $13.37 + 
            <strong>
              $3.63
            </strong>
             = 
            <strong>
              $17.00
            </strong>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});
