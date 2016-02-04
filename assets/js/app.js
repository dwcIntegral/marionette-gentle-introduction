var ContactManager = new Marionette.Application();

ContactManager.navigate = function(route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options);
}

ContactManager.getCurrentRoute = function() {
	return Backbone.history.fragment;
}

// -- Define Region Manager, give el and regions
ContactManager.on("before:start", function(){
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",

    regions: {
      main: "#main-region"
    }
  });

  ContactManager.regions = new RegionContainer();
});

// -- Set On Start
ContactManager.on("start", function() {
	if(Backbone.history){
		Backbone.history.start();

		if(this.getCurrentRoute() === ""){
			ContactManager.trigger('contacts:list');
		}

		if(Backbone.history.fragment === ""){
			Backbone.history.navigate('contacts');
			ContactManager.ContactsApp.List.Controller.listContacts();
		}

	}
});