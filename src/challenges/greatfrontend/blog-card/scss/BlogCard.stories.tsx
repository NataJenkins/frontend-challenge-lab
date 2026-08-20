import type { Meta, StoryObj } from "@storybook/react-vite";
import BlogCard from "./BlogCard";

const meta = {
    title: "GreatFrontend/Blog Card",
    component: BlogCard,
    parameters: {
        layout: "centered",
        backgrounds: {
            options: {
                gray: {
                    name: "Gray",
                    value: "linear-gradient(145.68deg, rgba(249, 250, 251, 1) 8.887%,rgba(210, 214, 219, 1) 100.479%);",
                },
            },
        },
    },
    args: {
        imageUrl:
            "https://i.pinimg.com/736x/b5/a1/31/b5a13172ba3251884efef78778dcc11d.jpg",
        category: "Interior",
        cardTitle: "Top 5 Living Room Inspirations",
        cardDescription:
            "Curated vibrants colors for your living, make it pop & calm in the same time.",
    },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoImage: Story = {
    args: {
        imageUrl: undefined,
    },
};
export const NoCategory: Story = {
    args: {
        category: undefined,
    },
};
export const LongTitle: Story = {
    args: {
        cardTitle:
            "This is a very long title that should test how the blog card handles overflow or wrapping of text content in the title section.",
    },
};
export const LongDescription: Story = {
    args: {
        cardDescription:
            "This is a very long description that should test how the blog card handles overflow or wrapping of text content in the description section.",
    },
};
