import React, { useState } from 'react';

export default function Checks() {
    const [inputs, setInputs] = useState([
        { inputValue: "", checkboxValue: false, image: '' },
        { inputValue: "", checkboxValue: false, image: '' },
        { inputValue: "", checkboxValue: false, image: '' },
        { inputValue: "", checkboxValue: false, image: '' }
    ]);

    const handleChange = (index, event) => {
        const { type, value, checked, files } = event.target;
        const newInputs = [...inputs];
        if (type === 'text') {
            newInputs[index].inputValue = value;
        } else if (type === 'checkbox') {
            newInputs[index].checkboxValue = checked;
        } else if (type === 'file') {
            newInputs[index].image = files[0];
        }
        setInputs(newInputs);
    };

    const getValues = () => {
        console.log(inputs);
    };

    return (
        <>
            <div className="container pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', border: "2px solid purple", borderRadius: "10px", width: "90%", margin: "auto", height: "auto" }}>
                {inputs.map((item, index) => (
                    <div key={index} className="wraper_input_and_checkbox">
                        <div className="mt-4" style={{ display: "flex", alignItems: "center" }}>
                            <div className="check" style={{ width: "20px", transform: "scale(2)", marginTop: "-18px" }}>
                                <input
                                    type="checkbox"
                                    name="adminIds"
                                    width={"100px"}
                                    onChange={(e) => handleChange(index, e)}
                                    checked={item.checkboxValue}
                                />
                            </div>
                            <div className="camera_and_input">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputField"
                                    placeholder="Enter text"
                                    onChange={(e) => handleChange(index, e)}
                                    value={item.inputValue}
                                />
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept="image/*"
                                    style={{ direction: "ltr" }}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                {item.image && <img src={item.image} alt="Selected" style={{ width: "50px", height: "50px" }} />}
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <button onClick={getValues}>click</button>
                </div>
            </div>
        </>
    );
}
