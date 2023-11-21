var h1 = document.getElementById('h1');
h1.addEventListener('click', ()=>{
    h1.style.color = '#ff5959';
})
var p = document.getElementById('p')
p.onmousemove = function fun(){
    p.style.fontSize = '45px';
    p.style.color = '#ff5959';
}
p.onmouseout = function fun2(){
    p.style.color = 'black';
}