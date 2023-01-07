import React, { FC } from 'react';
import classes from './Input.module.css';
import { classNames } from '../../lib/classNames/classNames';

export const Input: FC = ({
    className, type, placeholder, disabled = false, value, setValue,
}) => {
    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    return (
        <input
            className={classNames(classes.Input, {}, [className])}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={(e) => onChangeHandler(e)}
        />
    );
};

export default Input;
