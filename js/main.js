// window.scrollTo(0,0);

var width = window.innerWidth;
var height = window.innerHeight;
var img_path = 'img/1920/menu/';
var screen_type = 'fhd';
var menu = document.getElementsByClassName('menu')[0].children[0];

if (width >= 320 && width <= 1080) {
    document.getElementsByClassName('main')[0].style.display = 'block'; 
    document.getElementsByClassName('main-m')[0].style.display = 'none'; 
}

setImagePath();

var menuArr = {
    'fhd': {
        '1'    : [0,580],
        '2'    : [580,1250],
        '3'    : [1250,2350],
        '4'    : [2350,3450],
        '5and6': [3450,6000],
        '7and8': [6000,7250],
        '9'    : [7250,8350],
        '10'   : [8350,100000],
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
};

window.addEventListener('scroll', function() {
    // console.log(this.scrollY);
    adaptMenuNavBar(this.scrollY);
});

function adaptMenuNavBar(scrollY) {
    var menuEl = menuArr[screen_type];
    for( i in menuEl) {
        if (scrollY > menuEl[i][0] && scrollY < menuEl[i][1]) {
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
    } 
    
    if (width > 1200 && width < 1430 && height != 950 || width == 1366 && height == 768) {
        img_path = 'img/1366/menu/';
        screen_type = 'hd';
    } 
    if (width == 1440 && height == 900) {
        img_path = 'img/1366/menu/';
        screen_type = '1440';
    } 
    
    if (width == 1280 && height == 950) {
        img_path = 'img/1366/menu/';
        screen_type = '1280';
    } 
    
    if (width >= 1080 && width < 1200 && height > 2200) {
        img_path = 'img/m/2280/menu/';
        screen_type = 'm1080';
    }
    
    if (width >= 720 && width < 1080 && height > 650) {
        img_path = 'img/m/736/menu/';
        screen_type = 'm720';
    }
    
    if (width >= 414 && width < 720 && height > 730) {
        img_path = 'img/m/667/menu/';
        screen_type = 'm414';
    }
    
    if (width >= 360 && width < 414 && height > 630) {
        img_path = 'img/m/640/menu/';
        screen_type = 'm360';
    } 
    
    if (width < 360 && height > 500) {
        img_path = 'img/m/500/menu/';
        screen_type = 'm320';
    }
}
