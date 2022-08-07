import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should render without crashing", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        data-theme="light"
      >
        <div
          class="flex justify-end"
        >
          <div
            class="dropdown dropdown-end"
          >
            <label
              aria-label="Options"
              class="btn btn-ghost m-1"
              tabindex="0"
            >
              <span
                class="material-symbols-outlined"
              >
                more_vert
              </span>
            </label>
            <ul
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              tabindex="0"
            >
              <li>
                <button>
                  Dark theme: Off
                </button>
              </li>
            </ul>
          </div>
        </div>
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
        />
      </div>
    </DocumentFragment>
  `);
});

test("should be able to toggle theme to dark from light", async () => {
  const { asFragment } = render(<App />);

  const options = screen.getByLabelText("Options");
  await userEvent.click(options);

  const darkThemeToggle = screen.getByText(/Dark theme:/);
  await userEvent.click(darkThemeToggle);

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        data-theme="dark"
      >
        <div
          class="flex justify-end"
        >
          <div
            class="dropdown dropdown-end"
          >
            <label
              aria-label="Options"
              class="btn btn-ghost m-1"
              tabindex="0"
            >
              <span
                class="material-symbols-outlined"
              >
                more_vert
              </span>
            </label>
            <ul
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              tabindex="0"
            >
              <li>
                <button>
                  Dark theme: On
                </button>
              </li>
            </ul>
          </div>
        </div>
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
        />
      </div>
    </DocumentFragment>
  `);
});
