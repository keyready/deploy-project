import React, { useEffect, useState } from 'react';
import classes from './PostLists.module.css';

export const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // // TODO
        // //  здесь укажи адрес запроса на получение всех постов
        // fetch('/get-all-posts')
        //     .then((res) => res.json())
        //     .then((res) => {
        //         // TODO
        //         //  посмотришь, что возвращается с сервера,
        //         //  если не будет работать, попробуй подебажить
        //         console.log(res.data);
        //         setPosts(res.data);
        //     });

        setPosts([
            {
                id: 1,
                author: 'keyready',
                imageUrl: '/image1.jpg',
                title: 'Тестовый пост 1',
                body: 'Тестовое содержание тестового поста 1',
                date: '07 января 2023 11:37 UTC+10',
            },
            {
                id: 2,
                author: 'keyready',
                imageUrl: '/image2.jpg',
                title: 'Тестовый пост 2',
                body: 'Тестовое содержание тестового поста 2',
                date: '07 января 2023 11:37 UTC+10',
            },
            {
                id: 3,
                author: 'keyready',
                imageUrl: '/image3.jpg',
                title: 'Тестовый пост 3',
                body: 'Тестовое содержание тестового поста 3',
                date: '07 января 2023 11:37 UTC+10',
            },
            {
                id: 4,
                author: 'VALIKO666',
                imageUrl: '/image4.jpg',
                title: 'Тестовый пост 4',
                body: 'Тестовое содержание тестового поста 4',
                date: '07 января 2023 11:37 UTC+10',
            },
        ]);
    }, []);

    return (
        <div>
            {posts.length
                ? (
                    <div className={classes.list}>
                        {posts.map((post) => (
                            <div className={classes.post}>
                                <div className={classes.str}>
                                    <h2>Номер</h2>
                                    <h2>{post.id}</h2>
                                </div>

                                <div className={classes.str}>
                                    <h2>Автор</h2>
                                    <h2>{post.author}</h2>
                                </div>

                                <div className={classes.str}>
                                    <h2>Тайтл</h2>
                                    <h2>{post.title}</h2>
                                </div>

                                <div className={classes.str}>
                                    <h2>Описание</h2>
                                    <h2>{post.body}</h2>
                                </div>

                                <div className={classes.str}>
                                    <h2>Дата</h2>
                                    <h2>{post.date}</h2>
                                </div>

                                <div className={classes.str}>
                                    <h2>Картинка</h2>
                                    <img
                                        src={`../../../static/images${post.imageUrl}`}
                                        alt={post.title}
                                        className={classes.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )
                : (
                    <h1>Постов не найдено</h1>
                )}

        </div>
    );
};
