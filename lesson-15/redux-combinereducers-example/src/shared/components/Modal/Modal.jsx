import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
    const closeModal = ({ target, currentTarget, code }) => {
        if (target === currentTarget || code === "Escape") {
            close()
        }
    }
    
    useEffect(() => {
        document.addEventListener("keydown", closeModal);

        return () => document.removeEventListener("keydown", closeModal);
    }, [closeModal]);

    return (
        createPortal(
            <div className={styles.overlay} onClick={closeModal}>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={close}>X</span>
                    {children}
                </div>
            </div>,
            modalRoot
        )
    )
}

export default Modal;

/*
class Modal extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal)
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }

    render() {
        const { children, close } = this.props;
        const {closeModal} = this;

        return (
            createPortal(
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal}>
                        <span className={styles.close} onClick={close}>X</span>
                        {children}
                    </div>
                </div>,
                modalRoot
            )
        )
    }
}
*/

