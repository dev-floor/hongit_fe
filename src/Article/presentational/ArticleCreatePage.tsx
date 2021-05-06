import React, { useState } from 'react';
import { ArticleCreatePageProps } from '../argumentsPropsInterface/ArticleProps';
import '../css/ArticleCreatePage.css';

const ArticleCreatePage = ({ onRegisterArticle, history }: ArticleCreatePageProps) => {
  const [newTitle, setNewTitle] = useState('');
  const [newHashtags, setNewHashtags] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newArticle, setNewArticle] = useState({
    options: [],
    title: '',
    anonymous: true,
    content: '',
    hashtags: [] as string[],
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const onChangeHashtags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputHashtags = e.target.value;
    setNewHashtags(inputHashtags);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  const onSubmit = () => {
    const $anonymous = document.querySelector('#anonymous') as HTMLInputElement;
    let modifiedHashTags: string[] = [];
    if (newHashtags.length > 0) {
      if (newHashtags.includes(',')) {
        modifiedHashTags = newHashtags.split(',');
        modifiedHashTags = modifiedHashTags.map((splitHashtag) =>
          splitHashtag.trim()
        );
      } else {
        modifiedHashTags = [newHashtags.trim()];
      }
    } else {
      modifiedHashTags = [""];
    }
    setNewArticle({
      options: [],
      title: newTitle,
      anonymous: $anonymous.checked,
      content: newContent,
      hashtags: modifiedHashTags
    });
    console.log(newTitle, newContent, modifiedHashTags);
    console.log(newArticle)
    onRegisterArticle(newArticle);
  };

  const onConfirmRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm('게시물을 등록하시겠습니까?')) {
      onSubmit();
    }
  };

  const onConfirmCancel = () => {
    if (newTitle !== '' || newHashtags !== '' || newContent !== '') {
      if (window.confirm('작성중인 내용이 있습니다. 나가시겠습니까?')) {
        history.goBack();
      }
    } else {
      history.goBack();
    }
  };

  return (
    <div className="createArea">
      <form className="articleCreateForm" onSubmit={onConfirmRegister}>
        <div className="titleArea">
          <input
            className="title"
            type="text"
            placeholder="제목을 입력하세요..."
            onChange={onChangeTitle}
            required
          />
          <label htmlFor="anonymous">
            <input type="checkbox" id="anonymous" /> <span>익명</span>
          </label>
        </div>
        <hr />
        <div className="hashtagArea">
          <input
            className="article-create-hashtag"
            type="text"
            placeholder="해시태그를 쉼표를 기준으로 입력하세요..."
            onChange={onChangeHashtags}
          />
        </div>
        <hr />
        툴바 추후 지원
        <hr />
        <div className="contentsArea">
          <textarea
            className="article-create-content"
            placeholder="내용을 입력해주세요..."
            onChange={onChangeContent}
            required
          />
        </div>
        <hr />
        <div className="btnArea">
          <button className="btnCancel" type="button" onClick={onConfirmCancel}>
            취소
          </button>
          <button className="btnRegister" type="submit">
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleCreatePage;
