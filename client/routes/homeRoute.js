//Global Routers
Router.configure({  
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.map(function() {
  	this.route('splash', {path: '/'});
  	this.route('messages', {path: '/messages'}); 
	this.route('events', {path: '/events'});
	this.route('home');
});