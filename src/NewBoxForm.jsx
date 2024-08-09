/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { v4 as uuid } from "uuid";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { color: "", height: "", width: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {color, height, width} to parent
     *    & clear form. */

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    /** render form */

    return (
        <Form className="Box-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                    type="string"
                    placeholder="Enter color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="width">
                <Form.Label>Width</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="height">
                <Form.Label>Height</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add a new box!
            </Button>
        </Form>
    );
};

export default NewBoxForm;
