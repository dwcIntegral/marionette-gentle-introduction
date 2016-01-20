ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){

	Show.Contact = Marionette.ItemView.extend({
		template: 'ContactManager.ContactsApp.Show.Templates.contactView'
	});

});