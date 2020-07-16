//https://github.com/axios/axios
axios.get('https://api.github.com/users/caiobas')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error){
    console.warn(error);
  });