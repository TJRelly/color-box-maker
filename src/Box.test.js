import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function () {
    const mockBox = { color: "blue", width: 100, height: 50, id: 1 };
    render(<Box box={mockBox} removeBox={() => {}} />);
});

it("matches snapshot", function () {
    const mockBox = { color: "blue", width: 100, height: 50, id: 1 };
    const { asFragment } = render(<Box box={mockBox} removeBox={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
});
