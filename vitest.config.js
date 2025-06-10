import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["**/*.{test,spec}.{js,mjs,ts,tsx}"],
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
            "**/index.mjs",
            "**/.*"
        ],
        coverage: {
            reporter: ["text", "lcov"],
            include: ["src/**/*.mjs"], // Only include files that are imported by tests
            exclude: ["**/*.test.mjs", "**/__tests__/**"],
            all: false // Only instrument files that are actually tested
        }
    }
});
