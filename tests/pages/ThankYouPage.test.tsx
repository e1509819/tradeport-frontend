import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThankYouPage } from "../../src/pages/ThankYouPage"; // Update path as needed
import "@testing-library/jest-dom";

describe("ThankYouPage Component", () => {
  it("should render the ThankYouPage component without crashing", () => {
    render(<ThankYouPage />);
    const messageElement = screen.getByText(
      /Thanks\s+we will be in touch shortly/i,
    );
    expect(messageElement).toBeInTheDocument();
  });

  it("should have the correct styling classes applied", () => {
    render(<ThankYouPage />);
    const container = screen.getByText(/Thanks/i).closest("div");
    expect(container).toHaveClass(
      "flex",
      "flex-col",
      "justify-center",
      "space-y-5",
    );
  });
});
