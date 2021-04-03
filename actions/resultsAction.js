import axios from 'axios';

const getResults = setResults => {
  axios
    .get('https://sachit-app-server.herokuapp.com/api/results')
    .then((res) => {
      if (res.data && res.status === 200) {
        setResults(res.data);
      }
    })
    .catch((err) => console.log(err));
};

export default getResults;
