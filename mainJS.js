
// ссылка на главное меню
var logo = document.getElementsByClassName('head-logo')[0];
            $('.head-logo').click(function(){
                window.location = "../index.html"
            })
            $('.head-logo').hover(function(){
                logo.style.cursor = "pointer";
            })

// Подключение и настройка слайдера
    $(document).ready(function(){
  $('.bxSlider').bxSlider({
      hideControlOnEnd: true,
      mode: 'vertical',
      speed: 1200,
      touchEnabled: true,
      pager: false,
      auto: true,
      autoHover: true,
      pause: 3000
  });
    });
      
// Подключение XML
if (window.XMLHttpRequest)
  { // для IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();}
  else
  { // для IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
    xmlhttp.open("GET","xml/cart1.xml",false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
var name = document.getElementsByClassName("name");
for(var i = 0; i < name.length; i++ ){
    document.getElementsByClassName("name")[i].innerHTML = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
    document.getElementsByClassName("characteristic")[i].innerHTML = xmlDoc.getElementsByTagName("characteristic")[i].childNodes[0].nodeValue;
    document.getElementsByClassName("cena")[i].innerHTML = xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue;
}