import React, { useState, useRef } from 'react';
import { Link, Route } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  CommentAreaProps,
  CommentProps,
} from '../argumentsPropsInterface/ArticleProps';
import { ArticleCommentApi } from '../../api/ApiProps';

import 'css/Article.css';

const Comment = ({
  onUpdateComment,
  onDeleteComment,
  commentsProps,
}: CommentProps) => {
  const { id, anonymous, author, content, favorites } = { ...commentsProps };
  return (
    <div className="comment">
      <div className="comment-author-area">
        {anonymous ? (
          <div className="comment-author-name"> 익명 </div>
        ) : (
          <div className="comment-author-name"> {author.name} </div>
        )}
      </div>
      <div className="comment-content"> {content} </div>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
        className="comment-icon-area"
      >
        <AiOutlineHeart className="heart-icon" size="14" />
        {favorites}
      </div>
      <div className="comment-btn-area">
        <button
          type="button"
          className="comment-btn-update"
          onClick={onUpdateComment}
        >
          수정
        </button>
        <button
          type="button"
          className="comment-btn-delete"
          onClick={onDeleteComment}
        >
          삭제
        </button>
      </div>
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
    (document.querySelector(
      '.comment-submit-area textarea'
    ) as HTMLTextAreaElement).value = '';
    id.current += 1;
    e.preventDefault();
  };

  const onUpdateComment = () => {
    console.log('update Comment btn clicked!');
    // 댓글 업데이트 기능을 여기에 구현하면 됩니다. (너무친절)
  };

  const onDeleteComment = () => {
    console.log('delete Comment btn clicked!');
    // 댓글 삭제 기능을 여기에 구현하면 됩니다. (너무친절)
  };

  return (
    <div className="comment-area">
      <div>댓글 수 {commentsListProps.length}</div>
      <hr />
      <form className="comment-submit-area" onSubmit={onHandleSubmit}>
        <textarea placeholder="댓글을 입력하세요..." onChange={onChange} />
        <button className="btn-submit" type="submit">
          등록
        </button>
      </form>
      <hr />
      <div>
        {commentsListProps.map((comment) => (
          <Comment
            onUpdateComment={onUpdateComment}
            onDeleteComment={onDeleteComment}
            commentsProps={comment}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentArea;
