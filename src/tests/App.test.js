import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders find stuff", () => {
  render(<App />);
  const linkElement = screen.getByText(/find stuff/i);
  expect(linkElement).toBeInTheDocument();
});
