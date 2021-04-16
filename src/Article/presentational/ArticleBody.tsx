import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { ArticleDetailApi } from "../../api/ApiProps";

const article = {
    "content" : "hashtag값에 포함된 요소를 해시태그형식으로 렌더링힌다.타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있습니다.타입스크립트의 기본 타입에는 크게 다음 12가지가 있습니다.",
    "image" : "https://files.slack.com/files-pri/T01GPT3UY9J-F01U4D2D5PW/image.png",
}

interface Props{
    
}
interface State{
    count: number;
}

class CounterButton extends React.Component<Props,State>{
    constructor(props:number){
        super(props)
        this.state={count:0}
    }

    onIncrement = (): void =>{
        this.setState(
            ({count})=>({count:count+1})
        );
    }

    onDecrement = (): void =>{
        this.setState(
            ({count})=>({count:count-1})
        );
    }

    render() {
    const { onIncrement, onDecrement } = this;
    return (
      <div>
        <button type="button" className="favorites-button" onClick={onIncrement}>
            <i className="heart outline icon"/>
        </button>
      </div>
    );
  }
} 

const ArticleBody = ( dummyData: ArticleDetailApi ) => {
    const {content, hashtags, favorites, wonders, clips} = {...dummyData}
    
    return(
        <main>
            <article>
                <section className = "article-content">
                    <h6>{article.content}</h6>
                </section>
                <section className = "article-image">
                    <img src={article.image} alt='첨부된 이미지 파일'/>
                </section>
            </article>
            <div className = "article-descriptions">
                <div className="hashtags">
                    <button type="button" className="hashtag">#해시태그1</button>
                    <button type="button" className="hashtag">#해시태그2</button>
                    <button type="button" className="hashtag">#해시태그3</button>
                </div>
                <div className="buttons">
                    <CounterButton/>
                    <CounterButton/>
                    <CounterButton/>
                </div>
            </div>
        </main>
    )
}

export default ArticleBody;