// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'd3v0p5',
	'brand': 'd3v0p5',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'port' : 8000 ,

// Could allso use keystone.set( )
// enabbles cool features
	'wysiwyg skin': 'lightgray',
	'wysiwyg additional buttons': 'styleselect fontsizeselect blockquote formats ,searchreplace visualchars,'
	 + ' charmap ltr rtl pagebreak paste, forecolor backcolor,'
	 + ' emoticons media, preview print ',
	'wysiwyg additional plugins': 'example, table, advlist, anchor,'
	 + ' autolink, autosave, bbcode, charmap, contextmenu, '
	 + ' directionality, emoticons, fullpage, hr, media, pagebreak,'
	 + ' paste, preview, print, searchreplace, textcolor,'
	 + ' visualblocks, visualchars, wordcount',

});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7',
		},
	},
});

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
