"use strict";

(function(global) {


// Custom Retro Titles
function RetroTitleGenerator() {
	this.titles = []
	this.subtitles = []
	this.themeColors = ['#ED553B', '#4FB99F','#068587','#112F41','#F2B134']
}

RetroTitleGenerator.prototype = {

	// functions for creating elements
	
	createTitle: function(id, text) {  // used for title of website
		const title = document.createElement('h1')
		title.innerHTML = text
		title.style = 'font-family: Pacifico; font-size: 100px; margin: 0px 20px; ' +
		'height: max-content; width: max-content; color: var(--lightGreen);' +
		'text-shadow: 6px 6px 0 var(--red), -4px -4px 0 var(--yellow); text-align: center;'
		const where = document.getElementById(id);
		where.append(title)
		this.titles.push(title)
	},
	createSubtitle: function(id, text) { 
		const title = document.createElement('h2')
		title.innerHTML = text
		title.style = 'font-family: Pacifico; font-size: 60px; margin: 0px 20px;' +
		'width: max-content; text-align:center; color: var(--lightGreen);' +
		'text-shadow: 4px 4px 0 var(--aquaGreen); text-align: center;' 
		const where = document.getElementById(id);
		where.append(title)
		this.subtitles.push(title)
	},

	// functions for changing attributes/style

	changeSize: function(titleSize, subtitleSize) {
		// size must be in pixels
		// default size - 100px, 60px
		var newTitleSize = parseFloat(titleSize)
		var newSubtitleSize = parseFloat(subtitleSize)
		// if given sizes are 0 or undefined keep as default size
		if ((newTitleSize === 0) || (newTitleSize === NaN)){
			newTitleSize = '100px'
		}
		if ((newSubtitleSize === 0) || (newSubtitleSize === NaN)){
			newSubtitleSize = '60px'
		}
			
		// for all titles
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const currSize = parseFloat(title.style.fontSize)
			
			if (newTitleSize > currSize){ // larger
				
				title.style.fontSize=newTitleSize.toString() + 'px'
				title.style.textShadow='10px 10px 0 var(--red), -10px -10px 0 var(--yellow)'
			}
			if(newTitleSize < currSize){ // smaller
				
				title.style.fontSize=newTitleSize.toString() + 'px'
				title.style.textShadow='3px 3px 0 var(--red), -2px -2px 0 var(--yellow)'
			}
		}
		// for all subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currSize = parseFloat(subtitle.style.fontSize)
			if (newSubtitleSize > currSize){ // larger
				subtitle.style.fontSize=newSubtitleSize.toString() + 'px'
				subtitle.style.textShadow='6px 6px 0 var(--aquaGreen)'
			}
			if(newSubtitleSize < currSize){ // smaller
				subtitle.style.fontSize=newSubtitleSize.toString() + 'px'
				subtitle.style.textShadow='3px 3px 0 var(--aquaGreen)'
			}
		}
		
	},
	changeFont: function(fontname) {
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			title.style.fontFamily=fontname
		}
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			subtitle.style.fontFamily=fontname
		}
	},
	themeifyTitle: function(titleColor, subtitleColor) { 
		const colors = this.themeColors
		// changes color of fonts
		// parameter color can be: red, lightGreen, aquaGreen, darkBlue, yellow
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			if (titleColor === "red"){// 0
				title.style.color = 'var(--red)'
				title.style.textShadow = '3px 3px 0 var(--darkBlue), -2px -2px 0 var(--yellow)'
			}
			if (titleColor === "lightGreen"){ // 1
				title.style.color = 'var(--lightGreen)'
				title.style.textShadow = '3px 3px 0 var(--red), -2px -2px 0 var(--yellow)'
			}
			if (titleColor === "aquaGreen"){ // 2
				title.style.color = 'var(--aquaGreen)'
				title.style.textShadow = '3px 3px 0 var(--darkBlue), -2px -2px 0 var(--yellow)'
			}
			if (titleColor === "darkBlue"){ // 3
				title.style.color = 'var(--darkBlue)'
				title.style.textShadow = '3px 3px 0 var(--red), -2px -2px 0 var(--yellow)'
			}
			if (titleColor === "yellow"){ // 4
				title.style.color = 'var(--yellow)'
				title.style.textShadow = '3px 3px 0 var(--darkBlue), -2px -2px 0 var(--red)'
			}
		}
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			subtitle.style.color = colors[i]
			//title.style.borderColor = colors[i]
			subtitle.style.textShadow = '4px 4px 0 var(--aquaGreen)'
			if (subtitleColor === "red"){// 0
				subtitle.style.color = 'var(--red)'
				subtitle.style.textShadow = '4px 4px 0 var(--darkBlue)'
			}
			if (subtitleColor === "lightGreen"){ // 1
				subtitle.style.color = 'var(--lightGreen)'
				subtitle.style.textShadow = '4px 4px 0 var(--red)'
			}
			if (subtitleColor === "aquaGreen"){ // 2
				subtitle.style.color = 'var(--aquaGreen)'
				subtitle.style.textShadow = '4px 4px 0 var(--darkBlue)'
			}
			if (subtitleColor === "darkBlue"){ // 3
				subtitle.style.color = 'var(--darkBlue)'
				subtitle.style.textShadow = '4px 4px 0 var(--red)'
			}
			if (subtitleColor === "yellow"){ // 4
				subtitle.style.color = 'var(--yellow)'
				subtitle.style.textShadow = '4px 4px 0 var(--darkBlue)'
			}
		}
	},
	shadowMouseOver: function() {
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const currShadow = title.style.textShadow;
			title.addEventListener("mouseover", function() {
				title.style.textShadow=currShadow+', 10px 10px 8px var(--darkBlue)'
			})
			title.addEventListener("mouseout", function() {
				title.style.textShadow=currShadow
			})
		}
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currShadow = subtitle.style.textShadow;
			subtitle.addEventListener("mouseover", function() {
				subtitle.style.textShadow=currShadow+', 10px 10px 8px var(--darkBlue)'
			})
			subtitle.addEventListener("mouseout", function() {
				subtitle.style.textShadow=currShadow
			})
		}
	},
}

