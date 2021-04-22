    import React, {useState} from "react";
    import { ArticleDetailApi } from "../../api/ApiProps";

    function Counter( {onClick, fav: number} ){
        const [count,setCount] = useState<number>(0);
        const onIncrease = () => setCount(count + 1);
        const onDecrease = () => setCount(count - 1);

        return(
            <div>
                <button type="button" onClick={onIncrease}>favorites</button>
                <h3>{fav}</h3>
            </div>
        )
    }

    const ArticleBody = ( dummyData: ArticleDetailApi ) => {
        const {content, author, hashtags, favorites, wonders, clips} = {...dummyData}
        const [fav, setFav] = useState(favorites);
        
        return(
            <main>
            <article>
                <section className = "article-content">
                    <h6>{content}</h6>
                </section>
                <section className = "article-image">
                    <img src={author.image} alt='첨부된 이미지 파일'/>
                </section>
            </article>
            <div className = "article-descriptions">
                <div className="hashtags">
                    <button type="button" className="hashtag">#해시태그1</button>
                    <button type="button" className="hashtag">#해시태그2</button>
                    <button type="button" className="hashtag">#해시태그3</button>
                </div>
                <div className="buttons">
                    <Counter onClick = {() => {
                        setFav(fav + 1);
                    }}, {fav}/>
                </div>
            </div>
        </main>
    )
}

export default ArticleBody;
