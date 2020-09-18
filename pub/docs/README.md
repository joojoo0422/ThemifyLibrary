# **Themeify** JS Library

**Themify** is a JS Library providing various themed elements to users so they can create well-designed web
applications with less work. The app generates custom elements such as text styles (font and colour), title
elements, menu bars, buttons, and text/image boxes. By using the Themeify Library, users do not have to
worry about coming up with new styles and decorate the elements themselves as the elements are already customized to fit the theme.

There are two different themes provided for the Themeify Library:
- <span style='color:#F2B134;'>Retro Theme</span> Library
- <span style='color:#72F2E5;'>Neon Theme</span> Library

The demo webiste showing the elements and functionalities of **Themeify** Library can be found here:
[https://themeify.herokuapp.com/](https://themeify.herokuapp.com/ ':ignore')

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

The files for <span style='color:#F2B134;'>Retro</span> Theme can be downloaded <a href='./files/retro_themeify.zip'> HERE</a>.

Decompress the zip file then place the `themeify` folder in the same directory as the `HTML` file. 

!> The folder name should always be **`themeify`**. If the folder name changes, the library will not work as expected. 

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

More description on how to create elements can be found in [API](/#/?id=api ':ignore :target=_self') below.

## To use Themify Library: <span style='color:#72F2E5;'>Neon Theme</span>

The files for <span style='color:#72F2E5;'>Neon</span> Theme can be downloaded <a href='./files/neon_themeify.zip'> HERE</a>.

The steps are the same with Retro Theme library, but with different script tags.

Decompress the zip file then place the `themeify` folder in the same directory as the `HTML` file. 

!> The folder name should always be **`themeify`**. If the folder name changes, the library will not work as expected. 

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

	<!-- JavaSript file for Themify: Retro Theme -->
	<script defer type="text/javascript" src='./themeify/themeify_neon.js'></script>

	<!-- CSS File for themeify library - must be imported for fonts and colors -->
    <link rel='stylesheet' href='./themeify/themeify.css' type="text/css" charset="utf-8"/>

 	<!-- example.js file to create elements using Themeify library -->
    <script defer type="text/javascript" src='example.js'></script>
</head>
```
Once these script tags are in place, it's done! Users can now use the Themeify Neon Theme elements from the `example.js` file.

More description on how to create elements can be found in [API](/#/?id=api ':ignore :target=_self') below.



# API
## Generators

Themeify library has element generators for two different types of themes: Retro and Neon Theme.

Both theme has the same types of generators: 
- [**TitleGenerator**](/#/?id=span-stylecolorf2b134retrotitlegenerator-span-stylecolor72f2e5neontitlegenerator ':ignore :target=_self')
- [**MenuGenerator**](/#/?id=span-stylecolorf2b134retromenugenerator-span-stylecolor72f2e5neonmenugenerator ':ignore :target=_self')
- [**ButtonGenerator**](/#/?id=span-stylecolorf2b134retrobuttongenerator-span-stylecolor72f2e5neonbuttongenerator ':ignore :target=_self')
- [**ImageBoxGenerator**](/#/?id=span-stylecolorf2b134retroinputboxgenerator-span-stylecolor72f2e5neoninputboxgenerator ':ignore :target=_self')

Each generator loads the list of functions which creates DOM Object in the webpage that users can simply call to create customized components.

User can construct a generator as shown below:
```js
const title = new RetroTitleGenerator()
````
After constructing a generator, users can apply functions included in each generator prototypes to create and customize themed elements.
```js
// This code will create a title object inside the HTML element with id:'titleID' 
// with the 'First Title' as context and a shadow effect on mouseover event!
const title = new RetroTitleGenerator()
title.createTitle('titleId', 'First Title')
title.shadowMouseOver()
````
Each generator also holds its own set of variables, including the list of items that have been created for that specific generator. 
For example, the `RetroTitleGenerator` has `titles` and `subtitles` list which holds all the titles and subtitles created with the generator. Each generator also holds the list of colors used for the theme.

## Functions

For each Generators, there are functions stored in its prototype. 
Both themes have mainly the same functions except for a few theme specific functions.
The functions are applied to all of the elements created with 
When a user applies a function to one generator, it gets applied to all of the elements created with that generator. 
So, if a user wants to place different effects on elements, they must create more than one generator and apply different functions on them.

For Example, if a user wants to place blink effect on the Title and flash effect on the Subtitle, they have to set up two different generators.

?>Like This:
```js
const blinkTitle = new NeonTitleGenerator()
blinkTitle.createTitle('blink','Blinking Title');
blinkTitle.blinkAnimation('blink')

const flashTitle = new NeonTitleGenerator()
flashTitle.createSubtitle('flash','Flashing Subtitle');
flashTitle.flashAnimation('flash');
```
!>NOT This:
```js
const titleEffects = new NeonTitleGenerator()
titleEffects.createTitle('effects', 'Blinking Title');
titleEffects.glowMouseOver();
titleEffects.createSubtitle('effects','Flashing Subtitle');
titleEffects.flashAnimation('effects'); // this will apply only flash effect on both title and subtitles
```

## <span style='color:#F2B134;'>RetroTitleGenerator</span> / <span style='color:#72F2E5;'>NeonTitleGenerator</span>
This generator creates title and subtitle elements for the webpage. It provides the users with title elements that are customized to fit the chosen theme. It is meant to used as header for the website users are creating. 

The following are the functions in TitleGenerator for creating elements:

### createTitle()
> Creates title element within the div with `id` with `text` as content.
> - Attributes: `id`, `text`

### createSubtitle()
> Creates subtitle element within the div with `id` with `text` as content.
> - Attributes: `id`, `text` 

The following are functions for changing attributes and styling. These functions should be used before animation functions.

### changeSize()
> Changes size of title and subtitle object
> - Attributes: `titleSize`, `subtitleSize` 
> The attributes must be in pixels

### changeFont()
> Changes the font of the object. The fonts are imported inside 'themeify.css' file.
> - Attributes: `fontname`

### themeifyTitle()
> Changes color of fonts and adds text shadow effect for corresponding theme.
> - Attributes: `titleColor`, `subtitleColor` 
>   - For **<span style='color:#F2B134;'>Retro</span>** Theme, the parameter colors can be: red, lightGreen, aquaGreen, darkBlue, yellow
>   - For **<span style='color:#72F2E5;'>Neon</span>** Theme, the parameter colors can be: darkPurple, skyBlue, cyan, blue, pink, lightPink

The following are functions for adding animation effects on elements. DOM manipulation and JS functions are used to maximize the animation effects:

### Functions Only In <span style='color:#F2B134;'>RetroTitleGenerator</span>:

#### shadowMouseOver()
> Adds 3D shadow effect on mouseover event.

### Functions Only In <span style='color:#72F2E5;'>NeonTitleGenerator</span>:

The animation for **<span style='color:#72F2E5;'>Neon</span>** Theme is focused on the TitleGenerator elements. 
These animations on Header elements (Titles/Subtitles) will be useful for users looking for an eyecatching impact on the title of their webpage. It can also be used to put emphasis on certain words within the website.

#### glowMouseOver()
> Adds **glow** effect on mouseover event.

#### blinkAnimation()
> Adds **blinking** effect to the title/subtitle in given `id` div when hovered over.
> - Attributes: `id`

#### flashAnimation()
> Adds **flashing** effect to the title/subtitle in given `id` div when hovered over.
> - Attributes: `id`

#### slideAnimation()
> Adds **slide** effect to the title/subtitle in given `id` div when hovered over.
> - Attributes: `id`

#### bounceAnimation()
> Adds **bounce** effect to the title/subtitle in given `id` div when hovered over.
> - Attributes: `id`

## <span style='color:#F2B134;'>RetroMenuGenerator</span> / <span style='color:#72F2E5;'>NeonMenuGenerator</span>
This generator creates menu bar elements for the webpage. It provides the users with customized menu bars for the chosen theme.

The following are the functions in MenuGenerator for creating elements:

### createColorHorizontalMenu()
> Creates a **Horizontal** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar is created with colors corresponding to the theme and has effects when hovered over.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

### createColorHorizontalMenu()
> Creates a **Vertical** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar is created with colors corresponding to the theme and has effects when hovered over.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

The following are functions for changing attributes and styling. These functions should be used before animation functions.

### changeFont()
> Changes the font of the object. The fonts are imported inside 'themeify.css' file.
> - Attributes: `fontname`

### changeOneOptionName()
> Changes the text inside the menubar to `newName` for one specified `index`.
> - Attributes: `index`, `newName` 
>   - The `index` must be an integer.

### changeOneOptionName()
> Changes all of the option names of menubar to `optionNames`. 
> - Attributes: `optionNames`
>   - The `optionNames` should be the same number as the number of options.
>   - ex) `changeAllOptions('Home', 'About', 'Content', 'Profile', 'Settings')`

### Functions Only In <span style='color:#F2B134;'>RetroMenuGenerator</span>:

#### createDiskHorizontalMenu()
> Creates a **Horizontal** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar is created with each element as disk objects fitted to <span style='color:#F2B134;'>Retro</span> theme and has effects when hovered over.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

#### createDiskVerticalMenu()
> Creates a **Vertical** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar is created with each element as disk objects fitted to <span style='color:#F2B134;'>Retro</span> theme and has effects when hovered over.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

### Functions Only In <span style='color:#72F2E5;'>NeonMenuGenerator</span>:

#### createDiskHorizontalMenu()
> Creates a **Horizontal** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar has glowing effects when hovered over to fit the <span style='color:#72F2E5;'>Neon</span> theme.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

#### createDiskVerticalMenu()
> Creates a **Vertical** menu bar element within the div with `id` with `numOptions` many options.
> The menu bar has glowing effects when hovered over to fit the <span style='color:#72F2E5;'>Neon</span> theme.
> - Attributes: `id`, `numOptions`
>   - `numOptions` should be an integer. The default value is 5.

## <span style='color:#F2B134;'>RetroButtonGenerator</span> / <span style='color:#72F2E5;'>NeonButtonGenerator</span>
This generator creates button elements for the webpage. It provides the users with customized buttons for the chosen theme.
One setup of ButtonGenerator can create a set of buttons. User can create buttons with one setup if they want to style them altogether,
but has to set up seperate ButtonGenerators to create different style buttons. [Example Here](/#/?id=functions ':ignore :target=_self')

The following are the functions in ButtonGenerator for creating elements:

### createButton()
> Creates a button element within the div with `id`.
> - Attributes: `id`

The following are functions for changing styling and attributes. These functions should be used **before** animation functions.

### themeifyButtons()
> Changes the styling of the button objects to match the chosen theme.
> Works best with when applied to a set of buttons rather than a single button.

### changeFont()
> Changes the font of the object. The fonts are imported inside 'themeify.css' file.
> - Attributes: `fontname`

The following are functions to add animation effects. 

### colorBorderMouseOver()
> Adds color changing effect on buttons when hovered over.

### realPressedEffect()
> Adds 3D animation to show as if real button is pressed.

### Functions Only In <span style='color:#F2B134;'>RetroButtonGenerator</span>:

#### imageWhenPressed()
> Shows image on the button body once pressed. Users can choose the image of the background.

### Functions Only In <span style='color:#72F2E5;'>NeonButtonGenerator</span>:

#### glowMouseOver()
> Adds glowing animation effect when hovered over.

## <span style='color:#F2B134;'>RetroInputBoxGenerator</span> / <span style='color:#72F2E5;'>NeonInputBoxGenerator</span>
This generator creates input box elements such as text boxes and image frames for a webpage. It provides the users with input box elements that are customized to fit the chosen theme.

The following are the functions in InputBoxGenerator for creating elements:

### createTitle()
> Creates a small title within the div with `id` with `title` as content.
> This is a title element speficially for the following input box and does not correspond with the title element from TitleGenerator.
>> This function must be called before any creation of Text/Image boxes
> - Attributes: `id`, `title`

### createTextBox()
> Creates a text box element within the div with `id` with `inputText` as content.
> By default, the content of the text boxes are just posted and are not editable.
> - Attributes: `id`, `inputText` 

### createImageFrame()
> Creates a text box element within the div with `id` with `inputText` as content.
> Users can change how image is placed within the frame by using `'contain'` or `'cover'` for `type` attribute.
> - Attributes: `id`, `imageSrc`, `type`
>   - `imageSrc`: the link to image to be inserted. The image must be placed inside the `./img` folder.
>   - `type`: Use `'contain'` to have the whole image fit into the frame. Use `'cover'` to have the image fill the whole frame.

The following are functions for changing attributes.

### makeEditable()
> Makes the textbox within the div with `id`'s inputBox to have editable content.
> - Attributes: `id`

### changeSize()
> Changes width, height, and font sizes of title and content.
> - Attributes: `width`, `height`, `titleFontSize`, `contentFontSize` 
> The attributes must be in **pixels**. To keep it at default size, simply pass in `0` as argument.

### changeText()
> Changes the title and content of the textbox. The change in content can only be applied to textboxes, not image frames.
> - Attributes: `newTitle`, `newContent`
> The attributes must be a String. To keep it as default, simply pass in `0` as argument.

### changeFont()
> Changes the font of title or content. The fonts are imported inside 'themeify.css' file.
> - Attributes: `titleFont`, `contentFont`

### changeColor()
> Users can choose the color of title text, content text, and inputbox border. 
> These colors can be in hex, rgb, or the color variables set in `themeify.css`.
> `changeColor()` function **must** be used **BEFORE** `themeify()` functions as it may collapse with the changes made in `themeify()` functions.
> - Attributes: `titleColor`, `contentColor`, `boxColor`
>  - `titleColor`: color of inputbox title
>  - `contentColor`: color of inputbox content text
>  - `boxColor`: color of inputbox border

### Functions Only In <span style='color:#F2B134;'>RetroTitleGenerator</span>:

The following are functions for changing **styling**. These functions should be used before animation functions.

#### themeifyRainbow()
> Creates rainbow border around the text/image box created by the selected InputBoxGenerator. 
> Also changes the inputbox titles to fit the rainbow theme.

#### themeifyCD()
> Creates CD border around the text/image box created by the selected InputBoxGenerator. 
> Creates a unique frame which is perfect fit for <span style='color:#F2B134;'>Retro</span> Theme.

The animation for **<span style='color:#F2B134;'>Retro</span>** Theme is focused on the InputBoxGenerator elements. 
These animations on InputBox elements (text boxes/ image frames) will be useful for users looking for an eyecatching impact on the content of their webpage.

The following are functions for adding **animation effects** on elements. DOM manipulation and JS functions are used to create these animation effects. 

#### animateFlip()
> Adds **Flip** animation effect to the input box in given `id` div when hovered over.
> Can be used as flip cards to hide the content. The front side of the card will have `textFront` as content.
> The main content this function is applied to will be placed in the back side of card.
> - Attributes: `id`, `textFront`

#### animateSpin()
> Adds **Spin** animation effect to the input box in given `id` div when hovered over.
> Can be used to give emphasis on image or text by giving it a spin when hovered over.
> - Attributes: `id`

#### animateShine()
> Adds **Shine** animation effect to the input box in given `id` div when clicked.
> Users can see the glossy shining effect placed onto the textbox/ image box once the input box is pressed.
> - Attributes: `id`

#### animateReveal()
> Adds **Reveal** animation effect to the input box in given `id` div when clicked.
> This animation can only be placed on text box elements. Before the text box is clicked, the `showText` will be shown to the users.
> Can be used hide the content of the text box initially to improve user interaction with the webpage.
> - Attributes: `id`, `showText`

#### shadowMouseOver()
> Adds 3D shadow effect on mouseover event.

### Functions Only In <span style='color:#72F2E5;'>NeonTitleGenerator</span>:

The following are functions for changing **styling**. These functions should be used before animation functions.

#### themeifyNeon()
> Creates a glowing border around the text/image box created by the selected InputBoxGenerator. 
> Also places a glow text effect on the inputbox titles to fit the theme.

The following are functions for adding **animation effects** on elements.

#### glowOnMouseOver()
> Adds **glow** animation effect to the input box in given `id` div when hovered over.
> Can be used to give emphasis on image or text by glowing it when hovered over.
> - Attributes: `id`

#### animateGlowing()
> Places **continous glowing** animation effect to the input box in given `id` div when hovered over.
> Can be used to add constant animation to webpage while fitting in the <span style='color:#72F2E5;'>neon</span> theme
> - Attributes: `id`










