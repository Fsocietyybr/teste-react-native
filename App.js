import React, { useEffect, useState } from 'react';

import { Main, Title } from './styles/global';

import api from './src/services/api'

export default function App() {
  const [info, setInfo] = useState([]);

  // Load dos dados da api
  useEffect(() => {
    async function loadNews() {
      const response = await api.get('/arts.json');
      console.log(response.data);
      setInfo(response.data);
    }

    loadNews();
  }, []);

  return (
    <>
      <Main>
        <Title>T1M3 2 RE4D</Title>
        <Title>._Technology</Title>
        <Title>Science</Title>
      </Main>
    </>
  );
}
