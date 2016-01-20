ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, $, _) {
	
	List.Controller = {
		
		listContacts: function() {
			var contacts = ContactManager.request('contact:entities');

			var contactsListView = new List.Contacts({
				collection: contacts
			});

			contactsListView.on("childview:contact:show", function(childview, model) {
				ContactManager.ContactsApp.Show.Controller.showContact(model);
			});

			contactsListView.on('childview:contact:delete', function(childView, model) {
				contacts.remove(model)
			});

			ContactManager.regions.main.show(contactsListView);
		},



	}

});