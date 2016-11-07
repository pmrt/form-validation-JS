# form-validation-JS
Form validation written in Javascript 
VERSION: 1.0

# FORM VALIDATION Class
###### AUTHOR : Pedro J. Martínez Martínez
### HOW TO :
1. Add the fields to the HTML with the attrib id
	```<field>-input```, and the attrib ```name="field"```.
	Then add a label with the attrib id : ```<field>-validation```.
	Where field it's your new field to validate, and the label
	validation purpose it's to show the results.
	
  E.g.
  
```html
	<label for="name">Name: </label>
	<input name="name" type="text" id="name-input">
	<label id="name-validation" for="name"></label>
```

2. Next, add the field to the constant FIELDS with the
	regular expression to validate. Regular expression
	without quotes!
	E.g.:
  
```
	'name' : /^[a-z\s\u00E0-\u00FC]{3,25}$/i
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

- You can modify the options passing them to the class Validation like this:

```MyOptions = { 
			VALID_STYLE: { color: 'blue', text: 'This is a valid test'} 
			}```

- Then, you can instance the class with the new options:

```javascript
	var myValidation = new Validation(MyOptions);
```

All parameters are optional see the Option Reference below for see the defaults parameters, keep in mind that in this version
the parameters are optional but the sub-parameters not. So that said, you can't set the FIELDS option with just the new
fields, you need to set all the subparameters.

For example

- This is ok:
```
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

- This is not:

```
 FIELDS : {
			'myuser' : /^[a-z][a-z0-9]{4,11}$/i,
			'nickname': /^[a-z][a-z0-9]{4,11}$/i
			}
	}
	
	myValidation = new Validation(myNewOptions);
```

### Options Reference:

- ```VALID_STYLE : { color: <color>, text: <text> }``` Sets the style when the regular expression matches with its field value.
- ```INVALID_STYLE: { color: <color>, text: <text>}``` Sets the style when the regular expression doesn't match with its field value.
- ```FIELDS : { <field-name> : <regular-expression-without-quotes> }``` Sets the fields and its regular expressions. Keep in mind that as mentioned above, in this version, if you add new fields you must add all the sub-parameters. Also, field-name must match with the field "id" (with the suffix "-input") and "name" (just with the name with no suffix) attribs in the html, then you need the labelValidation which will show te results to have the same id with the suffix "-validation". See How to section below.
- ```VALID_ON_EVENT : <event>```. You can use it in order to set the event wich will raise the validation, by default it's focusout so it will check if the regular expression matches when the element loses the focus. Similarly, you could set it to 'keyup' in order to check if the regular expression matches every time you release a key inside the element.


### Default Options:
```
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
