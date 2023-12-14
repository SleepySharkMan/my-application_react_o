import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onChangeValue }) => {
    const [value, setValue] = useState('');

    const handleChangeValue = (event) => {
        const newValue = event.target.value.toLowerCase();
        setValue(newValue);
        onChangeValue(newValue); // вызываем функцию onChangeValue и передаем ей новое значение
    };

    return (
        <div className="Navbar">
            <Link to="/" className="arrow-container">
                <div className="arrow"></div>
            </Link>
            <div className="input-container">
                <input
                    type="text"
                    className="myInput"
                    placeholder="Поиск"
                    value={value}
                    onChange={handleChangeValue}
                ></input>
            </div>
        </div>
    );
};

export default Navbar;