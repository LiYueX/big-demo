import axios from 'axios';

//向github请求个人信息的get方法
function searchGit(userName){
  let address = `https://api.github.com/users/${userName}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

//向github的仓库中请求卡片信息的get方法
function getCards(){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/works/card.json?${Math.random()}`)
  .then( (res) => (
    { cardsData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}
//向github的仓库中请求卡片按钮所点击跳转时的信息的get方法
function getWorks(num){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/works/${num}.md?${Math.random()}`)
  .then( (res) => (
    { worksData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}
//向github的仓库中请求博客信息的get方法
function getBlogs(){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/blogs/blogs.json?${Math.random()}`)
  .then( (res) => (
    { cardsData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}

//向github的仓库中请求博客按钮点击跳转页面信息的get方法
function getBlogInfos(num){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/blogs/${num}.md?${Math.random()}`)
  .then( (res) => (
    { infoData : res.data}
    )
  )
  .catch(function (error) {
    alert(error);
  })
}
export { searchGit , getCards , getWorks , getBlogs , getBlogInfos }
