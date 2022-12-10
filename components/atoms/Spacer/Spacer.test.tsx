import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Spacer } from "./Spacer";

describe("Spacer", () => {
  it("renders appropriately in horizontal", () => {
    render(<Spacer type="horizontal" spacing={0} />);
    expect(screen.getByTestId("horizontal")).toBeInTheDocument();
  });

  it("renders appropriately in vertical", () => {
    render(<Spacer type="vertical" spacing={0} />);
    expect(screen.getByTestId("vertical")).toBeInTheDocument();
  });
});
