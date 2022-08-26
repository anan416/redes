var instagram_var = document.querySelector(".instagram");
var wattpad_var = document.querySelector(".wattpad");
var twitter_var = document.querySelector(".twitter");

var link_instagram1 = document.querySelector(".linkInstagram1");
var link_instagram2 = document.querySelector(".linkInstagram2");
var link_instagram3 = document.querySelector(".linkInstagram3");
var link_wattpad = document.querySelector(".linkWattpad");
var link_twitter = document.querySelector(".linkTwitter");

var cerrar1 = document.querySelector(".insta");
var cerrar2 = document.querySelector(".watt");
var cerrar3 = document.querySelector(".twi");


function instagram(){
    instagram_var.style.animation = "agrandarse1 2s forwards";
    link_instagram1.style.display = "block";
    link_instagram2.style.display = "block";
    link_instagram3.style.display = "block";
    cerrar1.style.opacity = "1";
    cerrar1.style.cursor = "pointer";
    instagram_var.style.cursor = "default";   
}

function wattpad(){
    wattpad_var.style.animation = "agrandarse2 2s forwards";
    link_wattpad.style.display = "block";
    cerrar2.style.opacity = "1";
    cerrar2.style.cursor = "pointer";
    wattpad_var.style.cursor = "default";   
}

function twitter(){
    twitter_var.style.animation = "agrandarse3 2s forwards";
    link_twitter.style.display = "block";
    cerrar2.style.opacity = "1";
    cerrar2.style.cursor = "pointer";
    wattpad_var.style.cursor = "default";   
}


