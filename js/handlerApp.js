function handerDevice(){


	var sUserAgent = navigator.userAgent;

	var mobileAgents = ['Android', 'iPhone', 'Symbian', 'Windows Phone', 'iPod', 'iPad', 'BlackBerry', 'Windows CE'];

	for (var i = 0; i < mobileAgents.length; i++) {
		
		if(sUserAgent.indexOf('iPhone') > -1){
			
			return 1;
		}

		if (sUserAgent.indexOf(mobileAgents[i]) > -1) {

			return true;

			

		}else{
//			alert(sUserAgent);
			return false;
		}
		

	}

	

}