import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./posts-search-list.module.scss";

const PostsSearchList = ({ items }) => {

    const elements = items.map(({ id, title, body }) =>
        <Link className={styles.link} key={id} to={`/posts/${id}`}><li className={styles.item}>
            <h4>{title}</h4>
            <p>{body}</p>
        </li></Link>);

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