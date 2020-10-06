import React, { useState, useEffect, Component } from 'react';

import { Draw , Title } from './styled-drawers';

import api from '../../services/api';

const Science = () => {
  const [sciences, setSciences] = useState([]);

  useEffect(() => {
    loadNews("science.json", setSciences);
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
      <Title>Hello, I am your Science!</Title>
      {sciences.map((science => <Title key={science.url}>{science.title}</Title>))}
    </Draw>
  );
}

export default Science;
