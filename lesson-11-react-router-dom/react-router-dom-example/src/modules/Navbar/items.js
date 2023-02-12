import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
    {
        id: nanoid(),
        text: "Posts search page",
        link: "/posts-search"
    },
    {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts"
    },
];

export default items;