import { useState, useEffect } from "react";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

const BuyList = () => {
    const [items, setItems] = useLocalStorage("buy-list", []);

    const elements = items.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BuyList;