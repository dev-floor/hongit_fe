import React, { useState } from 'react';
import { atom, useSetRecoilState, useRecoilValue } from 'recoil';
import { AiOutlineHeart } from 'react-icons/ai';
import {
  CommentAreaProps,
  CommentProps,
} from '../argumentsPropsInterface/ArticleProps';
import Modal from '../../Commons/Modal';

import 'css/Article.css';

export const UpdateCommentId = atom({
  key: 'updateCommentId',
  default: 0, // 0일경우 수정 안함
});

export const DeleteCommentId = atom({
  key: 'deleteCommentId',
  default: 0, // 0일경우 삭제 안함
});

export const NewCommentId = atom({
  key: 'newCommentId',
  default: 0,
});

const Comment = ({
  onRegisterUpdateComment,
  onRegisterDeleteComment,
  onClickUpdateComment,
  onClickDeleteComment,
  commentsProps,
}: CommentProps) => {
  const { id, anonymous, author, content, favorites } = { ...commentsProps };
  const commentId = useRecoilValue(UpdateCommentId);

  const [updateComment, setUpdateComment] = useState({
    id: commentId,
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
  const setUpdateCommentId = useSetRecoilState(UpdateCommentId);

  const onUpdateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onRegisterUpdateComment(updateComment);
    e.preventDefault();
    console.log(`${updateComment.id}번째 댓글의 내용 Update Submit`);
    setUpdateCommentId(0); // Update후 선택한 댓글 id reset
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateComment({
      id: commentsProps.id,
      anonymous: commentsProps.anonymous,
      author: commentsProps.author,
      content: e.target.value,
      favorites: commentsProps.favorites,
    }); // 현재 변경중인 Comment의 정보 변경
    console.log(`${updateComment.id}번째 댓글의 내용이 변경중입니다`);
  };

  return (
    <div className="comment">
      <div className="comment-author-area">
        {anonymous ? (
          <div className="comment-author-name"> {id} 익명 </div>
        ) : (
          <div className="comment-author-name">
            {' '}
            {id} {author.name}{' '}
          </div>
        )}
      </div>
      {commentId !== id ? (
        <div className="comment-content"> {content} </div>
      ) : (
        <form className="comment-update-submit-area" onSubmit={onUpdateSubmit}>
          <textarea defaultValue={content} onChange={onChange} />
          <button className="btn-update-submit" type="submit">
            수정
          </button>
        </form>
      )}
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
          value={id}
          onClick={onClickUpdateComment}
        >
          수정
        </button>
        <button
          type="button"
          className="comment-btn-delete"
          value={id}
          onClick={onClickDeleteComment}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

const CommentArea = ({
  onRegisterCreateComment,
  onRegisterUpdateComment,
  onRegisterDeleteComment,
  onPressFavorite,
  commentsListProps,
}: CommentAreaProps) => {
  // id는 백에서 생성해서 전달 / recoil 로 관리
  const setNewCommentId = useSetRecoilState(NewCommentId);
  const setUpdateCommentId = useSetRecoilState(UpdateCommentId);
  const setDeleteCommentId = useSetRecoilState(DeleteCommentId);

  setNewCommentId(commentsListProps.length + 1);

  const newCommentId = useRecoilValue(NewCommentId);
  const deleteCommentId = useRecoilValue(DeleteCommentId);

  const [newComment, setNewComment] = useState({
    id: newCommentId,
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
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      id: newCommentId,
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
    onRegisterCreateComment(newComment);
    (document.querySelector(
      '.comment-submit-area textarea'
    ) as HTMLTextAreaElement).value = '';
    e.preventDefault();
    console.log(`${newComment.id}번째 댓글을 추가`);
    setNewCommentId(newCommentId + 1);
  };

  const onClickUpdateComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${e.currentTarget.value}번 댓글을 Update`);
    setUpdateCommentId(Number(e.currentTarget.value));
  };

  const onClickDeleteComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(`${e.currentTarget.value}번 댓글을 Delete`);
    setOpen(true);
    setDeleteCommentId(Number(e.currentTarget.value));
  };

  const onModalClickDeleteComment = () => {
    setOpen(false);
    onRegisterDeleteComment(deleteCommentId);
    console.log(`${deleteCommentId}번 댓글을 진짜 Delete`);
    setDeleteCommentId(0);
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
        {commentsListProps.map((comment, index) => (
          <Comment
            onRegisterUpdateComment={onRegisterUpdateComment}
            onRegisterDeleteComment={onRegisterDeleteComment}
            onClickUpdateComment={onClickUpdateComment}
            onClickDeleteComment={onClickDeleteComment}
            commentsProps={comment}
          />
        ))}
      </div>
      <Modal
        open={open}
        close={closeModal}
        btn1str="확인"
        btn1func={onModalClickDeleteComment}
        btn2str="취소"
        btn2func={closeModal}
        header="댓글 삭제"
        info="해당 댓글을 삭제하시겠습니까?"
      />
    </div>
  );
};

export default CommentArea;
