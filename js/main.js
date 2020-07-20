// window.scrollTo(0,0);

var width = window.innerWidth;
var height = window.innerHeight;
var img_path = 'img/1920/menu/';
var video_path = 'img/1366/';
var screen_type = 'fhd';
var menu = document.getElementsByClassName('menu')[0].children[0];

if (width >= 320 && width <= 1080) {
    var menu = document.getElementsByClassName('menu')[1].children[0];
    document.getElementsByClassName('main')[0].style.display = 'none'; 
    document.getElementsByClassName('main-m')[0].style.display = 'block'; 
} else {
    window.addEventListener('scroll', function() {
        // console.log(this.scrollY);
        adaptMenuNavBar(this.scrollY);
    });
}

setImagePath();
setVideoSource();
// menuM();
console.log(height);
console.log(video_path);

var menuArr = {
    'fhd': {
        '1'    : [0,580],
        '2'    : [580,1250],
        '3'    : [1250,2350],
        '4'    : [2350,3450],
        '5and6': [3450,5850],
        '7and8': [5850,7850],
        '9'    : [7850,9200],
        '10'   : [9200,100000],
    },
    'hd': {
        '1'    : [0,480],
        '2'    : [480,1050],
        '3'    : [1050,1750],
        '4'    : [1750,2600],
        '5and6': [2600,4000],
        '7and8': [4000,5600],
        '9'    : [5600,6300],
        '10'   : [6300,50000],
    },
    '1280': {
        '1'    : [0,420],
        '2'    : [420,1200],
        '3'    : [1200,2150],
        '4'    : [2150,3100],
        '5and6': [3100,4900],
        '7and8': [4900,6700],
        '9'    : [6700,7800],
        '10'   : [7800,50000],
    },
    '1440': {
        '1'    : [0,500],
        '2'    : [500,1150],
        '3'    : [1150,1950],
        '4'    : [1950,2800],
        '5and6': [2800,4600],
        '7and8': [4600,6400],
        '9'    : [6400,7500],
        '10'   : [7500,50000],
    },
    'm1080': {
        '1'    : [0,1920],
        '2'    : [1920,3840],
        '3'    : [3840,5760],
        '4'    : [5760,7680],
        '5and6': [7680,9840],
        '7and8': [9840,13680],
        '9'    : [13680,15600],
        '10'   : [15600,50000],
    },
};

function adaptMenuNavBar(scrollY) {
    var menuEl = menuArr[screen_type];
    for( i in menuEl) {
        if (scrollY >= menuEl[i][0] && scrollY < menuEl[i][1]) {
            setImageSource(i);
        }
    }
}

function setImageSource(page) {
    menu.children[0].srcset = img_path + 'menu-noframe' + page + '.png';
    menu.children[1].srcset = img_path + 'menu-noframe' + page + '.png';
    menu.children[2].src    = img_path + 'menu-noframe' + page + '.png';
}

function setImagePath() {
    if (width == 1920) {
        img_path = 'img/1920/menu/';
        screen_type = 'fhd';
        video_path = 'img/1920/';
    } 
    
    if (width > 1200 && width < 1430 && height != 950 || width == 1366 && height == 768) {
        img_path = 'img/1366/menu/';
        screen_type = 'hd';
        video_path = 'img/1366/';
    } 
    if (width == 1440 && height == 900) {
        img_path = 'img/1366/menu/';
        screen_type = '1440';
    } 
    
    if (width == 1280 && height == 950) {
        img_path = 'img/1366/menu/';
        screen_type = '1280';
    } 
    
    if (width >= 1080 && width < 1200 && height >=1920) {
        img_path = 'img/m/2280/menu/';
        screen_type = 'm1080';
        video_path = 'img/1080/';
    }
    
    if (width >= 720 && width < 1080 && height > 650) {
        img_path = 'img/m/736/menu/';
        screen_type = 'm720';
        video_path = 'img/640/';
    }
    
    if (width >= 414 && width < 720 && height > 730) {
        img_path = 'img/m/667/menu/';
        screen_type = 'm414';
        video_path = 'img/640/';
    }
    
    if (width >= 360 && width < 414 && height > 630) {
        img_path = 'img/m/640/menu/';
        screen_type = 'm360';
        video_path = 'img/640/';
    } 
    
    if (width < 360 && height > 500) {
        img_path = 'img/m/500/menu/';
        screen_type = 'm320';
        video_path = 'img/640/';
    }
}

function setVideoSource() {
    document.getElementById('page5-vid').src = video_path + 'page5.mp4';
    document.getElementById('page6-vid').src = video_path + 'page6.mp4';
    document.getElementById('page9-vid').src = video_path + 'page9.mp4';
}

function menuM() {
    if (document.getElementsByClassName('main-menu')[0].style.visibility == 'visible' ) {
        document.getElementsByClassName('main-menu')[0].style.visibility = 'hidden';
        document.getElementsByClassName('menu')[1].style.visibility = 'visible';
    } else {
        document.getElementsByClassName('main-menu')[0].style.visibility = 'visible';
        document.getElementsByClassName('menu')[1].style.visibility = 'hidden';
    }
}