export function fetchRepoList() {
  fetch('https://modules.lsposed.org/modules.json')
  
.then((res) =>{
  return res.json();
})
.then((data) =>{
 var totalRepo = data.length;
//  var totalRepo = 30;

jQuery(document).ready(function ($) {
  $('.fetchLoading').css("display","none")
  for(let i = 0; i < totalRepo; i++) {
 
var divList = document.createElement('div');
divList.classList.add('divList');
var repoNameh2 = document.createElement('h2');
repoNameh2.classList.add('repoName');
var li = document.createElement("li");
li.classList.add('list')
var repoName = JSON.stringify(data[i].name).toString().replace(/"/g, "");
repoName = repoName.substring(repoName.lastIndexOf(".") + 1);
var repoPackages = document.createTextNode(JSON.stringify(data[i].name).toString().replace(/"/g, ""));

var repoNameNode = document.createTextNode(repoName);
repoNameh2.appendChild(repoNameNode);
li.append(repoNameh2);
divList.append(li);
$('.ulList').append(divList);

var description = document.createElement("p");
description.classList.add('desc');
var repoDesc = JSON.stringify(data[i]. description).toString().replace(/"/g, "");
description.append(repoDesc);
li.append(description);


var listBtnDiv = document.createElement("div");
var closeBtn = document.createElement("div");
var infoBtn = document.createElement("div");
var githubBtn = document.createElement("div");
var downloadBtn = document.createElement("div");

listBtnDiv.classList.add("listBtnDiv");
closeBtn.classList.add("closeBtn", "closeBtn"+i, "btn");
infoBtn.classList.add("infoBtn", "infoBtn" + i,"btn");
githubBtn.classList.add("githubBtn","btn");
downloadBtn.classList.add("downBtn","btn");
closeBtn.insertAdjacentHTML("beforeend",'<i class="x icon"></i>');
infoBtn.insertAdjacentHTML("beforeend",'<i class="info icon"></i>');
githubBtn.insertAdjacentHTML("beforeend","<a class='btnLink' href='" + data[i].url + "'><i class='github icon'></i></a>");
downloadBtn.insertAdjacentHTML("beforeend","<a class='btnLink' href='" + data[i].releases[0].releaseAssets[0].downloadUrl + "'><i class='arrow down icon'></i>");

listBtnDiv.append(closeBtn);
listBtnDiv.append(infoBtn);
listBtnDiv.append(githubBtn);
listBtnDiv.append(downloadBtn);
li.append(listBtnDiv);



var infoMenu = document.createElement("div");
var pseudoInfo = document.createElement("div");
var infoScroll = document.createElement("div");
infoMenu.classList.add("infoMenu", "info" + i);
pseudoInfo.classList.add("pseudoInfo", "pseudo" + i);
li.append(pseudoInfo);
infoScroll.insertAdjacentHTML("beforeend","");
infoMenu.append(infoScroll);
li.append(infoMenu);

$('.infoBtn' + i).on("click", function() {
    $('.info'+i).html(data[i].readmeHTML);
    $('.infoBtn'+i).css("display","none")
    $('.closeBtn'+i).css("display","inline")
  })
$('.closeBtn' + i).on("click", function() {
    $('.info'+i).html("");
    $('.infoBtn'+i).css("display","inline")
    $('.closeBtn'+i).css("display","none")
  })
}

})


}).catch((error) => {
  jQuery(document).ready(function ($) {
  $(".list").html("Failed to fetch!")
  })
})
}