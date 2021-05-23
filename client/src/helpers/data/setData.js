import axios from 'axios';

const baseUrl = 'https://f2baak62.api.sanity.io/v1/data/query/production';
// const baseUrl = '/data';

// const getSets = () => new Promise((resolve, reject) => {
//   axios
//     .get(`${baseUrl}/sets.json`)
//     .then((res) => {
//       const { sets } = res.data;
//       resolve(sets);
//     })
//     .catch((err) => reject(err));
// });

const getSets = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}?query=*%5B_type%3D%3D'set'%5D%7B%0A%20%20themeId-%3E%7Bname%7D%2C%0AbrickSeparatorColorId-%3E%7Bname%2C%20color%2C%20imageUrl%7D%2C%0ApurchaseLocationId-%3E%7Bname%2Caddress%7D%2C%0A...%0A%7D`)
    .then((res) => {
      const sets = res.data.result;
      resolve(sets);
    })
    .catch((err) => reject(err));
});

export default {
  getSets,
};
