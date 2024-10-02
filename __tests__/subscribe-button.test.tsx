import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SubscribeButton from "@/components/button/subscribe-button";

describe("SubscribeButton", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test("renders SubscribeButton with correct initial state", () => {
    render(<SubscribeButton onClick={mockOnClick} isSubmitting={false} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Subscribe");
    expect(button).not.toBeDisabled();
    expect(button).toHaveClass("bg-red-500");
  });

  test("shows 'Subscribing...' when isSubmitting is true", () => {
    render(<SubscribeButton onClick={mockOnClick} isSubmitting={true} />);

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Subscribing...");
    expect(button).toBeDisabled();
  });

  test("calls onClick when clicked", () => {
    render(<SubscribeButton onClick={mockOnClick} isSubmitting={false} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });

  test("does not call onClick when isSubmitting is true", () => {
    render(<SubscribeButton onClick={mockOnClick} isSubmitting={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test("applies correct hover effect", () => {
    render(<SubscribeButton onClick={mockOnClick} isSubmitting={false} />);

    const button = screen.getByRole("button");
    fireEvent.mouseOver(button);

    expect(button).toHaveClass("hover:bg-yellow-500");
  });
});
