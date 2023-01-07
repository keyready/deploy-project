import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostsList } from '../../components/PostsList/PostsList';
import { SortingPanel } from '../../components/SortingPanel/SortingPanel';
import classes from './MainPage.module.css';

export const MainPage = () => {
    const [state, setState] = useState(0);

    return (
        <div className={classes.mainPage}>
            <Link to="/create" className={classes.link}>Добавить пост</Link>
            <SortingPanel />
            <PostsList />
        </div>
    );
};
