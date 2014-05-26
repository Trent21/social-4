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
	this.route('posts', { 
	  path: '/posts/:_id',
	  waitOn: function() { return Meteor.subscribe('post', this.params._id)},
	  data: function() { return Posts.findOne(this.params._id); }
	});
});