Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId){
	var template; 

	if(templateId.charAt( 0 ) == "#"){
	
	// If we request the template by providing a jQuery selector, // behave as usual
	
	template = Backbone.Marionette.$(templateId).html();
	 // Otherwise, load the template from our special sub-module.
	 // We need to evaluate the argument to obtain the template string,
	 // as the argument is passed as a string to be used as a
	
	} else {
		 // storage key in Marionette's template caching mechanism
    template = eval(templateId)
  }

	if (!template || template.length === 0){
		errorMessage = "Could not find template: '" + templateId + "'";
		throwError(errorMessage, "NoTemplateError");
	}

	return template; 
}
