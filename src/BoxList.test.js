import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
    const boxList = render(<BoxList />);
    
    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    // Simulate filling out the form to add a new box
    const colorInput = boxList.getByLabelText("Color");
    const widthInput = boxList.getByLabelText("Width");
    const heightInput = boxList.getByLabelText("Height");
    const addButton = boxList.getByText("Add a new box!");

    // Change values in the form
    fireEvent.change(colorInput, { target: { value: "peachpuff" } });
    fireEvent.change(widthInput, { target: { value: "10" } });
    fireEvent.change(heightInput, { target: { value: "10" } });

    // Submit the form to add the box
    fireEvent.click(addButton);

    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
});

it("can remove a box", function () {
    const boxList = render(<BoxList />);

    // Simulate filling out the form to add a new box
    const colorInput = boxList.getByLabelText("Color");
    const widthInput = boxList.getByLabelText("Width");
    const heightInput = boxList.getByLabelText("Height");
    const addButton = boxList.getByText("Add a new box!");

    // Change values in the form
    fireEvent.change(colorInput, { target: { value: "peachpuff" } });
    fireEvent.change(widthInput, { target: { value: "10" } });
    fireEvent.change(heightInput, { target: { value: "10" } });

    // Submit the form to add the box
    fireEvent.click(addButton);

    const removeButton = boxList.getByText("X");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
