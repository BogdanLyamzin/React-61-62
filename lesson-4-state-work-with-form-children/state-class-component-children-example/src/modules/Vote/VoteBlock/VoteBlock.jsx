import PropTypes from "prop-types";

import styles from "./vote-block.module.scss";

const VoteBlock = ({ children, title }) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>{title}</h4>
            {children}
        </div>)
}

export default VoteBlock;

VoteBlock.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}