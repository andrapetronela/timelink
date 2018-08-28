var about = document.getElementById('ab');
var description = document.getElementById('desc');
var p = document.getElementById('p');

description.addEventListener('mouseenter', function() {
    about.style.backgroundColor = '#eee';
    p.style.color = '#111';
})

description.addEventListener('mouseout', () => {
    about.style.backgroundColor = '#000';
    p.style.color = '#fff';
})