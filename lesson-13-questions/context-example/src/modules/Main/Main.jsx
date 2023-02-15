import useLang from "../../shared/hooks/useLang";

import locale from "./locale.json";

const Main = ()=> {
    const {lang} = useLang();

    const title = locale.title[lang];
    const content = locale.content[lang];

    return (
        <div>
           <h2>{title}</h2>
           <p>{content}</p>
        </div>
    )
}

export default Main;