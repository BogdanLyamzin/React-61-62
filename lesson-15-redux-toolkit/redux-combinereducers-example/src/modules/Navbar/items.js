import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
        {
        id: nanoid(),
        text: "MyBooks page",
        link: "/my-books"
    },
    {
        id: nanoid(),
        text: "My Favorite books page",
        link: "/my-favorite-books"
    },
    {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts"
    },
];

export default items;