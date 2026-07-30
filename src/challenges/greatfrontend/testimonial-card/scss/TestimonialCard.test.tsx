import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import TestimonialCard from "./TestimonialCard";

expect.extend(toHaveNoViolations);
const defaultProps = {
    quote: "This product has completely changed the way I work.",
    authorName: "Sarah Chen",
    authorUsername: "@sarahchen",
    avatarUrl: "https://example.com/sarah.jpg",
};

describe("TestimonialCard", () => {
    it("renders the testimonial quote", () => {
        render(<TestimonialCard {...defaultProps} />);

        expect(screen.getByText(defaultProps.quote)).toBeInTheDocument();
    });

    it("renders the author's name", () => {
        render(<TestimonialCard {...defaultProps} />);

        expect(screen.getByText(defaultProps.authorName)).toBeInTheDocument();
    });

    it("renders the author's username", () => {
        render(<TestimonialCard {...defaultProps} />);

        expect(
            screen.getByText(defaultProps.authorUsername),
        ).toBeInTheDocument();
    });

    it("renders the author's avatar", () => {
        render(<TestimonialCard {...defaultProps} />);

        const avatar = document.querySelector("img");

        expect(avatar).toHaveAttribute("src", defaultProps.avatarUrl);
    });

    it("renders the testimonial as a blockquote", () => {
        render(<TestimonialCard {...defaultProps} />);

        expect(
            screen.getByText(defaultProps.quote).closest("blockquote"),
        ).toBeInTheDocument();
    });

    it("renders the avatar image when avatarUrl is provided", () => {
        render(<TestimonialCard {...defaultProps} />);

        const avatar = document.querySelector("img");

        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute("src", defaultProps.avatarUrl);
    });

    it("marks the avatar image as decorative", () => {
        const { container } = render(<TestimonialCard {...defaultProps} />);

        const avatar = container.querySelector("img");

        expect(avatar).toHaveAttribute("alt", "");
    });
    it("renders the fallback avatar when no avatarUrl is provided", () => {
        const { container } = render(
            <TestimonialCard {...defaultProps} avatarUrl={undefined} />,
        );

        expect(container.querySelector("img")).not.toBeInTheDocument();

        expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders the fallback avatar when the image fails to load", () => {
        render(<TestimonialCard {...defaultProps} />);

        const avatar = document.querySelector("img")!;

        fireEvent.error(avatar);

        expect(document.querySelector("svg")).toBeInTheDocument();
    });

    it("renders multiline testimonials", () => {
        render(
            <TestimonialCard
                {...defaultProps}
                quote={"First paragraph.\n\nSecond paragraph."}
            />,
        );

        expect(screen.getByText(/First paragraph/)).toBeInTheDocument();
        expect(screen.getByText(/Second paragraph/)).toBeInTheDocument();
    });

    it("has no accessibility violations", async () => {
        const { container } = render(<TestimonialCard {...defaultProps} />);

        expect(await axe(container)).toHaveNoViolations();
    });
});
