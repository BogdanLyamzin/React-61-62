import styles from "./post-details.module.scss";

const PostDetails = ({title, body}) => {
    return (
        <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
        </div>
    )
}

export default PostDetails;