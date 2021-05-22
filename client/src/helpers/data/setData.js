import axios from 'axios';

const baseUrl = '/data';

const getSets = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/sets.json`)
    .then((res) => {
      const { sets } = res.data;
      resolve(sets);
    })
    .catch((err) => reject(err));
});

export default {
  getSets,
};
