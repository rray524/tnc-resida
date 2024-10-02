import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CtaButton from "@/components/button/cta-button";

describe("CtaButton", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test("renders with children text", () => {
    render(<CtaButton>Click Me</CtaButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("applies default styles", () => {
    render(<CtaButton>Default Button</CtaButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "px-8 py-3 my-5 opacity-90 text-white font-semibold text-[18px] bg-red-500 items-center justify-center hover:bg-yellow-500 hover:text-white duration-1000"
    );
  });

  test("applies custom className", () => {
    render(<CtaButton className="custom-class">Custom Button</CtaButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  test("calls onClick when clicked", () => {
    render(<CtaButton onClick={mockOnClick}>Click Me</CtaButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test("does not throw error when onClick is not provided", () => {
    render(<CtaButton>Click Me</CtaButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
  });

  test("applies hover effect", () => {
    render(<CtaButton>Hover Test</CtaButton>);

    const button = screen.getByRole("button");
    fireEvent.mouseOver(button);

    expect(button).toHaveClass("hover:bg-yellow-500 hover:text-white");
  });
});
