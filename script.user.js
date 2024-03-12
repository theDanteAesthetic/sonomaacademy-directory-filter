// ==UserScript==
// @name        Directory Filter
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/5/2024, 3:21:36 PM
// ==/UserScript==

let search;
let directoryElement = document.querySelector("#content_1903384");
let searchStaff = function(){
    let getStaff = document.querySelectorAll('img.link-image:not(img.link-image.link-nohover-image, img.link-image.link-hover-image)');
    return getStaff;
}
let searchbox = function(){
    search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("placeholder", "Search Staff");
    directoryElement.prepend(search);
    search.addEventListener("input",() => {
        filterStaff(searchStaff())});
}
let filterStaff = function(array){
    let returnStaff = [];
    let staffName;
    for(let i = 0; i<array.length;i++){
        array[i].parentNode.parentNode.style.display="grid";
        array[i].parentNode.parentNode.parentNode.style.gridTemplateColumns = "20% 20% 20% 20% 20%";
    }
    for(let i = 0; i < array.length; i++){
        staffName = array[i].getAttribute('alt').toLowerCase();
        let searchValue = search.value.toLowerCase();
        if(staffName.includes(searchValue)){
            returnStaff.push(array[i]);
        } else {
            console.log(array[i]);
            array[i].parentNode.parentNode.style.display="none";
        }
    }
    return returnStaff;
}

let init = function(){
    searchbox();
    filterStaff(searchStaff());
}

window.addEventListener("load", init);