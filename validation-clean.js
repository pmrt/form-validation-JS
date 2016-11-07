class Validation {

	constructor(newOptions={}){

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

		for (let variable of this.fields) {
			window[variable + 'Input'] = document.getElementById(variable + '-input');
			window[variable + 'Validation'] = document.getElementById(variable + '-validation');
		}
	}

	loadEvents() {

		var that = this;

		for (let variable of this.fields) {
			window[variable + 'Input'].addEventListener(this.options.VALID_ON_EVENT, function(event){
				that.validField(event);
			});
		}
	}

	validField(event) {

		var fieldElement = event.currentTarget;
		var fieldName = fieldElement.name;
		var validationLb = window[fieldName + "Validation"];

		this.checkPattern(this.options.FIELDS[fieldName], fieldElement.value, validationLb);
	}

	changeStyle(element, style) {

		element.style.color = style.color;
		element.innerHTML = style.text;
	}

	checkPattern(pattern, value, validationLb) {

		this.changeStyle(validationLb, pattern.test(value) ? this.options.VALID_STYLE : this.options.INVALID_STYLE);
	}

}

window.onload = () => {
	validation = new Validation();
};
