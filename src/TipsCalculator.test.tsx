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
            class="input input-lg input-bordered w-full text-4xl p-4 text-right"
            id="tipInput"
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
            class="input input-lg input-bordered w-full text-4xl p-4 text-right"
            id="tipInput"
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
            class="input input-lg input-bordered w-full text-4xl p-4 text-right"
            id="tipInput"
            placeholder="Type here"
            type="text"
          />
        </div>
        <div>
          <div
            class="flex text-5xl pb-4 pt-4 text-right"
          >
            <div
              class="opacity-80"
            >
              15%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +2.01
              </div>
              <div
                class="font-semibold"
              >
                15.38
              </div>
            </div>
          </div>
          <div
            class="flex text-right text-3xl text-info pb-4"
          >
            <div
              class="opacity-80"
            >
              19.67%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +2.63
              </div>
              <div
                class="font-semibold"
              >
                16.00
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex text-5xl pb-4 pt-4 text-right"
          >
            <div
              class="opacity-80"
            >
              18%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +2.41
              </div>
              <div
                class="font-semibold"
              >
                15.78
              </div>
            </div>
          </div>
          <div
            class="flex text-right text-3xl text-info pb-4"
          >
            <div
              class="opacity-80"
            >
              19.67%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +2.63
              </div>
              <div
                class="font-semibold"
              >
                16.00
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex text-5xl pb-4 pt-4 text-right"
          >
            <div
              class="opacity-80"
            >
              20%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +2.67
              </div>
              <div
                class="font-semibold"
              >
                16.04
              </div>
            </div>
          </div>
          <div
            class="flex text-right text-3xl text-info pb-4"
          >
            <div
              class="opacity-80"
            >
              27.15%:
            </div>
            <div
              class="ml-auto"
            >
              <div
                class="font-semibold"
              >
                +3.63
              </div>
              <div
                class="font-semibold"
              >
                17.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentFragment>
  `);
});
