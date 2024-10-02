import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "@/app/(defaults)/pages/contact-us/components/contact-form";
import { ToastProvider } from "@/context/toast-context";

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithProviders = () => {
    return render(
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    );
  };

  test("renders the form correctly", () => {
    renderWithProviders();

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
