import { render, fireEvent } from "@testing-library/react";

import { initial, disabled } from "../__stories__/index.stories";

describe("counter interactivity", () => {
  it("should increment when enabled", () => {
    const comp = render(initial());
    fireEvent.click(comp.getByText("increment"));
    expect(comp.getByText("1")).toBeTruthy();
  });
  it("should do nothing when disabled", () => {
    const comp = render(disabled());
    fireEvent.click(comp.getByText("increment"));
    expect(comp.getByText("0")).toBeTruthy();
  });
});
