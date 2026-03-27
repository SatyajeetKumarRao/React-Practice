import React, { useState } from "react";
import './ChipsInput.css'
const ChipsInput = () => {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    function addData() {
        if (value.trim() == '') return
        setData((prev) => [...prev, {
            label: value.trim(),
            id: crypto.randomUUID()
        }])
        setValue('')
    }
    function handleKeyPress(e) {
        console.log(e.key)
        if (e.key === "Enter") {
            addData();
        }
    }

    function handleDelete(id) {
        setData((prev) => {
            const newData = prev.filter((item) => item.id !== id)
            return newData
        })
    }
    return (
        <div className="chips-component">
            <h2>Chips Input</h2>
            <div>
                <input
                    type="text"
                    name="chipLabel"
                    id="chipLabel"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="chips-label-input"
                />
                <button className="add-button" disabled={value.trim() == ''} onClick={addData}>Add</button>
                <div className="chips-container"> {data.map((chip) => (
                    <div key={chip.id} className="chips" >
                        <span className="label">{chip.label}</span>
                        <button style={{ fontSize: '8px' }} className="delete-button" onClick={() => handleDelete(chip.id)}>❌</button>
                    </div>
                ))}</div>
            </div>
        </div>
    );
};

export default ChipsInput;
