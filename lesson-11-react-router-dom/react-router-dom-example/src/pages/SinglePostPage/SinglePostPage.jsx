import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPostById } from "../../shared/services/posts-api";

const SinglePostPage = () => {
    const [post, setPost] = useState();
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=> {
        const fetchPost = async() => {
            try {
                const result = await getPostById(id);
                setPost(result);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchPost();
    }, [])

    return (
        <>
            <button>Go back</button>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </>
    )
}

export default SinglePostPage;