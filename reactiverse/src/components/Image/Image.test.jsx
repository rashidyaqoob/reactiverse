import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

describe("Image", () => {
  test("renders Image component with provided props", () => {
    const testId = "test-image";
    const src = "test-image.jpg";
    const altText = "Test Image";
    const width = 100;
    const height = 50;
    const extraClasses = "custom-class";

    render(
      <Image
        dataTestId={testId}
        src={src}
        altText={altText}
        width={width}
        height={height}
        extraClasses={extraClasses}
      />
    );

    const imageElement = screen.getByTestId(testId);

    // Check if the image element is rendered with correct attributes
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", src);
    expect(imageElement).toHaveAttribute("alt", altText);
    expect(imageElement).toHaveAttribute("width", width.toString());
    expect(imageElement).toHaveAttribute("height", height.toString());
    expect(imageElement).toHaveClass(extraClasses);
  });
});
