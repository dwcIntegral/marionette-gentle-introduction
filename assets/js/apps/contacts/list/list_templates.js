ContactManager.module('ContactsApp.List.Templates', function(Templates, ContactManager, Backbone, Marrionette, $, _){
	Templates.contactView = 
		'<td><%- firstName %></td><td><%- lastName %></td>'

	Templates.contactList = 
	'<thead>' +
	'<tr><th>First Name</th><th>Last Name</th></tr> </thead>' +
	'<tbody>' +
  '</tbody>'

});