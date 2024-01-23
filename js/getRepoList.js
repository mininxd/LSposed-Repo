  //Load saved list
let totalRepo = parseInt(
    localStorage.getItem('repoTotalItem'));
//console.log(totalRepo);


var sortRepo = localStorage.getItem('sortName');
export function fetchRepoList() {
   //Get List of Repo
fetch('https://api.github.com/users/androidmodloader/repos?per_page=' + 
totalRepo + 
'&sort=' + 
sortRepo, {
  method: 'GET',
  headers: {
    Accept: 'Application/JSON'
  }
}).then((res) => {
  return res.json();
}).then((data) => {
  console.log(data);
  
jQuery(document).ready(function ($) {
  
  for(var i = 0; i < totalRepo; i++) {
   var repoNameList = JSON.stringify
     (data[i].name)
     .toString()
     .replace(/"/g,"");
 // console.log(repoNameList);
  var repoUrl = JSON.stringify
     (data[i].html_url)
     .toString()
     .replace(/"/g,"");
// console.log(repoUrl);
  var repoDesc = JSON.stringify
     (data[i].description)
     .toString()
     .replace(/"/g,"");
// console.log(repoDesc);
  
var li = document.createElement("li");
var textNode = document.createTextNode(repoNameList);
li.appendChild(textNode);
li.classList.add('amlList');
li.insertAdjacentHTML('beforeend',
'<br><a href="' +
repoUrl +
'"><span class="amlListUrlDesc">'+repoDesc+'<br>'+repoUrl+'</span></a>');
$('.amlListEl').append(li);


}
});
}).catch((error)=> {
  console.log(error);
});
}


$('.sName').click(function() {
  $('.amlListEl').html("");
   sortRepo = 'name';
   fetchRepoList();
   localStorage.setItem('sortName', 'name');
 });
$('.sUpdated').click(function() {
  $('.amlListEl').html("");
   sortRepo = 'updated';
   fetchRepoList();
   localStorage.setItem('sortName', 'updated');
 });
$('.sStar').click(function() {
  $('.amlListEl').html("");
   sortRepo = 'star';
   fetchRepoList();
   localStorage.setItem('sortName', 'star');
 });
$('.sFork').click(function() {
  $('.amlListEl').html("");
   sortRepo = 'fork';
   fetchRepoList();
   localStorage.setItem('sortName', 'fork');
 });