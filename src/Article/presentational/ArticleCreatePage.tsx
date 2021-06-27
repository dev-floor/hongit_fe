import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  boardDetailOptions,
  articleCreateSelectedOptions,
  applySelectedOptionsFlag,
} from 'Atoms/atom';
import { ArticleCreatePageProps } from 'interface/ArgProps';
import { RiEqualizerLine } from 'react-icons/ri';
import ArticleOptionModal from 'Commons/ArticleOptionModal';
import 'css/Article.css';

const ArticleCreatePage = ({
  onRegisterArticle,
  modifiyTargetArticle,
}: ArticleCreatePageProps) => {
  const history = useHistory();

  // modifiyTargetArticle 값이
  // undefined 이면 게시물을 새로 등록하는 것.
  // undefined가 아니라면 해당내용을 수정하는 것.

  const [newTitle, setNewTitle] = useState('');
  const [newHashtags, setNewHashtags] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newArticle, setNewArticle] = useState({
    options: [] as string[],
    title: '',
    anonymous: true,
    content: '',
    hashtags: [] as string[],
  });
  const [filterOpenState, setFilterOpenState] = useState<boolean>(false);

  const onOpenFilterModal = () => {
    setFilterOpenState(true);
  };

  const onCloseFilterModal = () => {
    setFilterOpenState(false);
  };

  // recoil values.
  const boardOptions = useRecoilValue(boardDetailOptions);
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    articleCreateSelectedOptions
  );
  const selectedOptionsApplyFlag = useRecoilValue(applySelectedOptionsFlag);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const onChangeHashtags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHashtags(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  const onChangeNewArticle = () => {
    setSelectedOptions(() => [] as string[]);
    onRegisterArticle(newArticle);
  };

  useEffect(() => {
    const $anonymous = document.querySelector('#anonymous') as HTMLInputElement;
    let modifiedHashTags: string[] = [];
    const newOptions = selectedOptionsApplyFlag
      ? selectedOptions
      : ([] as string[]);
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
      modifiedHashTags = [] as string[];
    }

    setNewArticle(() => ({
      options: newOptions,
      title: newTitle,
      anonymous: $anonymous.checked,
      content: newContent,
      hashtags: modifiedHashTags,
    }));
  }, [
    newTitle,
    newHashtags,
    newContent,
    selectedOptions,
    selectedOptionsApplyFlag,
  ]);

  useEffect(() => {
    if (modifiyTargetArticle !== undefined) {
      (document.querySelector('.title-area .title') as HTMLInputElement).value =
        modifiyTargetArticle.title;
      (document.querySelector(
        '.hashtag-area input'
      ) as HTMLInputElement).value = modifiyTargetArticle.hashtags.join(',');
      (document.querySelector(
        '.contents-area textarea'
      ) as HTMLTextAreaElement).value = modifiyTargetArticle.content;
    }
  }, [modifiyTargetArticle]);

  const onConfirmRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm('게시물을 등록하시겠습니까?')) {
      onChangeNewArticle();
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
    <div className="article-create-area">
      {selectedOptionsApplyFlag && (
        <header className="article-create-header">
          <section className="article-create-option-area">
            {selectedOptions.map((op) => (
              <span className="option">{op}</span>
            ))}
          </section>
        </header>
      )}
      <form className="article-create-form" onSubmit={onConfirmRegister}>
        <div className="title-area">
          <input
            className="title"
            type="text"
            placeholder="제목을 입력하세요..."
            onChange={onChangeTitle}
            required
          />
          {selectedOptions.length > 0 ? (
            <RiEqualizerLine
              className="option-btn activated"
              onClick={onOpenFilterModal}
            />
          ) : (
            <RiEqualizerLine
              className="option-btn"
              onClick={onOpenFilterModal}
            />
          )}

          <label htmlFor="anonymous">
            <input type="checkbox" id="anonymous" /> <span>익명</span>
          </label>
        </div>
        <hr />
        <div className="hashtag-area">
          <input
            type="text"
            placeholder="해시태그를 쉼표를 기준으로 입력하세요..."
            onChange={onChangeHashtags}
          />
        </div>
        <hr />
        툴바 추후 지원
        <hr />
        <div className="contents-area">
          <textarea
            placeholder="내용을 입력해주세요..."
            onChange={onChangeContent}
            required
          />
        </div>
        <hr />
        <div className="btn-area">
          <button
            className="btn-cancle"
            type="button"
            onClick={onConfirmCancel}
          >
            취소
          </button>
          <button className="btn-register default-submit-btn" type="submit">
            등록
          </button>
        </div>
      </form>
      <ArticleOptionModal
        open={filterOpenState}
        close={onCloseFilterModal}
        options={boardOptions}
      />
    </div>
  );
};

export default ArticleCreatePage;
