var divElement = document.getElementById('viz1556730343629');
var vizElement = divElement.getElementsByTagName('object')[0];
if ( divElement.offsetWidth > 800 ) { vizElement.style.width='550px';vizElement.style.height='477px';}
else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='550px';vizElement.style.height='477px';}
else { vizElement.style.width='550px';vizElement.style.height='477px';}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);