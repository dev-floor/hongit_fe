import React from 'react';
import { Link } from 'react-router-dom';
import { BoardPreviewProp, ArticlePreviewProp } from 'interface/ArgProps';
import TglBtn from 'Commons/TglBtn';
import CalDiffTime from 'Commons/CalDiffTime';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import 'css/BoardPreview.css';

const ArticlePreview = ({ previewData }: ArticlePreviewProp) => {
  const {
    articleId,
    title,
    favoriteCount,
    wonderCount,
    clipCount,
    createdAt,
  } = { ...previewData };

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Main View Favorites Button Clicked - Api Call');
  };

  const onToggleWonder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Main View Wonder Button Clicked - Api Call');
  };

  const onToggleClips = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Main View Clips Button Clicked - Api Call');
  };

  return (
    <div className="preview-container">
      <Link className="title-link" to={`/article/${articleId}`}>
        <section className="preview-title">{title}</section>
      </Link>
      <section className="preview-detail">
        <div className="preview-time">{CalDiffTime(createdAt)}</div>
        <div className="preview-response">
          <TglBtn
            type="heart"
            count={favoriteCount}
            handler={onToggleFavorites}
          />
          <TglBtn type="wonder" count={wonderCount} handler={onToggleWonder} />
          <TglBtn type="scrap" count={clipCount} handler={onToggleClips} />
        </div>
      </section>
    </div>
  );
};

const BoardPreview = ({ previewData }: BoardPreviewProp) => {
  const { title, articles } = { ...previewData };
  return (
    <div className="board-preview-detail">
      <section className="board-title">
        <a href="/board">
          <FontAwesomeIcon
            className="hot-icon"
            icon={faFireAlt}
            style={{ color: 'crimson' }}
          />
        </a>
        {title}
      </section>
      <hr />
      <section className="article-area">
        {articles?.map((article) => (
          <ArticlePreview key={uuidv4()} previewData={article} />
        ))}
      </section>
    </div>
  );
};

export default BoardPreview;
