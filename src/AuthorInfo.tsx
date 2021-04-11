import { AnyARecord } from 'node:dns';
import React from 'react';
import './AuthorInfo.css';
import mypic from './logo.svg'

const articleInfo = {
    "options" : [
        "a",
        "b",
        "c",
    ],
    "title" : "hello world",
    "anonymous" : true,
    // "anonymous" : false,
    "author" : {
        "name" : "hello",
        "image" : "https://hello.com",
        "github" : "lxxjn0",
        "blog" : "https://ell.com",
        "description" : "",
    },
    "createdDate" : "",
    "content" : "",
    "hashtags" : [
        "abc",
        "def",
    ],
    "favorites" : 1,
    "wonders" : 1,
    "clips" : 1,
    }

const user = {
    "name" : "hyunJu",
    "image" : mypic,
    "github" : "lxxjn0",
    "blog" : "https://ell.com",
    "description" : "London 안녕하세요 is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.",
}


function getUserName(flag: boolean) : any {
    if( !flag ){
        return user.name;
        // return <div className = "userName"> {user.name} </div>  
    }
        return "익명";  
        // return <div className = "userName"> 익명 </div>  
}

function getDescription(flag: boolean) : any {
    if( !flag ){
        return user.description;
    }
        return "익명입니다.";  
}

const tempUserName:string = getUserName(articleInfo.anonymous);
const tempDescription:string = getDescription(articleInfo.anonymous);

const AuthorInfo = () => (
    <div className="AuthorInfo">
        <div className="userImage">
            <img src={user.image} alt="UserImage"/>
        </div>
        <div className="userInfo">
            <div className="h-container">
                {/* <div className = "userName"> {user.name} </div> */}
                <div className = "userName"> {tempUserName} </div>
                <a href="https://naver.com" target="_blank" rel="noreferrer">
                    <img className = "linkImage" src={user.image} alt={user.github}/>
                </a>
                <a href="https://naver.com" target="_blank" rel="noreferrer">
                    <img className = "linkImage" src={user.image} alt={user.blog}/>
                </a>
            </div>
            {/* <div className = "userDescription"> {user.description} </div> */}
            <div className = "userDescription"> {tempDescription} </div>
        </div>
    </div>
);



export default AuthorInfo;