// Custom Retro Menu Bar
// Each menu bar should be created seperately: const newMenu = MenuGenerator()
function RetroMenuGenerator() {
	this.options = [] // The options for each menu
	this.changeColor = [] // color scheme for each type of menu
	this.themeColors = ['#ED553B', '#4FB99F','#068587','#112F41','#F2B134']
	this.themeColorsLight = ['#f17e6a','#61c0a9','#079d9f','#163e55','#f4ba4c']
	this.cd_images = ['cd_red.png', 'cd_orange.png', 'cd_green.png', 'cd_blue.png', 'cd_purple.png']
	this.cd_colors = ['red', 'orange', 'green', 'dodgerblue', 'purple']
}
RetroMenuGenerator.prototype = {

	// functions for creating elements
	createColorHorizontalMenu: function(id, numOptions) {
	// id: the id of div in html the menu bar should be placed in
	// numOptions: number of Options in the menubar
		if (numOptions === undefined){numOptions = 5} // default is 5
		// create menu
		const menu = document.createElement('div')
		menu.setAttribute('class', id) // classname is set same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden; '
		const colors = this.themeColors
		const colorsLight = this.themeColorsLight
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: inline-block; text-align: center; background-color:'+colors[i]+
							'; padding: 10px 20px; color: white; font-size:20px; font-family: Pacifico;'+
							'text-decoration: none; overflow-wrap: break-word;'
			option.addEventListener("mouseover", function() {
				option.style.backgroundColor=colorsLight[i]
				option.style.textShadow='0 0 20px #fff, 0 0 30px '+colors[i]+', 0 0 40px'+colors[i];
			})
			option.addEventListener("mouseout", function() {
				option.style.backgroundColor=colors[i]
				option.style.textShadow=''
			})
			menu.append(option) // append item to menu bar
			this.options.push(option) // keep each option in generator
		}
		// append menu to id
		const where = document.getElementById(id);
		where.append(menu)
	},
	createColorVerticalMenu: function(id, numOptions) {
		if (numOptions === undefined){numOptions = 5} // default of numOption: 5
		const menu = document.createElement('div')
		menu.setAttribute('class', id) // classname is set same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden;'
		const colors = this.themeColors
		const colorsLight = this.themeColorsLight
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: block; text-align: center; background-color:'+colors[i]+
							'; padding: 15px; color: white; font-size:20px; font-family: Pacifico;'+
							'text-decoration: none; width: 100px; overflow-wrap: break-word;'
			option.addEventListener("mouseover", function() {
				option.style.backgroundColor=colorsLight[i]
				option.style.textShadow='0 0 20px #fff, 0 0 30px '+colors[i]+', 0 0 40px'+colors[i];
			})
			option.addEventListener("mouseout", function() {
				option.style.backgroundColor=colors[i]
				option.style.textShadow=''
			})
			menu.append(option) // append item to menu bar
			this.options.push(option) // keep each option in generator
		}
		// append menu to id
		const where = document.getElementById(id);
		where.append(menu)
	},
	createDiskHorizontalMenu: function(id, numOptions) {
		if (numOptions === undefined){numOptions = 5} // default is 5
		const menu = document.createElement('div')
		menu.setAttribute('class', id) // classname is set same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden;'
		const cd_colors = this.cd_colors
		const cd_images = this.cd_images
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: inline-block; text-align: center; text-decoration: none;'+
							'background-Image: url(./themeify/img/'+cd_images[i]+');background-size:contain;'+
							'padding: 5px; color: white; font-size:20px; font-family: Pacifico;'+
							'width: 90px; height: 90px; margin: 3px; border-radius: 50%; overflow-wrap: break-word;'
			option.addEventListener("mouseover", function() {
				option.style.width='100px'
				option.style.height='100px'
				option.style.color = cd_colors[i]
			})
			option.addEventListener("mouseout", function() {
				option.style.width='90px'
				option.style.height='90px'
				option.style.color = 'white'
			})
			menu.append(option) 
			this.options.push(option)
		}
		const where = document.getElementById(id);
		where.append(menu)
	},
	createDiskVerticalMenu: function(id, numOptions) {
		if (numOptions === undefined){numOptions = 5} // default of numOption: 5
		const menu = document.createElement('div')
		menu.setAttribute('class', id) // classname is set same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden;'
		const cd_colors = this.cd_colors
		const cd_images = this.cd_images
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: block; text-align: center; margin:3px; overflow-wrap: break-word;'+
							'background-Image: url(./themeify/img/'+cd_images[i]+');background-size:contain;'+
							'padding: 5px; color: white; font-size:20px; font-family: Pacifico; '+ 
							'text-decoration: none; width: 90px; height: 90px; border-radius: 50%;'
			option.addEventListener("mouseover", function() {
				option.style.width='100px'
				option.style.height='100px'
				option.style.color = cd_colors[i]
			})
			option.addEventListener("mouseout", function() {
				option.style.width='90px'
				option.style.height='90px'
				option.style.color = 'white'
			})
			menu.append(option) // append item to menu bar
			this.options.push(option) // keep each option in generator
		}
		// append menu to id
		const where = document.getElementById(id);
		where.append(menu)
	},

	// functions for changing attributes

	changeFont: function(fontname) {

		const colors = this.themeColors
		const cd_colors = this.cd_colors
		// color Menus
		if(this.options[0].style.backgroundImage === ""){
			this.changeColor = colors
		}else{ // disk menus
			this.changeColor = cd_colors
		}

		for (let i = 0; i < this.options.length; i++) {
			const option = this.options[i]
			const newColor = this.changeColor[i]
			option.style.fontFamily=fontname
			if(fontname === 'Bungee Inline'){
				option.style.webkitTextStroke='1px '+ newColor+''
			}
			if(fontname === 'bratsy_script_demoreguler'){
				option.style.webkitTextStroke='1px '+ newColor+''
				option.style.fontSize = '27px'
			}
		}
	},
	changeOneOptionName: function(index, newName) {
		// specify the index of Option Name you want to change and the new name
		// >> changeOneOptionName(0, 'Home') 
		const option = this.options[index]
		option.innerHTML=newName
	},
	changeAllOptions: function(optionNames) { 
		// input all optionNames as you want to change it
		// ex) changeAllOptions('Home', 'About', 'Content', 'Profile', 'Settings')
		for (let i = 0; i < this.options.length; i++) {
			const option = this.options[i]
			if(arguments[i] !== undefined){
				option.innerHTML=arguments[i]
			}
		}
	},
}



