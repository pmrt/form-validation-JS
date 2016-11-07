const VALID_STYLE = { color:'green', text:' ¡Válido!' },
	  INVALID_STYLE = { color:'red', text:' ¡Inválido!' },
	  FIELDS = { 'user' : /^[a-z][a-z0-9]{4,11}$/i,
	  			'passwd' : /^\S{7,12}$/,
	  			'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
	  			'address' : /.*/,
	  			'country' : /^[a-z]*$/i,
	  			'zipcode' : /^[\d]*$/i,
	  			'email' : /^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/i,
	  			'sex' : /^[a-z]*$/i,
	  			'language' : /^[a-z\s]*$/i,
	  			'about': /.*/ },
	  VALID_ON_EVENT = "focusout";


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
	constructor(){
		/*
			Get the FIELDS JSON Keys into fields,
			load the Fields and the Events.
		*/
		this.fields = Object.keys(FIELDS);
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
			window[variable + 'Input'].addEventListener(VALID_ON_EVENT, function(event){
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

		this.checkPattern(FIELDS[fieldName], fieldElement.value, validationLb);
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
		this.changeStyle(validationLb, pattern.test(value) ? VALID_STYLE : INVALID_STYLE);
	}

}


window.onload = () => {
	/*
		Initializer.
	*/
	validation = new Validation();
};
