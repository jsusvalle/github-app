import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Loader } from "./Loader";

describe("Loader", () => {
    it("renders appropriately, loading is false and renders children", () => {
        const component = render(<Loader loading={false}>Testing</Loader>);
        expect(component.getByText(/testing/i));
    });

    it("if loading is true dont render children", () => {
        const component = render(<Loader loading={true}>Testing</Loader>);
        expect(component.getByTestId("circle-loader"));
    });
});