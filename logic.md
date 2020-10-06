Components
<Main>
        <Title>Technology</Title>

        <Title>Science</Title>
      </Main>

  // use state recording journal data
  const [sciences, setScience] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // use effect loading hooks api responses
  useEffect(() => {
    loadNews("science.json", setScience);
    loadNews("technology.json", setTechnologies);
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


then rendering to app

{technologies.map(technology => <News key={technology.url}>{technology.title}</News> )}
{sciences.map(science => <News key={science.url}>{science.title}</News> )}
