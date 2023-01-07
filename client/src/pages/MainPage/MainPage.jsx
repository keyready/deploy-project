import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsList } from '../../components/PostsList/PostsList';
import classes from './MainPage.module.css';

export const MainPage = () => {
    const [state, setState] = useState(0);

    return (
        <div className={classes.mainPage}>
            <Link to="/create" className={classes.link}>Добавить пост</Link>
            <PostsList />
            <div style={{ marginTop: 100 }}>
                <p>
                    <b>Первый деплой проект: </b>
                    Node.js(Express),
                    Postgres,
                    Docker,
                    Nginx,
                    GIT,
                    Boodet-online,
                    Cloud-Flare
                </p>
                <p>
                    <b>Author: </b>
                    {' '}
                    [ VALIKO666 ]
                </p>
                <p>
                    <b>Category: </b>
                    {' '}
                    Web
                </p>
                <p>
                    <b>About me: </b>
                    {' '}
                    Начинающий специалист в области Web-безопасности.
                </p>

            </div>
        </div>
    );
};
