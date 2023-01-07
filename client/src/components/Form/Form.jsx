import React from 'react';
import classes from './Form.module.css';

export const Form = () => {
    const sendForm = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // TODO
        //  Вот тут путь укажешь, который у тебя на загрузку файлов
        fetch('/upload', {
            method: 'post',
            body: formData
        })
            .then((res) => res.json())
            .then((res) => console.log(res));

        console.log(formData);
    };

    return (
        <form onSubmit={sendForm} className={classes.form} encType='multipart-formdata'>
            <h1 className={classes.title}>Добавьте ваш пост</h1>

            <input
                className={classes.input}
                name={'author'}
                type="text"
                placeholder="Автор"
                required
            />

            <input
                className={classes.input}
                name={'title'}
                type="text"
                placeholder="Заголовок"
                required
            />

            <input
                className={classes.input}
                name={'body'}
                type="text"
                placeholder="Содержание"
                required
            />

            <input
                className={classes.input}
                name={'photo'}
                type="file"
                required
            />

            <button
                type="submit"
                className={classes.button}
            >
                Добавить
            </button>
        </form>
    );
};
