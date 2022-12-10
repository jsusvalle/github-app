import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Text } from "./Text";

describe("Text", () => {
  it("renders appropriately", () => {
    render(<Text>Testing</Text>);
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});
