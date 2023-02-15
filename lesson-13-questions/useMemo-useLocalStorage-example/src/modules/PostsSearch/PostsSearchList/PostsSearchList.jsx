import { memo } from "react";

import styles from "./posts-search-list.module.scss";

const PostsSearchList = ({items, showPost})=> {

        const elements = items.map(({ id, title, body }) => <li onClick={()=> showPost({title, body})} key={id} className={styles.item}>
                                                                <h4>{title}</h4>
                                                                <p>{body}</p>
                                                            </li>);

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