import { Component } from "react";
import axios from "axios";

import styles from "./posts.module.scss";

class Posts extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
    }

    componentDidMount(){
        this.setState({loading: true})
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(({data}) => {
                this.setState({items: data})
            })
            .catch(error => {
                this.setState({error: error.message});
            })
            .finally(()=> this.setState({loading: false}))
    }

    render() {
        const { items, loading, error } = this.state;

        const elements = items.map(({ id, title, body }) => <li key={id} className={styles.item}>
                                                                <h4>{title}</h4>
                                                                <p>{body}</p>
                                                            </li>)
        return (
            <>
            {loading && <p>...Loading</p>}
            {error && <p>Somthing goes wrong. Please try again later.</p>}
                <ul className={styles.list}>
                    {elements}
                </ul>
            </>
        )
    }
}

export default Posts;