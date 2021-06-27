# Themeify✨ JS Library
**Themify** is a JS Library providing various themed elements to users so they can create well-designed web applications with less work. The app generates custom elements such as text styles (font and colour), title elements, menu bars, buttons, and text/image boxes. By using the **Themeify** Library, users do not have to worry about coming up with new styles and decorate the elements themselves as the elements are already customized to fit the theme.

# Landing Page
The link to the demo webiste showing the elements and functionalities of **Themeify** Library can be found here:
[https://themeify.herokuapp.com/](https://themeify.herokuapp.com/)

# Getting Started

In order for users to use Themeify Library, there are some set up users need to do.

First, users need to create an `HTML` file.
In the header of the `HTML` file, users need to include the JQuery Script tag. 

``` HTML
<head>
	<!-- JQuery Import -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

Then, users can download and link the Themeify Library into their `HTML` file.
## To use Themify Library: <span style='color:#F2B134;'>Retro Theme</span>

The files for <span style='color:#F2B134;'>Retro</span> Theme can be downloaded <a href='./pub/docs/files/retro_themeify.zip'> HERE</a>.

Decompress the zip file then place the `themeify` folder in the same directory as the `HTML` file. 

‼️ The folder name should always be **`themeify`**. If the folder name changes, the library will not work as expected.

Users also need to create a JavaScript file where they will use the Themeify library. Let us call this file `example.js`.
This file should also be placed in the same directory as the `HTML` file and `themeify` folder. 
``` bash
.
├── example.js
├── index.html  // the main HTML file
└── themeify    // downloaded from zip file above
    ├── cursor   // folder
    ├── fonts    // folder
    ├── img      // folder
    ├── themeify.css
    └── themeify_retro.js
``` 

In the header of user's `HTML` file, add the following script/link tags:

``` HTML
<head>
	<!-- JQuery Import -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- JavaSript file for Themify: Retro Theme -->
	<script defer type="text/javascript" src='./themeify/themeify_retro.js'></script>

	<!-- CSS File for themeify library - must be imported for fonts and colors -->
    	<link rel='stylesheet' href='./themeify/themeify.css' type="text/css" charset="utf-8"/>

 	<!-- example.js file to create elements using Themeify library -->
    	<script defer type="text/javascript" src='example.js'></script>
</head>
```
Once these script tags are in place, it's done! Users can now use the Themeify Retro Theme elements from the `example.js` file.

More description on how to create elements can be found in [API](https://joojoo0422.github.io/ThemeifyDocumentation/#/?id=api ':ignore') of the Documentation.

## To use Themify Library: <span style='color:#72F2E5;'>Neon Theme</span>

The files for <span style='color:#72F2E5;'>Neon</span> Theme can be downloaded <a href='./pub/docs/files/neon_themeify.zip'> HERE</a>.

The steps are the same with Retro Theme library, but with different script tags.

Decompress the zip file then place the `themeify` folder in the same directory as the `HTML` file. 

‼️ The folder name should always be **`themeify`**. If the folder name changes, the library will not work as expected. 

Users also need to create a JavaScript file where they will use the Themeify library. Let us call this file `example.js`.
This file should also be placed in the same directory as the `HTML` file and `themeify` folder.
``` bash
.
├── example.js
├── index.html  // the main HTML file
└── themeify    // downloaded from zip file above
    ├── cursor   // folder
    ├── fonts    // folder
    ├── img      // folder
    ├── themeify.css
    └── themeify_neon.js
``` 

In the header of user's `HTML` file, add the following script/link tags:

``` HTML
<head>
	<!-- JQuery Import -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

	<!-- JavaSript file for Themify: Neon Theme -->
	<script defer type="text/javascript" src='./themeify/themeify_neon.js'></script>

	<!-- CSS File for themeify library - must be imported for fonts and colors -->
    	<link rel='stylesheet' href='./themeify/themeify.css' type="text/css" charset="utf-8"/>

 	<!-- example.js file to create elements using Themeify library -->
    	<script defer type="text/javascript" src='example.js'></script>
</head>
```
Once these script tags are in place, it's done! Users can now use the Themeify Neon Theme elements from the `example.js` file.

More description on how to create elements can be found in [API](https://joojoo0422.github.io/ThemeifyDocumentation/#/?id=api ':ignore') of the Documentation.

# Documentation
The documentation for the Themeify Library can be found here:
[https://joojoo0422.github.io/ThemeifyDocumentation/#/](https://joojoo0422.github.io/ThemeifyDocumentation/#/)
