/* eslint-disable react/prop-types */
import "./Box.css";

const Box = ({
    box: { color = "pink", width = "10", height = "10", id },
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
