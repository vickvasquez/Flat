(function(){
	var reloj=document.getElementsByClassName('hora');
	(function(){
		var hora = new Date();
		var hora_actual = hora.getHours()+":"+hora.getMinutes();
		reloj.innerHTML=hora_actual;
	})()
})();