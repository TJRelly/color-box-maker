/* eslint-disable react/prop-types */
import "./Box.css";

const Box = ({
    box: { color, width, height, id },
    removeBox,
}) => {
    const remove = () => removeBox(id)
    return (
        <div className="Box">
            <div
                style={{
                    backgroundColor: color,
                    width: width + "rem",
                    height: height + "rem",
                }}
            ></div>
            <button onClick={remove}>X</button>
        </div>
    );
};

export default Box;
