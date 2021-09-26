import React from 'react';
import { ArticleProps } from 'interface/ArgProps';
import TglBtn from 'Commons/TglBtn';

import { v4 as uuidv4 } from 'uuid';
import 'css/Article.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const ArticleBody = ({ data }: ArticleProps) => {
  const { content, hashtags, favoriteCount, wonderCount, clipCount } = {
    ...data,
  };

  const onToggleFavorites = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Favorites Button Clicked - Api Call');
  };

  const onToggleWonder = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Wonder Button Clicked - Api Call');
  };

  const onToggleClips = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Card View Clips Button Clicked - Api Call');
  };

  return (
    <div>
      <section className="article-content">
        {content && (
          <Viewer
            initialValue={content}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        )}
      </section>
      <br />
      <section className="article-descriptions">
        <div className="hashtag-area">
          {hashtags?.map((tags) => (
            <button key={uuidv4()} className="hashtag" type="button">
              {tags}
            </button>
          ))}
        </div>
        <div className="tglbtn-area">
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

export default ArticleBody;
