import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../stories/Button";

describe("React test environment", () => {
    it("renders a React component", () => {
        render(<Button label="Test button" />);

        expect(
            screen.getByRole("button", { name: "Test button" }),
        ).toBeInTheDocument();
    });
});
