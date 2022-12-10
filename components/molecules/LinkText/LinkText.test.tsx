import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { LinkText } from "./LinkText";

describe("Link", () => {
  it("renders appropriately", () => {
    render(<LinkText>Testing</LinkText>);
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});
