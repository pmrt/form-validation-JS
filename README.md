# form-validation-JS
Form validation written in Javascript 

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
  
```json
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
