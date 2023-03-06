import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 4,
    }
})

export const searchPosts = async(q, _page = 1)=> {
    const {data} = await instance.get("/", {
        params: {
            q,
            _page,
        }
    });
    return data;
}

export const getAllPosts = async()=> {
    const {data} = await instance.get("/");
    return data;
}

export const getPostById = async(id)=> {
    const {data} = await instance.get(`/${id}`);
    return data;
}

export const getCommentByPostId = async(id)=> {
    const {data} = await instance.get(`/${id}/comments`);
    return data;
}