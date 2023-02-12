import { useState, useEffect } from "react";

import PostsSearchList from "./PostsSearchList/PostsSearchList";

import { getAllPosts } from "../../shared/services/posts-api";

const Posts = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await getAllPosts();
                setItems(prevItems => ([...prevItems, ...data]));
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPosts();

    }, [setLoading, setItems, setError, setLoading, getAllPosts]);

    return <PostsSearchList items={items} />
}

export default Posts;
