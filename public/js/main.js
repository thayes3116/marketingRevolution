$(document).ready(function() {
	console.log('reday')
	$("#host-video").hide()
	setTimeout(function(){
		$("#host-video").show()
	    $("#host-video").get(0).play();
	}, 5000);
});
