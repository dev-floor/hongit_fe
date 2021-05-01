import React, { useState } from 'react';
import { ArticleCreatePageProps } from '../argumentsPropsInterface/ArticleProps';
import '../css/ArticleCreatePage.css';

const ArticleCreatePage = ({ onRegisterArticle }: ArticleCreatePageProps) => {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const $anonymous = document.querySelector('#anonymous') as HTMLInputElement;
    let modifiedHashTags: string[] = [];
    if (newHashtags.includes(',')) {
      modifiedHashTags = newHashtags.split(',');
      modifiedHashTags = modifiedHashTags.map((splitHashtag) =>
        splitHashtag.trim()
      );
    } else {
      modifiedHashTags = [newHashtags.trim()];
    }
    setNewArticle({
      options: [],
      title: newTitle,
      anonymous: $anonymous.checked,
      content: newContent,
      hashtags: modifiedHashTags,
    });
    e.preventDefault();
    onRegisterArticle(newArticle);
  };

  return (
    <div className="createArea">
      <form className="articleCreateForm" onSubmit={onSubmit}>
        <div className="titleArea">
          <input
            className="title"
            type="text"
            placeholder="제목을 입력하세요..."
            onChange={onChangeTitle}
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
          />
        </div>
        <hr />
        <div className="btnArea">
          <button className="btnCancel" type="button">
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
