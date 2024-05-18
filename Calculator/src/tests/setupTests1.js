/// <reference types="vitest"/>

import { cleanup } from "@testing-library/react";
import { afterEach } from "node:test";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
    cleanup();
});

