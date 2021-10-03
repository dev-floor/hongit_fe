import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { articleAPI } from 'api/api';
import { ArticleDetailApi, OptionResponse } from 'api/ApiProps';
import FloatingButton from 'Commons/FloatingButton';
import CommentContainer from './CommentContainer';
import ArticleBody from '../presentational/ArticleBody';
import AuthorInfo from '../presentational/AuthorInfo';
import ArticleHeader from '../presentational/ArticleHeader';
import 'css/Article.css';

const ArticleDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setArticleData] = useState<ArticleDetailApi>({
    id: -1,
    options: [] as OptionResponse[],
    title: '',
    anonymous: false,
    author: {
      nickname: '',
      type: { id: '', text: '' },
      image: '',
      github: '',
      blog: '',
      description: '',
    },
    content: '',
    hashtags: [] as string[],
    favoriteCount: 0,
    wonderCount: 0,
    clipCount: 0,
    createdAt: '',
    modifiedAt: '',
  });

  const loadData = useCallback(async () => {
    const response = await articleAPI.getById(id);
    setArticleData(response);
    console.log(response);
  }, [id]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      {data === undefined || data.id === -1 ? (
        <div>Loading...</div>
      ) : (
        <div className="article-detail">
          <section className="article-detail-left">
            <ArticleHeader data={data} />
            <hr />
            <section className="article-detail-body">
              <ArticleBody data={data} />
              <AuthorInfo data={data} />
            </section>
            <hr />
            <section className="article-detail-comment">
              <CommentContainer articleId={id} />
            </section>
          </section>
          <section className="vertical"> </section>
          <section className="article-detail-right">
            <FloatingButton />
          </section>
        </div>
      )}
    </div>
  );
};

export default ArticleDetailContainer;
