import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/Home";
import "@testing-library/jest-dom";

// Mock child components to isolate Home component tests
vi.mock("../../src/components/Hero", () => ({
  default: () => <div data-testid="hero-component">Hero Section</div>,
}));

vi.mock("../../src/components/ImageSlider", () => ({
  default: ({ images }: { images: string[] }) => (
    <div data-testid="image-slider">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`slide-${index}`} />
      ))}
    </div>
  ),
}));

vi.mock("../../src/components/CategoryGrid", () => ({
  default: () => <div data-testid="category-grid">Category Grid</div>,
}));

vi.mock("../../src/components/FeaturesSection", () => ({
  default: () => <div data-testid="features-section">Features Section</div>,
}));

vi.mock("../../src/components/Newsletter", () => ({
  default: () => <div data-testid="newsletter-section">Newsletter Section</div>,
}));

describe("Home Component", () => {
  it("renders all child components correctly", () => {
    render(<Home />);

    // ✅ Check Hero section
    expect(screen.getByTestId("hero-component")).toBeInTheDocument();

    // ✅ Check CategoryGrid
    expect(screen.getByTestId("category-grid")).toBeInTheDocument();

    // ✅ Check FeaturesSection
    expect(screen.getByTestId("features-section")).toBeInTheDocument();

    // ✅ Check Newsletter Section
    expect(screen.getByTestId("newsletter-section")).toBeInTheDocument();
  });

  //   it("renders image slider images with correct src attributes", () => {
  //     render(<Home />);
  //     const imageSources = [
  //       "/img/sofa.jpg",
  //       "/img/bedroom.jpg",
  //       "/img/office.jpg",
  //       "/img/kitchen.jpg",
  //       "/img/bathroom.jpg",
  //       "/img/outdoor.jpg",
  //     ];

  //     imageSources.forEach((src) => {
  //       const img = screen.getByRole("img", { name: new RegExp(src, "i") });
  //       expect(img).toHaveAttribute("src", src);
  //     });
  //   });
});
