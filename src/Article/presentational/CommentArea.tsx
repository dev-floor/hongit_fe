import React, { useState, useRef } from 'react';
import { Link, Route } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { CommentAreaProps } from '../argumentsPropsInterface/ArticleProps';
import { ArticleCommentApi } from '../../api/ApiProps';
import '../css/CommentArea.css';

import RouterTest from '../../RouterTest';

const Comment = (dummyData: ArticleCommentApi) => {
  const { id, anonymous, author, content, favorites } = { ...dummyData };
  return (
    <div className="Comment">
      <div className="authorInfo">
        {anonymous ? (
          <div className="authorName"> 익명 </div>
        ) : (
          <div className="authorName"> {author.name} </div>
        )}
      </div>
      <div className="contents"> {content} </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className="iconContainer"
      >
        <AiOutlineHeart className="hearticon" size="14" />
        {favorites}
      </div>
      <Link to={`/Detail/${id}`}>Read More ...</Link>
    </div>
  );
};

const CommentArea = ({
  onRegisterComment,
  onPressFavorite,
  commentsListProps,
}: CommentAreaProps) => {
  // id는 백에서 생성해서 전달 / recoil 로 관리
  const id = useRef(commentsListProps.length + 1);
  const [newComment, setNewComment] = useState({
    id: id.current,
    anonymous: true,
    author: {
      name: '',
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    content: '',
    favorites: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      id: id.current,
      anonymous: true,
      author: {
        name: '',
        image: '',
        github: '',
        blog: '',
        description: '',
      },
      content: e.target.value,
      favorites: 0,
    });
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onRegisterComment(newComment);
    id.current += 1;
    e.preventDefault();
  };

  return (
    <div className="commentArea">
      <div className="numCommentArea">댓글 수 {commentsListProps.length}</div>
      <hr />
      <form className="inputArea" onSubmit={onHandleSubmit}>
        <textarea
          className="inputBox"
          placeholder="댓글을 입력하세요..."
          onChange={onChange}
        />
        <button className="btnSubmit" type="submit">
          등록
        </button>
      </form>
      <hr />
      <div className="commentListArea">
        {commentsListProps.map((comment) => (
          <Comment
            id={comment.id}
            anonymous={comment.anonymous}
            author={comment.author}
            content={comment.content}
            favorites={comment.favorites}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentArea;
