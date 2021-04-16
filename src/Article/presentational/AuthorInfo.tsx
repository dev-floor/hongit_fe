import React from 'react';
import '../css/AuthorInfo.css'
import data from "../../data/articleInfo.json";

const AuthorInfo = () => (
    <div className="AuthorInfo">
        <div className="userImage">
            <img src={data.author.image} alt="UserImage"/>
        </div>
        <div className="userInfo">
            <div className="h-container">
                { data.anonymous ? (
                    <div className = "userName"> 익명 </div>  
                ) : ( 
                    <div className = "userName"> {data.author.name} </div>  
                )}
                <a href={data.author.github} target="_blank" rel="noreferrer" > 
                    <img style={ { display: data.anonymous ? "none" : "block"} } className = "linkImage" src={data.author.image} alt={data.author.github} />
                </a>
                <a href={data.author.blog} target="_blank" rel="noreferrer">
                    <img style={ { display: data.anonymous ? "none" : "block"} } className = "linkImage" src={data.author.image} alt={data.author.blog}/>
                </a>
            </div>  
            { data.anonymous ? (
                <div className = "userDescription"> 익명입니다 </div> 
            ) : ( 
                <div className = "userDescription"> {data.author.description} </div> 
            ) }
        </div>
    </div>
);

export default AuthorInfo;
