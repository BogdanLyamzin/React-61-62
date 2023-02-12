import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./posts-search-list.module.scss";

const PostsSearchList = ({items, showPost})=> {

        const elements = items.map(({ id, title, body }) => <Link className={styles.link} key={id} to={`/posts/${id}`}><li onClick={()=> showPost({title, body})} key={id} className={styles.item}>
                                                                <h4>{title}</h4>
                                                                <p>{body}</p>
                                                            </li></Link>);
    // console.log("render post list")
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
}

export default memo(PostsSearchList);

PostsSearchList.defaultProps = {
    items: []
}