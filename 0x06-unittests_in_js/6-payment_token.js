const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response from API'});
  }
});

module.exports = getPaymentTokenFromAPI;
