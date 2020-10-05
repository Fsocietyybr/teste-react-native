import React, { useEffect, useState } from 'react';

import { Main, Title } from './styles/global';

import api from './src/services/api'

export default function App() {
  const [info, setInfo] = useState([]);

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
