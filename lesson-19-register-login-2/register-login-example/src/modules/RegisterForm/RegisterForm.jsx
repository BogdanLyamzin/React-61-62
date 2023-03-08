import TextField from "../../shared/components/TextField/TextField";
import Button from "../../shared/components/Button/Button";

import useForm from "../../shared/hooks/useForm";

import fields from "./fields";
import initialState from "./initialState";

import styles from "./register-form.module.scss";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField value={name} handleChange={handleChange} {...fields.name} />
            <TextField value={email} handleChange={handleChange} {...fields.email} />
            <TextField value={password} handleChange={handleChange} {...fields.password} />
            <Button>Register</Button>
        </form>
    )
}

export default RegisterForm;