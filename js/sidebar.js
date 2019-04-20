var id = "test";

var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;

var layers = document.getElementById('side-bar');
layers.appendChild(link);