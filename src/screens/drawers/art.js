import React, { useState, useEffect, Component } from 'react';

import { Draw , Title } from './styled-drawers';

import api from '../../services/api';

const Art = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    loadNews("arts.json", setArts);
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
      <Title>Hello, I am your art!</Title>
      {arts.map((art => (
        <Title key={art.url}>
        {art.title}

        </Title>
      )))}
    </Draw>
  );
}

export default Art;
