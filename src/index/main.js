var INIT_FUNC = [];
	
function addInitEvent(func){
	if(func !== undefined)
		INIT_FUNC.push(func);
}

if(jQuery)
	jQuery(document).ready(function(e){
		//document.documentElement.requestFullscreen();
		$.each(INIT_FUNC, function(i, o){
			if(o != null){
				try {
					o(e);
				} catch(err) {
					console.warn(err);
				}
			}
		});
	});