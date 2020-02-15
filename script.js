function displaymenu(){
    var x = document.getElementById("ongletsbox");
    if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
    }
}
// jQuery('.flechegoup').click(function(event) {
//   // Un clic provoque le retour en haut animé.
//   event.preventDefault();
//   jQuery('html, body').animate({scrollTop: 0}, duration);
//   return false;
// })
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function allmycontent(){
  var g = document.getElementsByClassName('graph');
  for (var i = 0; i < g.length; i++) {
    g[i].style.display = 'block';
  }
  var w = document.getElementsByClassName('web');
  for (var i = 0; i < w.length; i++) {
    w[i].style.display = 'block';
  }
  var v = document.getElementsByClassName('video');
  for (var i = 0; i < v.length; i++) {
    v[i].style.display = 'block';
  }
  var p = document.getElementsByClassName('photo');
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = 'block';
  }
  var carreall = document.getElementsByClassName('carreall');
  carreall[0].style.display = 'block';
  var carreweb = document.getElementsByClassName('carreweb');
  carreweb[0].style.display = 'none';
  var carregraph = document.getElementsByClassName('carregraph');
  carregraph[0].style.display = 'none';
  var carrephoto = document.getElementsByClassName('carrephoto');
  carrephoto[0].style.display = 'none';
  var carrevideo = document.getElementsByClassName('carrevideo');
  carrevideo[0].style.display = 'none';

}
function graphisme(){
  var g = document.getElementsByClassName('graph');
  for (var i = 0; i < g.length; i++) {
    g[i].style.display = 'block';
  }
  var w = document.getElementsByClassName('web');
  for (var i = 0; i < w.length; i++) {
    w[i].style.display = 'none';
  }
  var v = document.getElementsByClassName('video');
  for (var i = 0; i < v.length; i++) {
    v[i].style.display = 'none';
  }
  var p = document.getElementsByClassName('photo');
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = 'none';
  }
  var carreall = document.getElementsByClassName('carreall');
  carreall[0].style.display = 'none';
  var carreweb = document.getElementsByClassName('carreweb');
  carreweb[0].style.display = 'none';
  var carregraph = document.getElementsByClassName('carregraph');
  carregraph[0].style.display = 'block';
  var carrephoto = document.getElementsByClassName('carrephoto');
  carrephoto[0].style.display = 'none';
  var carrevideo = document.getElementsByClassName('carrevideo');
  carrevideo[0].style.display = 'none';
}
function webdesign(){
  var g = document.getElementsByClassName('graph');
  for (var i = 0; i < g.length; i++) {
    g[i].style.display = 'none';
  }
  var w = document.getElementsByClassName('web');
  for (var i = 0; i < w.length; i++) {
    w[i].style.display = 'block';
  }
  var v = document.getElementsByClassName('video');
  for (var i = 0; i < v.length; i++) {
    v[i].style.display = 'none';
  }
  var p = document.getElementsByClassName('photo');
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = 'none';
  }
  var carreall = document.getElementsByClassName('carreall');
  carreall[0].style.display = 'none';
  var carreweb = document.getElementsByClassName('carreweb');
  carreweb[0].style.display = 'block';
  var carregraph = document.getElementsByClassName('carregraph');
  carregraph[0].style.display = 'none';
  var carrephoto = document.getElementsByClassName('carrephoto');
  carrephoto[0].style.display = 'none';
  var carrevideo = document.getElementsByClassName('carrevideo');
  carrevideo[0].style.display = 'none';
}
function video(){
  var g = document.getElementsByClassName('graph');
  for (var i = 0; i < g.length; i++) {
    g[i].style.display = 'none';
  }
  var w = document.getElementsByClassName('web');
  for (var i = 0; i < w.length; i++) {
    w[i].style.display = 'none';
  }
  var v = document.getElementsByClassName('video');
  for (var i = 0; i < v.length; i++) {
    v[i].style.display = 'block';
  }
  var p = document.getElementsByClassName('photo');
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = 'none';
  }
  var carreall = document.getElementsByClassName('carreall');
  carreall[0].style.display = 'none';
  var carreweb = document.getElementsByClassName('carreweb');
  carreweb[0].style.display = 'none';
  var carregraph = document.getElementsByClassName('carregraph');
  carregraph[0].style.display = 'none';
  var carrephoto = document.getElementsByClassName('carrephoto');
  carrephoto[0].style.display = 'none';
  var carrevideo = document.getElementsByClassName('carrevideo');
  carrevideo[0].style.display = 'block';
}
function photo(){
  var g = document.getElementsByClassName('graph');
  for (var i = 0; i < g.length; i++) {
    g[i].style.display = 'none';
  }
  var w = document.getElementsByClassName('web');
  for (var i = 0; i < w.length; i++) {
    w[i].style.display = 'none';
  }
  var v = document.getElementsByClassName('video');
  for (var i = 0; i < v.length; i++) {
    v[i].style.display = 'none';
  }
  var p = document.getElementsByClassName('photo');
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = 'block';
  }
  var carreall = document.getElementsByClassName('carreall');
  carreall[0].style.display = 'none';
  var carreweb = document.getElementsByClassName('carreweb');
  carreweb[0].style.display = 'none';
  var carregraph = document.getElementsByClassName('carregraph');
  carregraph[0].style.display = 'none';
  var carrephoto = document.getElementsByClassName('carrephoto');
  carrephoto[0].style.display = 'block';
  var carrevideo = document.getElementsByClassName('carrevideo');
  carrevideo[0].style.display = 'none';
}

