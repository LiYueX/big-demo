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

function getCards(){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/card/card.json`)
  .then( (res) => (
    { cardsData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}

function getWorks(num){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/blogs/${num}.md?${Math.random()}`)
  .then( (res) => (
    { worksData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}
export {searchGit,getCards,getWorks}
