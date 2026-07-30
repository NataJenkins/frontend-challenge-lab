import type { Meta, StoryObj } from "@storybook/react-vite";
import TestimonialCard from "./TestimonialCard";
const meta = {
    title: "GreatFrontend/Testimonial Card",
    component: TestimonialCard,

    parameters: {
        layout: "centered",
        backgrounds: {
            options: {
                gray: { name: "Gray", value: "#CCC" },
            },
        },
    },
    args: {
        quote: "This product has completely changed the way I work. It's simple, intuitive, and exactly what I needed.",
        authorName: "Sarah Chen",
        authorUsername: "@sarahchen",
        avatarUrl: "https://i.pravatar.cc/150?img=47",
    },
} satisfies Meta<typeof TestimonialCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongQuote: Story = {
    args: {
        quote: "This product has completely changed the way I work. It is simple, intuitive, and exactly what I needed to organize my projects, collaborate with my team, and keep track of everything without adding unnecessary complexity.",
    },
};
export const LongAuthorName: Story = {
    args: {
        authorName: "Alexandra Elizabeth Montgomery",
        authorUsername: "@alexandramontgomery",
    },
};
export const NoAvatar: Story = {
    args: {
        avatarUrl: undefined,
    },
};
export const AvatarError: Story = {
    args: {
        avatarUrl: "https://example.com/does-not-exist.jpg",
    },
};
