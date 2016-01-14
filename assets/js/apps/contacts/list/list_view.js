ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marrionette,$,_) {
	
	// -- Define ItemView, give it template
  List.Contact = Marionette.ItemView.extend({
    tagName: 'li',
    template: "#contact-list-item"
  });

  // -- Define Collection View, give it itemView
  List.Contacts = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: List.Contact
  });

});