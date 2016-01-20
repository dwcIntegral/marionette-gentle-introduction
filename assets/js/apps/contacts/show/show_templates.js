ContactManager.module('ContactsApp.Show.Templates', function(Templates, ContactManager, Backbone, Marrionette, $, _){
	
	Templates.contactView =
		'<h1>' +
			'<%- firstName %> <%- lastName %>' +
		'</h1>' +
		'<p>' +
			'<strong>Phone number:</strong>' +
			'<%- phoneNumber %>' + 
		'</p>';

});
