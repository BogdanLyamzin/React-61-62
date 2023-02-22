import { useState, useEffect } from "react";

import PostList from "../../shared/components/PostList/PostList";

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

    return <PostList items={items} />
}

export default Posts;
