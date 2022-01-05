import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("<App />", () => {
  it("Renders app component", () => {
    render(<App />);
    const linkElement = screen.getByText(/webpack/i);
    expect(linkElement).toBeInTheDocument();
  });
});
