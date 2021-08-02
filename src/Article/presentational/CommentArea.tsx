import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { UpdateCommentId, DeleteCommentId, NewCommentId } from 'Atoms/atom';
import { CommentAreaProps, CommentProps } from 'interface/ArgProps';
import Modal from 'Commons/Modal';
import TglBtn from 'Commons/TglBtn';
import 'css/Article.css';

const Comment = ({
  onRegisterUpdateComment,
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

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Comment Favorites Button Clicked - Api Call');
  };

  return (
    <div className="comment">
      <div className="comment-author-area">
        {anonymous ? (
          <div className="comment-author-name"> 익명 </div>
        ) : (
          <div className="comment-author-name"> {author.name} </div>
        )}
        <div className="comment-func-area">
          <div className="comment-btn-area">
            <button
              type="button"
              className="default-btn"
              value={id}
              onClick={onClickUpdateComment}
            >
              수정
            </button>
            <button
              type="button"
              className="default-btn"
              value={id}
              onClick={onClickDeleteComment}
            >
              삭제
            </button>
          </div>
          <TglBtn type="heart" count={favorites} handler={onToggleFavorites} />
        </div>
      </div>
      {commentId !== id ? (
        <div className="comment-content"> {content} </div>
      ) : (
        <form className="comment-update-submit-area" onSubmit={onUpdateSubmit}>
          <textarea defaultValue={content} onChange={onChange} />
          <button
            className="btn-update-submit default-submit-btn"
            type="submit"
          >
            수정
          </button>
        </form>
      )}
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
  const [newCommentId, setNewCommentId] = useRecoilState(NewCommentId);
  const [deleteCommentId, setDeleteCommentId] = useRecoilState(DeleteCommentId);
  const setUpdateCommentId = useSetRecoilState(UpdateCommentId);
  setNewCommentId(commentsListProps.length + 1);

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
        <button className="btn-submit default-submit-btn" type="submit">
          등록
        </button>
      </form>
      <hr />
      <div>
        {commentsListProps.map((comment, index) => (
          <div>
            <Comment
              onRegisterUpdateComment={onRegisterUpdateComment}
              onClickUpdateComment={onClickUpdateComment}
              onClickDeleteComment={onClickDeleteComment}
              commentsProps={comment}
            />
            <hr />
          </div>
        ))}
      </div>
      <Modal
        open={open}
        close={closeModal}
        registerBtnStr="예"
        registerBtnFunc={onModalClickDeleteComment}
        cancelBtnStr="아니오"
        cancelBtnFunc={closeModal}
        header="댓글 삭제"
        info="해당 댓글을 삭제하시겠습니까?"
      />
    </div>
  );
};

export default CommentArea;
