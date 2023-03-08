import instance from "./auth";

export const getAllBooks = async()=> {
    const {data} = await instance.get("/books");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instance.post("/books", data);
    return result;
}

export const deleteBook = async(id) => {
    const {data} = await instance.delete(`/books/${id}`);
    return data;
}

