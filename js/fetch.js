import {fetchRepoList} from './getRepoList.js';
fetch('https://api.github.com/users/androidmodloader', {
   method: 'GET',
   headers: {
     Accept: 'Application/JSON'
   }
 }).then((res) => {
   return res.json();
 }).then((data) => {
   //Save total Repo into LocalStorage
   localStorage.setItem(
   'repoTotalItem', //LocalStorage Key
   JSON.stringify(data.public_repos)
   .toString()
   .replace(/"/g,""));
   
  // Await 250ms for saving repoList and load it, and prevent error for the first time
  setTimeout(function() {
    fetchRepoList();
    $('.loader').hide();
    },250);
 }).catch((error)=> {
   console.log(error);
 });
 
 
 