function hoverOn(number) {
  var x = document.getElementsByClassName('titreartvignettes');
  x[number].style.opacity = "1";
  var x = document.getElementsByClassName('vignetteart');
  x[number].style.transform = "scale(1.10)";
  x[number].style.filter = "brightness(20%)";
  x[number].style.webkitFilter = "brightness(20%)";
}

function hoverOff(number) {
  var x = document.getElementsByClassName('titreartvignettes');
  x[number].style.opacity = "0";
  var x = document.getElementsByClassName('vignetteart');
  x[number].style.transform = "scale(1)";
  x[number].style.filter = "brightness(100%)";
  x[number].style.webkitFilter = "brightness(100%)";
}
var delayInMilliseconds = 1; //1 second


function view(link) {
  var mg = document.getElementById('vertimgzm');
  mg.style.display = 'flex';
  var mg = document.getElementById('vertimgzm');
  mg.style.display = 'flex';
  // var mg = document.getElementById('basimgzm');
  // mg.style.display = 'block';
  var c = document.getElementsByClassName('imagezoomee');
  var aimg =document.getElementById('acontentimgzoom');
  c[0].style.display = 'block';
  c[0].src = './photos/fav/' + link;
  if( screen.width <= 1024 || window.innerHeight <= 1024){
    console.log("cc");
    var monImage = new Image();
    monImage.onload
    monImage.src = document.getElementById("imagezoomee").src;
    var heightimgz = monImage.height;
    var widthimgz = monImage.width;
    console.log('h ' + heightimgz);
    console.log('w ' + widthimgz);
    if(heightimgz > widthimgz){
      c[0].style.height = "60vh";
      c[0].style.marginTop = "auto";
      c[0].style.marginBottom = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      var mg = document.getElementById('margeimgd');
      mg.style.height = "100vh";
      var mg = document.getElementById('margeimgg');
      mg.style.height = "100vh";
      console.log('portrait');
    }
    if(heightimgz < widthimgz){
      c[0].style.width = "70vw";
      c[0].style.marginTop = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      c[0].style.marginBottom = "auto";
      var mg = document.getElementById('margeimgd');
      mg.style.height = "100vh";
      var mg = document.getElementById('margeimgg');
      mg.style.height = "100vh";
      console.log('paysage');
    }
    console.log("petit");
  }
  else if( screen.width >= 1025 && window.innerHeight < window.innerWidth ){
    c[0].style.height = "70vh";
    c[0].style.marginTop = "auto";
    c[0].style.marginLeft = "auto";
    c[0].style.marginRight = "auto";
    var mg = document.getElementById('margeimgd');
    mg.style.height = "100vh";
    var mg = document.getElementById('margeimgg');
    mg.style.height = "100vh";
    console.log("grand");
  }
  var x = document.getElementById('imgaff');
  x.style.display = 'flex';
  var g = document.querySelector('html');
  g.style.overflow = 'hidden';
  // var c = document.getElementById('imagezoomee');
  // c.style.display = 'block';
  var e = document.getElementById('margeimgg');
  e.style.display = 'block';
  var e = document.getElementById('margeimgd');
  e.style.display = 'block';
}
function prev(){
  var actlink = document.getElementById("imagezoomee").src;
  c = document.getElementsByClassName('imagezoomee');
  var actlink = actlink.split('').reverse().join('');
  var actlink = actlink.split('/');
  var actlink = actlink[0];
  var actlink = actlink.split('').reverse().join('');
  var num = actlink.split('.');
  var num = num[0];
  var num = num - 1;
  if (num > 0) {
    c[0].src = './photos/fav/' + num + '.jpg';
  }
  var monImage = new Image();
  monImage.onload
  monImage.src = './photos/fav/' + num + '.jpg';
  if( screen.width <= 1024 || window.innerHeight <= 1024){
    var heightimgz = monImage.height;
    var widthimgz = monImage.width;
    console.log('h ' + heightimgz);
    console.log('w ' + widthimgz);
    c = document.getElementsByClassName('imagezoomee');

    if(heightimgz > widthimgz){
      c[0].style.height = "60vh";
      c[0].style.width = "auto";
      c[0].style.marginTop = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      var mg = document.getElementById('margeimgd');
      var mg = document.getElementById('margeimgg');
      console.log('portrait');
    }
    if(heightimgz < widthimgz){
      c[0].style.width = "70vw";
      c[0].style.height = "auto";
      c[0].style.marginTop = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      c[0].style.marginBottom = "auto";
      var mg = document.getElementById('contentimgzoom');
      mg.style.marginRight = "15vw";
      mg.style.marginLeft = "15vw";
      console.log('paysage');
    }
  }
  else if( screen.width >= 1025 && window.innerHeight < window.innerWidth ){
    c[0].style.height = "80vh";
    c[0].style.marginTop = "10vh";
    c[0].style.marginLeft = "auto";
    c[0].style.marginRight = "auto";
    console.log("grand");
  }
}
function next(max){
  var actlink = document.getElementById("imagezoomee").src;
  c = document.getElementsByClassName('imagezoomee');
  var actlink = actlink.split('').reverse().join('');
  var actlink = actlink.split('/');
  var actlink = actlink[0];
  var actlink = actlink.split('').reverse().join('');
  var num = actlink.split('.');
  var num = num[0];
  var num = num - -1;
  if (num <= max) {
    c[0].src = './photos/fav/' + num + '.jpg';
  }
  if( screen.width <= 1024 || window.innerHeight <= 1024){
    var monImage = new Image();
    monImage.onload
    monImage.src = './photos/fav/' + num + '.jpg';
    var heightimgz = monImage.height;
    var widthimgz = monImage.width;
    console.log('h ' + heightimgz);
    console.log('w ' + widthimgz);
    c = document.getElementsByClassName('imagezoomee');
    if(heightimgz > widthimgz){
      c[0].style.height = "60vh";
      c[0].style.width = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      console.log('portrait');
    }
    if(heightimgz < widthimgz){
      c[0].style.width = "70vw";
      c[0].style.height = "auto";
      c[0].style.marginLeft = "auto";
      c[0].style.marginRight = "auto";
      c[0].style.marginBottom = "auto";
      var m = document.getElementById('margeimgg');
      m.style.width = "15vw";
      var m = document.getElementById('margeimgd');
      m.style.width = "15vw";
      var mg = document.getElementById('contentimgzoom');
      mg.style.marginRight = "15vw";
      mg.style.marginLeft = "15vw";
      var mg = document.getElementById('contentimgzoom');
      mg.style.marginRight = "15vw";
      mg.style.marginLeft = "15vw";
      console.log('paysage');
    }
  }
  else if( screen.width >= 1025 && window.innerHeight < window.innerWidth ){
    c[0].style.height = "70vh";
    c[0].style.marginTop = "10vh";
    c[0].style.marginLeft = "auto";
    c[0].style.marginRight = "auto";
    console.log("grand");
  }
}