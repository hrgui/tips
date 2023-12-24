import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TipsCalculator from "./TipsCalculator";
import userEvent from "@testing-library/user-event";

it("should render default initial state nornally", () => {
  const { asFragment } = render(<TipsCalculator />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="card bg-base-200 z-10 mb-4 form-control w-full sticky top-0 p-4 shadow-md"
      >
        <input
          class="input input-lg input-bordered w-full text-4xl p-4 text-right"
          id="tipInput"
          placeholder="Type here"
          type="text"
        />
      </div>
      <div
        class="card bg-base-200 p-6 pt-4 pb-4"
      >
        <button
          class="btn w-full mt-4"
        >
          +
        </button>
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
        class="card bg-base-200 z-10 mb-4 form-control w-full sticky top-0 p-4 shadow-md"
      >
        <input
          class="input input-lg input-bordered w-full text-4xl p-4 text-right"
          id="tipInput"
          placeholder="Type here"
          type="text"
        />
      </div>
      <div
        class="card bg-base-200 p-6 pt-4 pb-4"
      >
        <button
          class="btn w-full mt-4"
        >
          +
        </button>
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
        class="card bg-base-200 z-10 mb-4 form-control w-full sticky top-0 p-4 shadow-md"
      >
        <input
          class="input input-lg input-bordered w-full text-4xl p-4 text-right"
          id="tipInput"
          placeholder="Type here"
          type="text"
        />
      </div>
      <div
        class="card bg-base-200 p-6 pt-4 pb-4"
      >
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
              <div>
                +2.63
              </div>
              <div
                class="font-semibold"
              >
                16.00
              </div>
            </div>
          </div>
          <button
            class="btn btn-sm w-full"
          >
            -
          </button>
        </div>
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
                value="18"
              />
              %:
            </div>
            <div
              class="ml-auto"
            >
              <div>
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
              <div>
                +2.63
              </div>
              <div
                class="font-semibold"
              >
                16.00
              </div>
            </div>
          </div>
          <button
            class="btn btn-sm w-full"
          >
            -
          </button>
        </div>
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
                value="20"
              />
              %:
            </div>
            <div
              class="ml-auto"
            >
              <div>
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
              <div>
                +3.63
              </div>
              <div
                class="font-semibold"
              >
                17.00
              </div>
            </div>
          </div>
          <button
            class="btn btn-sm w-full"
          >
            -
          </button>
        </div>
        <button
          class="btn w-full mt-4"
        >
          +
        </button>
      </div>
    </DocumentFragment>
  `);
});
