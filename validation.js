class Validation {
/*
	FORM VALIDATION Class
	AUTHOR : Pedro J. Martínez Martínez

	HOW TO :

		- Add the fields to the HTML with the attrib id
		'<field>-input', and the attrib name 'field'.
		Then add a label with the attrib id : '<field>-validation'.

		Where field it's your new field to validate, and the label
		validation purpose it's to show the results.

		E.g.:

		<label for="name">Name: </label>
		<input name="name" type="text" id="name-input">
		<label id="name-validation" for="name"></label><br><br>

		- Next, add the field to the constant FIELDS with the
		regular expression to validate. Regular expression
		without quotes!

		E.g.:

		'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i


	COMPATIBILITY :

	- Object.keys(FIELDS) which compatibility is limited
	to:
	 	 Internet Explorer => 9 or greater
	 	 Chrome => 5 or greater
	 	 Opera => 12 or greater
	 	 Safari => 5 or greater
	 	 Firefox => 4.0(2.0) or greater

	- ES6 new Javascript Class syntax, which may be limited
	in someway for old browsers.
	- ES6 new conditional (ternary) operator syntax

	You can recode this three to old syntax if you want.
*/
	constructor(newOptions={}){
		/*
			Get the FIELDS JSON Keys into fields,
			load the Fields and the Events.

			Also, I declare options inside
			the constructor setting default options.
		*/
		this.options = {
				  VALID_STYLE : newOptions.VALID_STYLE || { color:'green', text:' ¡Válido!' },
				  INVALID_STYLE : newOptions.INVALID_STYLE || { color:'red', text:' ¡Inválido!' },
				  FIELDS : newOptions.FIELDS || { 'user' : /^[a-z][a-z0-9]{4,11}$/i,
				  			'passwd' : /^\S{7,12}$/,
				  			'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
				  			'address' : /.*/,
				  			'country' : /^[a-z]*$/i,
				  			'zipcode' : /^[\d]*$/i,
				  			'email' : /^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/i,
				  			'sex' : /^[a-z]*$/i,
				  			'language' : /^[a-z\s]*$/i,
				  			'about': /.*/ },
				  VALID_ON_EVENT : newOptions.VALID_ON_EVENT || "focusout"
			}

		this.fields = Object.keys(this.options.FIELDS);
		this.loadFields();
		this.loadEvents();
	}

	loadFields() {
		/*
			Loads the FIELDS keys as global element
			variables.
		*/
		for (let variable of this.fields) {
			window[variable + 'Input'] = document.getElementById(variable + '-input');
			window[variable + 'Validation'] = document.getElementById(variable + '-validation');
		}
	}

	loadEvents() {
		/*
			Loads the events for the given fields.
		*/
		var that = this;

		for (let variable of this.fields) {
			window[variable + 'Input'].addEventListener(this.options.VALID_ON_EVENT, function(event){
				that.validField(event);
			});
		}
	}

	validField(event) {
		/*
			Valid the element which just raised the
			event.
		*/
		var fieldElement = event.currentTarget;
		var fieldName = fieldElement.name;
		var validationLb = window[fieldName + "Validation"];

		this.checkPattern(this.options.FIELDS[fieldName], fieldElement.value, validationLb);
	}

	changeStyle(element, style) {
		/*
			Change the style for
			the given element.
		*/
		element.style.color = style.color;
		element.innerHTML = style.text;
	}

	checkPattern(pattern, value, validationLb) {
		/*
			Check the pattern for the passed value,
			show the results through validationLabel
			element.
		*/
		this.changeStyle(validationLb, pattern.test(value) ? this.options.VALID_STYLE : this.options.INVALID_STYLE);
	}

}

window.onload = () => {
		//	Initializer.
		//
		//	You can modify the options passing 'em
		//	to the class Validation like this:
		//
		//	options = { VALID_STYLE: { color: 'blue', text: 'This is a valid test'}
		//		  }
		//
		//	All parameters are optional see the Validation Class
		//	for the defaults parameters, keep in mind that in this version
		//	the parameters are optional but the sub-parameters not. So,
		//	that said, you can't set the FIELDS option with just the new
		//	fields, you need to set all the subparameters.
		//
		//	Eg.
		//
		// - This is ok:
		//
		//	myNewoptions = {
		//
		//  FIELDS : {
		//				'user' : /^[a-z][a-z0-9]{4,11}$/i,
		//  			'passwd' : /^\S{7,12}$/,
		//  			'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
		//  			'address' : /.*/,
		//  			'country' : /^[a-z]*$/i,
		//  			'zipcode' : /^[\d]*$/i,
		//  			'email' : /^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/i,
		//  			'sex' : /^[a-z]*$/i,
		//  			'language' : /^[a-z\s]*$/i,
		//  			'about': /.*/,
		//				'myuser' : /^[a-z][a-z0-9]{4,11}$/i,
 		//				'nickname': /^[a-z][a-z0-9]{4,11}$/i
		//			 }
		//	}
		//
 		// - This is not:
 		//
 		// myNewoptions = {
 		//
 		// FIELDS : {
 		//			'myuser' : /^[a-z][a-z0-9]{4,11}$/i,
 		//			'nickname': /^[a-z][a-z0-9]{4,11}$/i
 		//			}
 		//	}
 		//
 		// Then, just instance it like this
 		//
 		//	myValidation = new Validation(myNewOptions);
 		//

	validation = new Validation();
};
