ContactManager.module('ContactsApp.List', function(List, ContactManager, Templates, Backbone, Marrionette,$,_) {
	
	// -- Define ItemView, give it template
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: "ContactManager.ContactsApp.List.Templates.contactView"
  });

  // -- Define Collection View, give it itemView
  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    template: 'ContactManager.ContactsApp.List.Templates.contactList',
    className: 'table table-hover',
    childView: List.Contact,
    childViewContainer: "tbody"
  });

});