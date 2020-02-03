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