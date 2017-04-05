var Pxlml = Pxlml || {};

Pxlml.layout = (function($) 
{
	var init = function() {

		bindHeader();

		bindFooter();
	};

	var bindHeader = function() {
		var template;
		var context;
		var currentElement;
		var newNode;

		//set up header
		currentElement = document.querySelector("#s4-titlerow");

		//get the handlebar template
		template = Handlebars.templates["header"];
		context = {};

		//create a new node to hold template
		newNode = document.createElement("div");

		//set the html based on the Handlebar template
		newNode.innerHTML = template(context);

		//finally bind to DOM
		currentElement.appendChild(newNode.firstChild);


		currentElement = document.querySelector("#pm-site-logo");
		var topNav = document.querySelector("#siteIcon");
		currentElement.appendChild(topNav.cloneNode(true));

	};

	var bindFooter = function() {
		var template;
		var context;
		var currentElement;
		var newNode;

		//set up footer
		currentElement = document.querySelector("#s4-bodyContainer");

		//get the handlebar template
		template = Handlebars.templates["footer"];
		context = {};

		//create a new node to hold template
		newNode = document.createElement("div");

		//set the html based on the Handlebar template
		newNode.innerHTML = template(context);

		//finally bind to DOM
		currentElement.appendChild(newNode.firstChild);

		//now copy navigation from header to footer
		currentElement = document.querySelector("#footer-nav");
		var topNav = document.querySelector("#DeltaTopNavigation");
		currentElement.appendChild(topNav.cloneNode(true));
	};

	return {
        init: init
    };

})(jQuery);
