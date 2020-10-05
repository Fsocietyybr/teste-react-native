import React, { useEffect, useState } from 'react';

import { Main, Title, Content, News } from './styles/global';

import api from './src/services/api'

export default function App() {
  const [articles, setArticle] = useState([]);

  // Load dos dados da api
  useEffect(() => {
    async function loadArticles() {
      const response = await api.get('/arts.json');

      const { results: news } = response.data;

      console.log(news);
      setArticle(news);
    }

    loadArticles();
  }, []);

  return (
    <>
      <Main>
        <Title>Technology</Title>
        <Content>
          {articles.map(article => <News key={article.url}>{article.title}</News> )}
        </Content>
        <Title>Science</Title>
      </Main>
    </>
  );
}
