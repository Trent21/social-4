Template.sidebar.rendered = function(){
	
	$('#sidebar').first()
	  .sidebar('attach events', '.toggle.button')
	;
	$('.toggle.button')
	  .removeClass('disabled')
	;
}