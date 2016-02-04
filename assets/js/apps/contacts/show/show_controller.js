ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _){

	Show.Controller = {
		showContact: function(id){
			var contacts = ContactManager.request("contact:entities");
			var model = contacts.get(id);
			// Show.Contact (ItemView)
			if(model !== undefined) {
				var contactView = new Show.Contact({
					model: model
				});
			} else {
				contactView = new Show.MissingContact();
			}

			ContactManager.regions.main.show(contactView);
		}
	}
});


