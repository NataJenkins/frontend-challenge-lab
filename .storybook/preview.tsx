// .storybook/preview.tsx

import type { Preview } from "@storybook/react-vite";
// @ts-expect-error SCSS side-effect import is handled by Vite
import "../src/challenges/styles/resources.scss";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
        backgrounds: {
            options: {
                // 👇 Default options
                dark: { name: "Dark", value: "#333" },
                light: { name: "Light", value: "#F7F9F2" },
                // 👇 Add your own
            },
        },
    },
};

export default preview;
