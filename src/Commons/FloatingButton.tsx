import React from 'react';
import 'css/Article.css';

const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const onScroll = () => {};

  return (
    <div className="floating-btn-area" onScroll={onScroll}>
      <button
        className="btn-top default-btn"
        type="button"
        onClick={scrollToTop}
      >
        <i className="chevron up icon" />
      </button>
      <button
        className="btn-bottom default-btn"
        type="button"
        onClick={scrollToBottom}
      >
        <i className="chevron down icon" />
      </button>
    </div>
  );
};

export default FloatingButton;
