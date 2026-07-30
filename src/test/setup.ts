//src\test\setup.ts
import "@testing-library/jest-dom/vitest";
import { afterEach, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";

// (globalThis as typeof globalThis & { expect: typeof expect }).expect = expect;

expect.extend(toHaveNoViolations);

afterEach(() => {
    cleanup();
});
