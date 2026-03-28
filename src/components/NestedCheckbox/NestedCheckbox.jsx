import React, { useState } from "react";
import "./NestedCheckbox.css";

const rawData = [
    {
        id: 1,
        label: "Fruits",
        children: [
            { id: 2, label: "Apple" },
            { id: 3, label: "Banana" },
            {
                id: 4,
                label: "Citrus",
                children: [
                    { id: 5, label: "Orange" },
                    { id: 6, label: "Lemon" },
                ],
            },
        ],
    },
    {
        id: 7,
        label: "Vegetables",
        children: [
            { id: 8, label: "Carrot" },
            { id: 9, label: "Broccoli" },
        ],
    },
];

const RenderNestedCheckbox = ({
    data = [],
    checkedValues,
    setCheckedValues,
}) => {
    function handleChildChecked({ children = [], checkedValues, isChecked }) {
        if (!children.length) return checkedValues;
        children.forEach((node) => {
            checkedValues[node.id] = isChecked;
            handleChildChecked({ children: node.children, checkedValues, isChecked });
        });
        return checkedValues;
    }

    function handleParentChecked({ checkedValues }) {
        const checkAllChildren = ({ node }) => {
            if (!node?.children?.length) return checkedValues[node.id] || false;
            const allChildChecked = node.children.every((child) =>
                checkAllChildren({ node: child }),
            );
            checkedValues[node.id] = allChildChecked;
            return allChildChecked;
        };
        data.map((node) => checkAllChildren({ node }));

        return checkedValues;
    }

    function handleChange({ isChecked, node }) {
        setCheckedValues((prev) => {
            let _checkedValues = { ...prev, [node.id]: isChecked };

            _checkedValues = handleChildChecked({
                children: node.children,
                checkedValues: _checkedValues,
                isChecked,
            });
            _checkedValues = handleParentChecked({
                checkedValues: _checkedValues,
            });

            return _checkedValues;
        });
    }
    function renderCheckbox({ data = [] }) {
        return data.map((node) => (
            <div className="nested-checkbox-container" key={node.id}>
                <input
                    type="checkbox"
                    name={node.id + "_" + node.label}
                    id={node.id}
                    checked={checkedValues[node.id] || false}
                    onChange={(e) => handleChange({ isChecked: e.target.checked, node })}
                />
                <label htmlFor={node.id}>{node.label}</label>
                {renderCheckbox({ data: node.children })}
            </div>
        ));
    }

    return renderCheckbox({ data });
};

const NestedCheckbox = () => {
    const [checkedValues, setCheckedValues] = useState({});
    return (
        <div>
            <h2>Nested Checkbox</h2>
            <RenderNestedCheckbox
                data={rawData}
                checkedValues={checkedValues}
                setCheckedValues={setCheckedValues}
            />
        </div>
    );
};

export default NestedCheckbox;
