import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./posts-search-form.module.scss";

class PostsSearchForm extends Component {

    state = {
        search: "",
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset()
    }

    reset(){
        this.setState({
            search: "",
        })
    }

    render() {
        const {search} = this.state;
        const {handleChange, handleSubmit} = this;

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Search posts</label>
                    <input value={search} onChange={handleChange} name="search" placeholder="Search posts" required />
                </div>
            </form>
        )
    }
}

export default PostsSearchForm;

PostsSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}