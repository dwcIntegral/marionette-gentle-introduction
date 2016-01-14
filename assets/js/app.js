var ContactManager = new Marionette.Application();

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