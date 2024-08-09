import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (boxData) => setBoxes((boxes) => [...boxes, boxData]);
    const removeBox = (id) =>
        setBoxes((boxes) => boxes.filter((box) => box.id !== id));

    return (
        <>
            <h1>The Box Maker</h1>
            {boxes.map((box, i) => (
                <Box key={i} box={box} removeBox={removeBox} />
            ))}
            <NewBoxForm addBox={addBox} />
        </>
    );
};

export default BoxList;
