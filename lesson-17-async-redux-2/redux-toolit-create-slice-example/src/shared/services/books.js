import axios from "axios";

const booksInstance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/books"
})

export const getAllBooks = async()=> {
    const {data} = await booksInstance.get("/");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await booksInstance.post("/", data);
    return result;
}

export const deleteBook = async(id) => {
    const {data} = await booksInstance.delete(`/${id}`);
    return data;
}

