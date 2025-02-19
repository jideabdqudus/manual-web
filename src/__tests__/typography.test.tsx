import React from "react";
import { render } from "@testing-library/react";
import { Text } from "@/src/components/ui";

describe("Text Component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Text>Default Text</Text>);
    const textElement = getByText(/Default Text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-md font-normal text-alternate");
  });

  it("renders with custom size and weight", () => {
    const { getByText } = render(
      <Text size="lg" weight="bold">
        Custom Text
      </Text>
    );
    const textElement = getByText(/Custom Text/i);
    expect(textElement).toHaveClass("text-lg font-bold");
  });
});