// Custom Retro Buttons
function RetroButtonGenerator() {
	this.buttons = []
	this.buttonColors = []
	this.themeColors = ['#ED553B', '#4FB99F','#068587','#112F41','#F2B134']
}

RetroButtonGenerator.prototype = {

	// function to create element

	createButton: function(id) {
		const text = "Do Something"
		const button = document.createElement('button')
		button.innerHTML = "<span style='font-size: 18px;'>Click Me!</span>"
		button.style = 'width: 100px; height: 60px; margin: 10px; background: #F2B134;' +
		'opacity: 0.9; border: 2px solid #F2B134; outline:0;'
		button.style.fontFamily = 'Pacifico' // change to prefered font here
		const where = document.getElementById(id);
		where.append(button)
		this.buttons.push(button)
		this.buttonColors.push('#F2B134')
	},

	// function to change style

	themeifyButtons: function() { // when used with other functions, themeifyButtons() should always be called first
		const colors = this.themeColors
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			this.buttonColors[i] = colors[i]
			button.style.backgroundColor = colors[i]
			button.style.borderColor = colors[i]
			
			button.addEventListener("mouseout", function() {
				button.style.backgroundColor= colors[i]
				button.style.borderColor=colors[i]
			})
		}
	},

	// functions for special effects 

	colorBorderMouseOver: function() {
		const colors = this.themeColors
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]
			button.addEventListener("mouseover", function() {
				button.style.backgroundColor= 'white'
				if (i===4){ // if the new color is yellow, change to red
					i = 0}
				button.style.borderColor=colors[i]
				button.style.borderWidth='3px'
				button.style.color=colors[i]
				button.style.fontWeight='bold'
				button.style.opacity='1'
			})
			button.addEventListener("mouseout", function() {
				button.style.backgroundImage= ''
				button.style.backgroundColor= buttonColor
				button.style.color='black'
				button.style.fontWeight='normal'
				button.style.opacity='0.8'
			})
		}
	},
	imageWhenPressed: function() {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]
			// changes inside images
			button.addEventListener("mousedown", function() {
				// user can insert any image that they want
				button.style.backgroundImage= "url('./themeify/img/button_style3.png')"
				button.style.backgroundSize='cover'
				button.innerHTML="<span style='font-size: 20px; font-weight: bold;'>Pressed!</span>"
			})
			button.addEventListener("mouseup", function() {
				button.style.backgroundColor= buttonColor
				button.style.backgroundImage= ''
				button.style.color='black'
				button.innerHTML="<span style='font-size: 18px; font-weight: normal;'>Click Me!</span>"
			})
		}
	},
	realPressedEffect: function() {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]
			button.style.boxShadow= '0 9px gray'
			button.addEventListener("mousedown", function() {
				button.style.boxShadow= '0 5px #484848'
				button.style.transform='translateY(5px)'
			})
			button.addEventListener("mouseup", function() {
				button.style.boxShadow= '0 9px gray'
				button.style.transform='translateY(0px)'
			})
		}
	},
	changeFont: function(fontname) {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			button.style.fontFamily=fontname
		}
	},
}


