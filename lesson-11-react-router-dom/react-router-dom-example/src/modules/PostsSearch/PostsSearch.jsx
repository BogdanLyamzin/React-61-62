import { useState, useEffect, useCallback } from "react";
import {useSearchParams} from "react-router-dom";

import Modal from "../../shared/components/Modal/Modal";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";
import PostDetails from "./PostDetails/PostDetails";

import { searchPosts } from "../../shared/services/posts-api";

import styles from "./posts-search.module.scss";

const PostsSearch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [postDetails, setPostDetails] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const page = searchParams.get("page");
    
    useEffect(() => {
        if (!search) {
            return;
        }

        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await searchPosts(search, page);
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

    }, [search, page, setLoading, setItems, setError, setLoading, searchPosts])

    const onSearchPosts = useCallback(({ search }) => {
        setSearchParams({search, page: 1});
        setItems([]);
    }, []);

    const showPost = useCallback((data) => {
        setPostDetails(data);
        setShowModal(true);
    }, []);

    const loadMore = useCallback(() => {
        setSearchParams({search, page: Number(page) + 1});
    }, [search]);

    const closeModal = useCallback(() => {
        setShowModal(false);
        setPostDetails(null);
    }, []);

    return (
        <>
            <PostsSearchForm onSubmit={onSearchPosts} />
            <PostsSearchList items={items} showPost={showPost} />
            {error && <p className={styles.errorMessage}>{error}</p>}
            {loading && <p>...Load posts</p>}
            {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
            {showModal && <Modal close={closeModal}>
                <PostDetails {...postDetails} />
            </Modal>}
        </>
    )
}

export default PostsSearch;
