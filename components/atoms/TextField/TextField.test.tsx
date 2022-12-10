import { render } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders appropriately", () => {
    const component = render(<TextField name="testing" label="testing" onChange={() => {}} />);
    expect(component.getByText(/testing/i));
  });
});