// Custom Retro Text/Image (Input) Boxes
function RetroInputBoxGenerator() {
	this.inputTitles = []
	this.inputs = []
}

RetroInputBoxGenerator.prototype = {

	// functions to create elements

	createTitle: function(id, title) {
		// call this function before any creation of Textboxes
		// creates small subtitle for text/image boxes
		const textTitle = document.createElement('div')
		textTitle.innerHTML = title
		textTitle.setAttribute('class', 'textTitle')
		textTitle.style = 'font-family: Pacifico; font-size: 20px; color: var(--aquaGreen);' + 
						  'text-shadow: 2px 2px 0 var(--yellow); margin-bottom: 5px;'
		const where = document.getElementById(id);
		where.append(textTitle)
		this.inputTitles.push(textTitle)
	},
	createTextBox: function(id, inputText) { 
		// id: of div to place the textbox in
		// inputText: text to put into TextBox
		const textBox = document.createElement('div')
		textBox.innerHTML = inputText
		textBox.setAttribute('class', 'textBox')
		textBox.style = 'width: 40vw; height: 45vh; padding: 10px; background: var(--aquaGreen);' +
						'border: 2px solid var(--yellow); overflow: scroll; font-family: Pacifico; color:black;'
		const where = document.getElementById(id);
		where.append(textBox)
		this.inputs.push(textBox)
	},
	createImageFrame: function(id, imageSrc, type) { 
		// id: of div to place the textbox in
		// imageSrc: the link to image to be inserted
		// type: contain (to insert whole image), cover (to have image cover the whole frame)
		  // if you want the whole image to be inside use 'contain'
		  // if you want the image to cover the whole box, use 'cover'
		const textBox = document.createElement('div')
		textBox.style = 'width: 30vw; height: 50vh; border: 4px solid var(--aquaGreen);' +
						' background-color:var(--aquaGreen);'
		textBox.setAttribute('class', 'textBox')
		const image = document.createElement('div')
		image.style = 'background-Image: url(./themeify/img/'+imageSrc+'); background-repeat: no-repeat;'+
					' background-position:center; height: 100%; width:100%;'+
					' background-size:'+type+';' 
		textBox.append(image)
		const where = document.getElementById(id);
		where.append(textBox)
		this.inputs.push(textBox)
	},

	// functions to change style of element

	themeifyRainbow: function() { 
		const rainbow = [ 'var(--red)', 'var(--yellow)', 'var(--aquaGreen)', 'var(--darkBlue)']
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			input.style.boxShadow = '0 0 0 5px var(--aquaGreen), 0 0 0 10px var(--darkBlue), 0 0 0 15px var(--yellow), 0 0 0 20px var(--red)'
			input.style.position = 'relative'
			input.style.margin = '25px 20px'
			input.style.backgroundColor = 'white'
			input.style.border=''
		}
		// rainbow all titles
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			const words = (title.innerHTML).split(' ')
			const rainbowWords = []
			for(let j=0; j<words.length; j++){ // j%4
				const rainbowWord = "<span style='color:"+rainbow[j%4]+";'>"+words[j]+"</span>"
				rainbowWords.push(rainbowWord)
			}
			title.innerHTML = rainbowWords.join(' ')
			title.style.textShadow = '2px 2px 0 black'
		}
	},
	themeifyCD: function() { 
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			input.style.border = '20px solid white'
			input.style.borderImageSource = 'url(./themeify/img/cd_pattern.jpg)'
			input.style.borderImageSlice = '33%'
			input.style.borderImageRepeat='round'
			input.style.backgroundColor=''
		}
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.color = '#431c53'
			title.style.textShadow = '1px 1px 0 black'
		}
	},

	// Functions for changing attributes

	makeEditable: function (id) {
		// Makes the textbox of id's InputBox to have editable content
		// id: id of the container of InputBox to make editable
		const container = document.getElementById(id);
		const textboxes = container.querySelectorAll('.textBox')

		for (let i=0; i < textboxes.length; i++){
			const textBox = textboxes[i]
			// make content editable
			textBox.setAttribute("contenteditable", true);
		}
	},
	changeSize: function(width, height, titleFontSize, contentFontSize){
		// enter new width, height for text/image box and new fontsize for font
		// give 0 as argument to keep default size
		// must be in pixels

		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]

			var newWidth = parseFloat(width)
			var newHeight = parseFloat(height)
			var newFontSize = parseFloat(contentFontSize)
			if (newWidth === 0){ newWidth = input.style.width }
			else{ newWidth = width }
			if (newHeight === 0){ newHeight = input.style.height }
			else{ newHeight = height }
			if (newFontSize === 0){ newFontSize = input.style.fontSize }
			else{ newFontSize = contentFontSize }

			input.style.width = newWidth
			input.style.height = newHeight
			input.style.fontSize = newFontSize.toString() + 'px'
		}
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]

			var newTitleFontSize = parseFloat(titleFontSize)
			if (newTitleFontSize === 0){ newTitleFontSize = title.style.fontSize }
			
			else{ newTitleFontSize = titleFontSize }
			title.style.fontSize = newTitleFontSize.toString() + 'px'
		}
	},
	changeText: function(newTitle, newContent){
		// enter new Title and new Text content for text box
		// enter 0 for default
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			var changeTitle = parseFloat(newTitle)
			if (changeTitle === 0){ changeTitle = title.innerHTML }
			else{ changeTitle = newTitle }

			title.innerHTML = changeTitle
		}
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			var changeContent = parseFloat(newContent)
			if (changeContent === 0){ changeContent = title.innerHTML }
			else{ changeContent = newContent }

			input.innerHTML = changeContent
		}
	},
	changeFont: function(titleFont, contentFont) { 
		// titleFont: font for textbox title
		// contentFont: font for textbox content
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.fontFamily = titleFont
		}
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			input.style.fontFamily = contentFont
		}
	},
	// CANNOT USE WITH THEMEIFY() FUNCTIONS!!! (themeifyRainbow() or themeifyCD())
	changeColor: function(titleColor, contentColor, boxColor) { 
		// Users can choose the color for each attributes:
		//  titleColor: color of inputbox title
		//  contentColor: color of inputbox content text
		//  boxColor: color of inputbox border
		// These colors can be in hex, rgb, or the color variables set in themeify.css
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			const currColor = input.style.borderColor
			input.style.borderColor = boxColor
			input.style.color = contentColor
			input.style.backgroundColor = titleColor
		}
		// Change title color
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.color = titleColor
			title.style.textShadow = '2px 2px 0 ' + boxColor + ''
		}
	},

	// Functions for Animation

	animateFlip: function(id, textFront) {
		// places animation "Flip" on the given id element
		// textFront: the text that will go in the front side of card
		// the main content will be on the back side of card

		// the back side of card
		const content = document.getElementById(id)
		const back = content.getElementsByClassName('textBox')[0] // the main content to place effect on 
		back.setAttribute('class', 'back') // main content will be the back side of card
		const backStyle = back.style // for size and styles of main content element

		// create card
		const card = document.createElement('div')
		card.setAttribute('class', 'card') 
		card.style = 'width: 350px; height: 300px; background-color: transparent; position:relative;'
		
		// create inner face of card
		const face = document.createElement('div')
		face.setAttribute('class', 'cardFace')
		face.style = 'width: 100%; height: 100%; transition: all 0.5s ease; position: absolute;'+
					'transform-style: preserve-3d;'
		// add mouse effect
		card.addEventListener("mouseover", function(){
			face.style.transform='rotateY(180deg)'
		})
		card.addEventListener("mouseout", function(){
			face.style.transform=''
		})

		// create front side of card
		const front = document.createElement('div')
		front.setAttribute('class', 'front')
		front.style = 'position: absolute; justify-content: center; border: 20px solid var(--lightGreen);' +
					'backface-visibility: hidden; text-align: center; '
		front.style.width = backStyle.width
		front.style.height = backStyle.height
		front.style.padding = backStyle.padding
		front.style.fontFamily = backStyle.fontFamily
		front.innerHTML = textFront
		front.style.overflow = 'hidden'

		// add styles to back side of card
		back.style.backfaceVisibility = 'hidden'
		back.style.overflow = 'hidden'
		back.style.transform =  'rotateY(180deg)'
		back.style.justifyContent = 'center'
		back.style.position = 'absolute'

		// append card to div
		face.append(front)
		face.append(back)
		card.append(face)
		content.append(card)
	},
	animateSpin: function(id) { 
		// places animation "Spin" on the given id element

		const content = document.getElementById(id)
		const elem = content.getElementsByClassName('textBox')[0] // the main element to place effect on
		
		// add mouse effect
		elem.addEventListener("mouseenter", function(){
			var deg = 0;
			const spin = setInterval(function(){
				if (deg === 360){
					clearInterval(spin);
				} else {
					deg++;
					elem.style.transform = "rotate("+deg+"deg)";
				}
			}, 1);
		})
	},
	animateShine: function(id) {
		// places animation "Shine" on the given id element 

		const content = document.getElementById(id)
		const elem = content.getElementsByClassName('textBox')[0] // the main element to place effect on
		elem.style.position = 'relative'

		// create dom for shining effect
		const shine = document.createElement('div')
		shine.setAttribute('class', 'shine')
		shine.style = 'width: 100px; height: 100%; position: absolute; top: 0; left: -350px;' +
					'background: rgba(255,255,255,0.3); transform: skewX(-40deg);'
		
		elem.append(shine)
		shine.style.zIndex = '1'

		// add mouse effect
		elem.addEventListener("click", function(){
			var position = -250;
			const frame = setInterval(function(){
				if (position === 450){
					clearInterval(frame);
				} else {
					position++;
					shine.style.left = position + "px";
				}
			}, 0);
		})
	},
	animateReveal: function(id, showText) {
		// places animation "Reveal" on the given id element 
		// 'showText': Text that will show before reveal

		const content = document.getElementById(id)
		const elem = content.getElementsByClassName('textBox')[0] // the main element to place effect on
		const currStyle = elem.style // for current styling of textbox
		
		// create dom for reveal effect
		// show text
		const show = document.createElement('p')
		show.innerHTML = showText
		show.style = 'font-family: Pacifico; color: black; font-size:25px; text-align: center; margin: 0;'

		// main container
		const revealBox = document.createElement('div')
		revealBox.setAttribute('class', 'revealBox')

		revealBox.style = 'height: 60px; width: 250px; background-color: transparent;'
		revealBox.style.margin = currStyle.margin
		revealBox.style.padding = currStyle.padding
		// rainbow theme
		revealBox.style.boxShadow = currStyle.boxShadow
		// cd border theme
		revealBox.style.border = currStyle.border
		revealBox.style.borderImageSource = currStyle.borderImageSource
		revealBox.style.borderImageSlice = currStyle.borderImageSlice
		revealBox.style.borderImageRepeat = currStyle.borderImageRepeat

		// add attributes to curr element
		elem.style.borderImage = ''
		elem.style.border = ''
		elem.style.boxShadow = ''
		elem.style.margin = '0'
		elem.style.opacity = '0'
		elem.style.backgroundColor = 'transparent'
		
		// new dimentions for animation
		const currHeight = parseFloat(currStyle.height)
		const newHeight = (currHeight+60).toString() + "px"

		const currWidth = parseFloat(currStyle.width)
		const newWidth = (currWidth+10).toString() + "px"

		var clicked = true

		revealBox.addEventListener("click", function(){
			if (clicked) {
				revealBox.animate([
					{ height: '60px', width: '250px' },
					{ height: newHeight, width: newWidth} 
					], {
					    duration: 1500,
					    easing: 'ease-in',
					    iterations: 1
				})
				elem.animate([
					{  opacity: '0' },
					{  opacity: '1' } 
					], {
					    duration: 2000,
					    iterations: 1
				})
				revealBox.style.height = newHeight
				revealBox.style.width = newWidth
				elem.style.opacity = '1'
				clicked = false
			} else {
				revealBox.animate([
					{ height: newHeight, width: newWidth},
					{ height: '60px', width: '250px' }
					], {
					    duration: 1200,
					    easing: 'ease-in',
					    iterations: 1
				})
				elem.animate([
					{  opacity: '1' },
					{  opacity: '0' } 
					], {
					    duration: 1000,
					    iterations: 1
				})
				revealBox.style.height = '60px'
				revealBox.style.width = '250px'
				elem.style.opacity = '0'
				clicked = true
			}
		})
		revealBox.append(show)
		revealBox.append(elem)
		content.append(revealBox)
	},
}

global.RetroTitleGenerator = global.RetroTitleGenerator || RetroTitleGenerator
global.RetroMenuGenerator = global.RetroMenuGenerator || RetroMenuGenerator
global.RetroButtonGenerator = global.RetroButtonGenerator || RetroButtonGenerator
global.RetroInputBoxGenerator = global.RetroInputBoxGenerator || RetroInputBoxGenerator
	
})(window);

