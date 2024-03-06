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
    let getStaff = document.querySelectorAll(".group");
    console.log(getStaff.length);
}
let init = function(){
    let directoryElement = document.querySelector("#content_1903384");
    let p = document.createElement("p");
    p.innerHTML = "Hello Dante!";
    p.style.color = "red";
    p.style.fontWeight = "bold";
    p.style.fontSize = "36px";
    directoryElement.prepend(p);
    searchStaff();
  }
  
  window.addEventListener("load", init);