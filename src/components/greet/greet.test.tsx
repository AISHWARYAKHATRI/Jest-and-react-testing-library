/**
 * Greet should render the text hello and if a name is passed into the component, it should render hello followed by the name
 * */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("Renders with a name", () => {
      render(<Greet name="Aishwarya" />);
      const textElement = screen.getByText("Hello Aishwarya");
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Nested", () => {
  test("Renders with a name", () => {
    render(<Greet name="Aishwarya" />);
    const textElement = screen.getByText("Hello Aishwarya");
    expect(textElement).toBeInTheDocument();
  });
});
