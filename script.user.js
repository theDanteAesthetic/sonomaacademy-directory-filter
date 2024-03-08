// ==UserScript==
// @name        Directory Filter
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/5/2024, 3:21:36 PM
// ==/UserScript==

let searchStaff = function(){
    const getStaff = document.querySelectorAll('img.link-image:not(img.link-image.link-hover-image):not(img.link-image.link-nohover-image)');
    const staffFilter = getStaff.filter(filters);
    console.log(staffFilter);
}

let searchbox = function(){
    let directoryElement = document.querySelector("#content_1903384");
    let search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("placeholder", "seach staff");
    directoryElement.prepend(search);
    search.addEventListener("input", () => {console.log(search.value)});
}
let filters = function(a){
    return a[0];
}

let init = function(){
    let directoryElement = document.querySelector("#content_1903384");
    let p = document.createElement("p");
    p.innerHTML = "Hello Dingus!";
    p.style.color = "red";
    p.style.fontWeight = "bold";
    p.style.fontSize = "36px";
    directoryElement.prepend(p);
    //searchStaff();
    searchbox();
  }
  
  window.addEventListener("load", init);