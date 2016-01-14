ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, $, _) {
	
	List.Controller = {
		
		listContacts: function() {
			var contacts = ContactManager.request('contact:entities');

			var contactsListView = new List.Contacts({
				collection: contacts
			});

			return ContactManager.regions.main.show(contactsListView);
		}

	}

});