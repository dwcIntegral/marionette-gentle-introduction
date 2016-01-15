ContactManager.module('ContactsApp.List', function(List, ContactManager, Templates, Backbone, Marrionette,$,_) {
	
	// -- Define ItemView, give it template
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: 'ContactManager.ContactsApp.List.Templates.contactView',

    events: {
      'click': 'highlightName',
      'click button.js-delete': 'deleteClicked'
    },

    highlightName: function(e) {
      e.preventDefault();
      this.$('td').toggleClass('warning');
    },

    deleteClicked: function(e) {
      e.preventDefault();
      this.trigger('contact:delete', this.model);
    },

    remove: function() {
      var self = this;
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  // -- Define Collection View, give it itemView
  List.Contacts = Marionette.CompositeView.extend({
    
    tagName: 'table',
    
    template: 'ContactManager.ContactsApp.List.Templates.contactList',
    
    className: 'table table-hover',
    
    childView: List.Contact,
    
    childViewContainer: 'tbody'

  });



});