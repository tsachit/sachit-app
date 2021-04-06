import axios from 'axios';

const getResults = setResults => {
  axios({
    method: 'post',
    url: 'https://sachit-app-server.herokuapp.com/api/results',
    headers: { 
      'Api-Key': process.env.API_KEY
    }
  })
    .then((res) => {
      if (res.data && res.status === 200) {
        setResults(res.data);
      }
    })
    .catch((err) => console.log(err));
};

export default getResults;
