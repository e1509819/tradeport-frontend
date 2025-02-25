import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Categories from "../../src/pages/Categories";
import "@testing-library/jest-dom";

describe("Categories Component", () => {
  it("renders without crashing", () => {
    render(<Categories />);
    const categoryElement = screen.getByText(/Categories/i);
    expect(categoryElement).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<Categories />);
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<Categories />);
    const divElement = screen.getByText("Categories");
    expect(divElement).toHaveClass("h-screen");
    expect(divElement).toHaveClass("bg-red-100");
  });
});
