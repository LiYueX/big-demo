import axios from 'axios';

function searchGit(username){
  return axios.get(`https://api.github.com/users/${username}`)
  .then( (res) => (
    { getGit : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}
export {searchGit}
