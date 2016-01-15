ContactManager.module('ContactsApp.List.Templates', function(Templates, ContactManager, Backbone, Marrionette, $, _){
	
	Templates.contactView = 
		'<td><%- firstName %></td><td><%- lastName %></td>' +
		'<td>' +
		'<a href="#" class="btn btn-small js-show"> <i class="icon-eye-open"></i>Show</a>' +
		'<button class="btn btn-small js-delete">' + 
		'<i class="icon-remove"></i> Delete </button>' +
  	'</td>';

	Templates.contactList = 
	'<thead>' +
	'<tr>' +
	'<th>First Name</th>' +
	'<th>Last Name</th>' +
	'</tr>' +
	'</thead>' +
	'<tbody>' +
  '</tbody>';


});