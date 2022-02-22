import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
    it("renders", () => {
        render(<Contact></Contact>);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("match text content", () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId("contact")).toHaveTextContent("Contact me");
    });

    it("match button text content", () => {
        const { getByTestId } = render(<Contact></Contact>);
        expect(getByTestId("button")).toHaveTextContent("Submit");
    });
});