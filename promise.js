const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (affect) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((res) => {
      const [iXX, vGC] = res;
      // return [
      //   iXX.filter((movie) => movie.hasil === affect).length,
      //   vGC.filter((movie) => movie.hasil === affect).length,
      // ];
      return [...iXX, ...vGC].filter((movie) => movie.hasil === affect).length;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  promiseOutput,
};
