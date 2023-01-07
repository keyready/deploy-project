import React, { useState } from 'react';
import classes from './CreatePostPage.module.css';
import { Form } from '../../components/Form/Form';

export const CreatePostPage = () => {
    const [state, setState] = useState(0);

    return (
        <div className={classes.CreatePostPage}>
            <h2>Create post</h2>
            <Form />
        </div>
    );
};
