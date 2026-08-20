import { fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import BlogCard from "./BlogCard";

expect.extend(toHaveNoViolations);

const defaultProps = {
    imageUrl: "https://example.com/blog.jpg",
    category: "Interior",
    cardTitle: "Top 5 Living Room Inspirations",
    cardDescription: "Ideas to transform your living room.",
};

describe("BlogCard", () => {
    it("renders the title and description", () => {
        render(<BlogCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.cardTitle)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.cardDescription)).toBeInTheDocument();
    });

    it("renders the avatar image when avatarUrl is provided", () => {
        const { container } = render(<BlogCard {...defaultProps} />);
        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            defaultProps.imageUrl,
        );
    });

    it("renders the category", () => {
        render(<BlogCard {...defaultProps} />);
        expect(screen.getByText(defaultProps.category)).toBeInTheDocument();
    });

    it("renders the fallback image when the image fails to load", () => {
        const { container } = render(<BlogCard {...defaultProps} />);
        fireEvent.error(container.querySelector("img")!);
        expect(container.querySelector("img")).not.toHaveAttribute(
            "src",
            defaultProps.imageUrl,
        );
    });

    it("renders the read more button", () => {
        render(<BlogCard {...defaultProps} />);
        expect(
            screen.getByRole("button", { name: /read more/i }),
        ).toBeInTheDocument();
    });

    it("has no accessibility violations", async () => {
        const { container } = render(<BlogCard {...defaultProps} />);
        expect(await axe(container)).toHaveNoViolations();
    });
});
