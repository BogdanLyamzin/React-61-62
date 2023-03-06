import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://auth-backend-lesson.herokuapp.com/api"
})

export const signup = (data) => {
    return authInstance.post("/users/signup", data);
}

export const login = (data) => {
    return authInstance.post("/users/login", data);
}