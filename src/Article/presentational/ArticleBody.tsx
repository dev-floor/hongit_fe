import React from "react";
import { ArticleDetailApi } from "../../api/ApiProps";

const ArticleBody = ( dummyData: ArticleDetailApi ) => {
    const {content, hashtags} = {...dummyData}

    return(
        <main>
            <article>
                <section className = "article-content">
                    <h6>{content}</h6>
                </section>
                <section className = "article-image">
                    <img src={content} alt='첨부된 이미지 파일'/>
                </section>
            </article>
            <div className = "article-descriptions">
                <div className="hashtags">
                    {hashtags.map((tags) => (
                        <button className="hashtag" type="button">{tags}</button>
                     ))}
                </div>
            </div>
        </main>
    )
}

export default ArticleBody;
