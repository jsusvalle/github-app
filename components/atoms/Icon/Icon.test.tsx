import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders appropriately", () => {
    render(<Icon />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
