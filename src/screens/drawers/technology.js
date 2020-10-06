import React, { useState, useEffect, Component } from 'react';

import { Draw , Title } from './styled-drawers';

import api from '../../services/api';

const Technology = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    loadNews("science.json", setTechs);
  }, []);

  const loadNews = async (url, callBack) => {
    try {
      const response = await api.get(url);
      const { results } = response.data;
      console.log(results);
      callBack(results);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  return (
    <Draw>
      <Title>Hello, I am your Tech!</Title>
      {techs.map((tech => <Title key={tech.url}>{tech.title}</Title>))}
    </Draw>
  );
}

export default Technology;
