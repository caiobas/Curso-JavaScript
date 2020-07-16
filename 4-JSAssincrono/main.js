//https://github.com/axios/axios
axios.get('https://api.gitasashub.com/users/caiobas')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error){
    console.warn(error);
  });