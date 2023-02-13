import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getCommentByPostId } from "../../shared/services/posts-api";

import styles from "./single-post-comments-page.module.css";

const SinglePostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        const fetchComments = async() => {
            try {
                const data = await getCommentByPostId(id);
                setComments(data);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }

        fetchComments();
    }, [id, setComments]);


    const elements = comments.map(({id, name, text}) => <li className={styles.comment} key={id}>
        <p>Name: {name}.</p>
        <p>{text}</p>
    </li>)

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default SinglePostCommentsPage;