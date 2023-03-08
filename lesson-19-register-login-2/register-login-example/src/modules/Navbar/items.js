import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/",
        private: false,
    },
        {
        id: nanoid(),
        text: "MyBooks page",
        link: "/my-books",
        private: true,
    },
    {
        id: nanoid(),
        text: "My Favorite books page",
        link: "/my-favorite-books",
        private: false,
    },
    {
        id: nanoid(),
        text: "Contacts page",
        link: "/contacts",
        private: false,
    },
];

export default items;