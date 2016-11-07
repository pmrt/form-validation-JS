# form-validation-JS
Form validation written in Javascript <br>
VERSION: 1.0

# FORM VALIDATION Class
###### AUTHOR : Pedro J. Martínez Martínez

# HOW TO
1. Add the fields to the HTML with the attrib ```id="<field>-input"```, 
	and the attrib ```name="field"```. Then add a label with 
	the attrib id : ```<field>-validation```. Where ```field``` is 
	the name of your new field to validate.
	
	That validation label, which you just added, 
	is needed in order to properly show the results.
	
  An example:
  
```html
	<label for="name">Name: </label>
	<input name="name" type="text" id="name-input"> <!-- Required tag-->
	<label id="name-validation" for="name"></label> <!-- Required tag-->
	
	<!-- Required HTML attribs: 
		- name="<field>" inside the element with the field.
		- id="<field>-input" inside the element with the field.
		- id="<field>-validation" inside the label.
		
		Replace <field> with the desired name.
	-->
```

  Another one:

```html
	<label for="cif">CIF: </label>
	<input name="cif" type="text" id="cif-input">
	<label id="cif-validation" for="cif"></label>
```


2. Next, add the fields to the FIELDS of options with the
	regular expression to validate. Regular expression
	without quotes! [See Options reference below](#options-reference).
	
	Examples:
  
```javascript
	myNewOptions = { 	
						FIELDS {
									'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i
								}
				   }
```

or

```javascript
	myNewOptions = { 	
						FIELDS {
									'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
									'cif' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i
								},
						VALID_STYLE : { color: 'purple', text: 'Valid !' }
				   }
```

3. That's it, just instance the class Validation passing it the custom
options you just built:

```javascript
	myValidation = new Validation(myNewOptions);
```

### COMPATIBILITY :

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


### OPTIONS :

- You can modify the options:

```javascript
	
	MyOptions = { 
			VALID_STYLE: { color: 'blue', text: 'This is a valid test'} 
			}
```

- Then, you can instance the class with the new options:

```javascript
	var myValidation = new Validation(MyOptions);
```

All parameters are optional [See Options reference below](#options-reference) for the defaults parameters.

For example

- This is ok:

```javascript
	myNewoptions = {

  FIELDS : {
			'user' : /^[a-z][a-z0-9]{4,11}$/i,
  			'passwd' : /^\S{7,12}$/,
  			'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
  			'address' : /.*/,
  			'country' : /^[a-z]*$/i,
  			'zipcode' : /^[\d]*$/i,
  			'email' : /^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/i,
  			'sex' : /^[a-z]*$/i,
  			'language' : /^[a-z\s]*$/i,
  			'about': /.*/,
			'myuser' : /^[a-z][a-z0-9]{4,11}$/i,
 			'nickname': /^[a-z][a-z0-9]{4,11}$/i
			 }
	}
	
	myValidation = new Validation(myNewOptions);
```

- This is great too (if you want only two new fields):

```javascript
	myNewOptions = {

	 FIELDS : {
			'myuser' : /^[a-z][a-z0-9]{4,11}$/i,
			'nickname': /^[a-z][a-z0-9]{4,11}$/i
			}
	}
	
	myValidation = new Validation(myNewOptions);
```

# Options Reference

- __```VALID_STYLE : { color: '<color>', text: '<text>' }```__ Sets the style when the regular expression matches with its field value.
- __```INVALID_STYLE: { color: '<color>', text: '<text>'}```__ Sets the style when the regular expression doesn't match with its field value.
- __```FIELDS : { <field-name with no suffix> : <regular-expression-without-quotes> }```__ Sets the fields with its regular expressions, ```field-name``` must match with the field "id" html attrib (but plainly the name, with no suffix '-input'!) then you need the labelValidation –which will show the results– to have the same id with the suffix "-validation". Also, don't forget the "name" attrib in the html! [See How to above](#how-to).
- __```VALID_ON_EVENT : <event without the 'on'>```__ You can use it in order to set the event wich will raise the validation, by default it's focusout. So it will check if the regular expression matches when the element loses the focus. Similarly, you could set it to 'keyup' in order to check if the regular expression matches every time you release a key inside the element.


### Default Options:
```javascript
		options = {
				  VALID_STYLE : { color:'green', text:' ¡Válido!' },
				  INVALID_STYLE : { color:'red', text:' ¡Inválido!' },
				  FIELDS : { 'user' : /^[a-z][a-z0-9]{4,11}$/i,
				  			'passwd' : /^\S{7,12}$/,
				  			'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i,
				  			'address' : /.*/,
				  			'country' : /^[a-z]*$/i,
				  			'zipcode' : /^[\d]*$/i,
				  			'email' : /^[-a-zA-Z0-9\_\S.]*[@].*[.].*$/i,
				  			'sex' : /^[a-z]*$/i,
				  			'language' : /^[a-z\s]*$/i,
				  			'about': /.*/ },
				  VALID_ON_EVENT : "focusout"
			}
```
