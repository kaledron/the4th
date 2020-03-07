document.getElementsByClassName('main')[0].style.display = 'none'; 
document.getElementsByClassName('main-m')[0].style.display = 'block'; 
if (window.innerWidth > 1024 && window.innerHeight > 599 && window.innerWidth > 1079 && window.innerHeight < 1800) {
    document.getElementsByClassName('main')[0].style.display = 'block'; 
    document.getElementsByClassName('main-m')[0].style.display = 'none'; 
}