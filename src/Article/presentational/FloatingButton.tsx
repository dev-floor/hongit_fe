import React from 'react';

import 'css/Article.css'

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
    <div className="articleDetailRight">
      <div className="floatingButtons" onScroll={onScroll}>
        <button className="btnTop" type="button" onClick={scrollToTop}>
          <i className="chevron up icon" />
        </button>
        <button className="btnBottom" type="button" onClick={scrollToBottom}>
          <i className="chevron down icon" />
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;
