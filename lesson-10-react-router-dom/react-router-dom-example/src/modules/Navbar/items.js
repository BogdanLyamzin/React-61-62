import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
    {
        id: nanoid(),
        text: "Books page",
        link: "/books"
    },
    {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts"
    },
];

export default items;