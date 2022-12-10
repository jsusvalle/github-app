import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from "./Button";

const mockHandler = jest.fn();

describe("Button", () => {
  let component: HTMLElement;

  beforeEach(() => {
    component = render(<Button onClick={mockHandler}>Testing</Button>);
  });

  it("renders appropriately", () => {
    const text = component.getByText<HTMLElement>(/testing/i);
    expect(text);
  });

  it("clicking the button calls event handler once", () => {
    const button = component.getByText(/testing/i);
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
