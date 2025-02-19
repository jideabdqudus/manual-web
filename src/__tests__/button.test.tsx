import React from "react";
import { Button } from "@/src/components/ui";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "inline-flex items-center justify-center text-[10px] font-bold undefined bg-secondary text-white hover:bg-[#7A2819] w-[156px] h-[45px] px-[30px] py-[15px]"
    );
  });

  it("renders with ghost variant", () => {
    render(<Button variant="ghost">Ghost Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /ghost button/i });
    expect(buttonElement).toHaveClass(
      "inline-flex items-center justify-center text-[10px] font-bold undefined text-alternate underline bg-transparent border-none uppercase p-[10px]"
    );
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
