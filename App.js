import React, { useEffect, useState } from 'react';

import { Main, Title, Content, News } from './styles/global';

import api from './src/services/api'

export default function App() {
  // use state recording journal data
  const [articles, setArticle] = useState([]);
  const [sciences, setScience] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // use effect loading hooks api responses
  useEffect(() => {
    const loadNews = async () => {
        try {
            const response = await api.get('science.json');

            const { results } = response.data;
           console.log(results);
           setScience(results);
          } catch (err) {
            // Handle Error Here
            console.error(err);
         }
         };

        loadNews();
     }, []);

  useEffect(() => {
    const loadNews = async () => {
        try {
            const response = await api.get('arts.json');

            const { results } = response.data;
           console.log(results);
           setTechnologies(results);
          } catch (err) {
            // Handle Error Here
            console.error(err);
         }
         };

        loadNews();
     }, []);

  return (
    <>
      <Main>
        <Title>Technology</Title>
        <Content>
          {technologies.map(technology => <News key={technology.url}>{technology.title}</News> )}
        </Content>
        <Title>Science</Title>
      </Main>
    </>
  );
}
