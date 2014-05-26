//Global Routers
Router.configure({  
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});


// var HomeController = RouteController.extend({
//     template: 'home'
// });

// Router.map(function () {
//     this.route('home', {
//         path :  '/',
//         controller :  HomeController
//     });
//     this.route('messages');
// 	this.route('events');
// 	this.route('splash', {path: '/'})
// });

Router.map(function() {
  	this.route('splash', {path: '/'})
  	this.route('messages');
	this.route('events');
	this.route('home');
});