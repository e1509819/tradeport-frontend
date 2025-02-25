import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Profile from "../../src/pages/Profile";
import "@testing-library/jest-dom";

// src/pages/Profile.test.tsx

describe("Profile Component", () => {
  it("should render the Profile component", () => {
    render(<Profile />);
    const profileElement = screen.getByText(/Profile/i);
    expect(profileElement).toBeInTheDocument();
  });
});
