"use strict";

(function(global) {

// Custom Neon Titles
function NeonTitleGenerator() {
	this.titles = []
	this.subtitles = []
	this.titleColor = []
	this.subtitleColor = []
}

NeonTitleGenerator.prototype = {

	// functions for creating elements
	
	createTitle: function(id, text) {  // used for title of website
		const title = document.createElement('h1')
		title.innerHTML = text
		title.style = 'font-family: Megrim; font-size: 100px; margin: 15px 10px; ' +
		'height: max-content; width: max-content; color: white;' +
		'text-shadow: 0 0 20px var(--lightPink), 0 0 30px var(--lightPink), 0 0 40px var(--lightPink), 0 0 50px var(--lightPink), 0 0 60px var(--lightPink);'
		this.titleColor.push('var(--lightPink)')
		const where = document.getElementById(id);
		where.append(title)
		this.titles.push(title)
	},
	createSubtitle: function(id, text) { 
		const title = document.createElement('h2')
		title.innerHTML = text
		title.style = 'font-family: Megrim; font-size: 40px; margin: 10px 10px;' +
		'width: max-content; text-align:center; color: white;' +
		'text-shadow:  0 0 20px var(--cyan), 0 0 30px var(--cyan), 0 0 40px var(--cyan);' 
		this.subtitleColor.push('var(--cyan)')
		const where = document.getElementById(id);
		where.append(title)
		this.subtitles.push(title)
	},

	// functions for changing attributes/style

	changeSize: function(titleSize, subtitleSize) {
		// size must be in pixels
		// default size - 100px, 40px
		var newTitleSize = parseFloat(titleSize)
		var newSubtitleSize = parseFloat(subtitleSize)
		// if given sizes are 0 or undefined keep as default size
		if ((newTitleSize === 0) || (newTitleSize === NaN)){
			newTitleSize = '100px'
		}
		if ((newSubtitleSize === 0) || (newSubtitleSize === NaN)){
			newSubtitleSize = '40px'
		}
		// for all titles
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			//(newTitleSize > currSize){ // larger
			title.style.fontSize=newTitleSize.toString() + 'px'
		}
		// for all subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currSize = parseFloat(subtitle.style.fontSize)
			subtitle.style.fontSize=newSubtitleSize.toString() + 'px'
		}
	},
	themeifyTitle: function(titleColor, subtitleColor) {
		// changes color of titles
		// parameter color can be: darkPurple, skyBlue, cyan, blue, pink, lightPink
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			if (titleColor === "darkPurple"){
				title.style.textShadow = '0 0 20px var(--darkPurple), 0 0 30px var(--darkPurple), 0 0 40px var(--darkPurple), 0 0 50px var(--darkPurple), 0 0 60px var(--darkPurple)'
				this.titleColor[i] = 'var(--darkPurple)'
			}
			if (titleColor === "skyBlue"){ 
				title.style.textShadow = '0 0 20px var(--skyBlue), 0 0 30px var(--skyBlue), 0 0 40px var(--skyBlue), 0 0 50px var(--skyBlue), 0 0 60px var(--skyBlue)'
				this.titleColor[i] = 'var(--skyBlue)'
			}
			if (titleColor === "cyan"){
				title.style.textShadow = '0 0 20px var(--cyan), 0 0 30px var(--cyan), 0 0 40px var(--cyan), 0 0 50px var(--cyan), 0 0 60px var(--cyan)'
				this.titleColor[i] = 'var(--cyan)'
			}
			if (titleColor === "blue"){ 
				title.style.textShadow = '0 0 20px var(--blue), 0 0 30px var(--blue), 0 0 40px var(--blue), 0 0 50px var(--blue), 0 0 60px var(--blue)'
				this.titleColor[i] = 'var(--blue)'
			}
			if (titleColor === "pink"){
				title.style.textShadow = '0 0 20px var(--pink), 0 0 30px var(--pink), 0 0 40px var(--pink), 0 0 50px var(--pink), 0 0 60px var(--pink)'
				this.titleColor[i] = 'var(--pink)'
			}
			if (titleColor === "lightPink"){ 
				title.style.textShadow = '0 0 20px var(--lightPink), 0 0 30px var(--lightPink), 0 0 40px var(--lightPink), 0 0 50px var(--lightPink), 0 0 60px var(--lightPink)'
				this.titleColor[i] = 'var(--lightPink)'
			}
		}
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			if (subtitleColor === "darkPurple"){
				subtitle.style.textShadow = '0 0 20px var(--darkPurple), 0 0 30px var(--darkPurple), 0 0 40px var(--cyan)'
				this.subtitleColor[i] = 'var(--darkPurple)'
			}
			if (subtitleColor === "skyBlue"){ 
				subtitle.style.textShadow = '0 0 20px var(--skyBlue), 0 0 30px var(--skyBlue), 0 0 40px var(--skyBlue)'
				this.subtitleColor[i] = 'var(--skyBlue)'
			}
			if (subtitleColor === "cyan"){ 
				subtitle.style.textShadow = '0 0 20px var(--cyan), 0 0 30px var(--cyan), 0 0 40px var(--cyan)'
				this.subtitleColor[i] = 'var(--cyan)'
			}
			if (subtitleColor === "blue"){ 
				subtitle.style.textShadow = '0 0 20px var(--blue), 0 0 30px var(--blue), 0 0 40px var(--blue)'
				this.subtitleColor[i] = 'var(--blue)'
			}
			if (subtitleColor === "pink"){ 
				subtitle.style.textShadow = '0 0 20px var(--pink), 0 0 30px var(--pink), 0 0 40px var(--pink)'
				this.subtitleColor[i] = 'var(--pink)'
			}
			if (subtitleColor === "lightPink"){ 
				subtitle.style.textShadow = '0 0 20px var(--lightPink), 0 0 30px var(--lightPink), 0 0 40px var(--lightPink)'
				this.subtitleColor[i] = 'var(--lightPink)'
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
	glowMouseOver: function() {
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const currShadow = title.style.textShadow
			const currColor = this.titleColor[i]
			title.addEventListener("mouseover", function() {
				title.style.textShadow='0 0 10px #fff, '+currShadow+', 0 0 65px '+currColor+', 0 0 70px '+currColor+''
			})
			title.addEventListener("mouseout", function() {
				title.style.textShadow=currShadow
			})
		}
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currShadow = subtitle.style.textShadow
			const currColor = this.subtitleColor[i]
			subtitle.addEventListener("mouseover", function() {
				subtitle.style.textShadow='0 0 15px #fff, '+currShadow+', 0 0 45px '+currColor+', 0 0 50px '+currColor+''
			})
			subtitle.addEventListener("mouseout", function() {
				subtitle.style.textShadow=currShadow
			})
		}
	},
	blinkAnimation: function(id) {
		// id of div which the Title Element is placed in
		const where = document.getElementById(id);
		// for titles
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const currColor = this.titleColor[i]
			const words = (title.innerHTML).split('')
			title.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const blinking = "<span class='blinkword'>"+words[j]+"</span>"
				title.innerHTML += blinking
			}
			title.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const blinkList = where.querySelectorAll('.blinkword')
				let timerId = setInterval(() => {
					// change style for each letter
					const blink = blinkList[index]
					if (index < words.length) {
						blink.style.color = currColor
					}
					// undo change
					const done = blinkList[last]
					if (last >= 0) {
						done.style.color = 'white'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 150);
			})
		}
		// for subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currColor = this.subtitleColor[i]
			const words = (subtitle.innerHTML).split('')
			subtitle.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const blinking = "<span class='blink'>"+words[j]+"</span>"
				subtitle.innerHTML += blinking
			}
			subtitle.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const blinkList = where.querySelectorAll('.blink')
				let timerId = setInterval(() => {
					// change style for each letter
					const blink = blinkList[index]
					if (index < words.length) {
						blink.style.color = currColor
					}
					// undo change
					const done = blinkList[last]
					if (last >= 0) {
						done.style.color = 'white'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 150);
			})
		}
	},
	flashAnimation: function(id) {
		// id of div which the Title Element is placed in
		const where = document.getElementById(id);
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const currColor = this.titleColor[i]
			const currShadow = title.style.textShadow
			const currSize = parseFloat(title.style.fontSize)
			const words = (title.innerHTML).split('')
			title.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const flashing = "<span class='flashword'>"+words[j]+"</span>"
				title.innerHTML += flashing
			}
			title.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				
				const flashList = where.querySelectorAll('.flashword')
				flashList.forEach(span => {
					span.style.opacity = '0'
				})
				let timerId = setInterval(() => {
					// change color for each letter
					const flash = flashList[index]
					if (index < words.length) {
						flash.style.opacity='1'
						flash.style.textShadow='0 0 10px #fff, 0 0 15px #fff, '+currShadow+', 0 0 65px '+currColor+', 0 0 70px '+currColor+''
						flash.style.fontSize = (currSize+10).toString() +'px'
					}
					// undo change
					const done = flashList[last]
					if (last >= 0) {
						done.style.textShadow=currShadow
						done.style.fontSize = currSize.toString() +'px'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 200);
			})
		}
		// for subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const currColor = this.subtitleColor[i]
			const currShadow = subtitle.style.textShadow
			const currSize = parseFloat(subtitle.style.fontSize)
			const words = (subtitle.innerHTML).split('')
			subtitle.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const flashing = "<span class='flash'>"+words[j]+"</span>"
				subtitle.innerHTML += flashing
			}
			subtitle.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const flashList = where.querySelectorAll('.flash')
				flashList.forEach(span => {
					span.style.opacity = '0'
				})
				let timerId = setInterval(() => {
					// change style for each letter
					const flash = flashList[index]
					if (index < words.length) {
						flash.style.opacity='1'
						flash.style.textShadow='0 0 10px #fff, 0 0 15px #fff, '+currShadow+', 0 0 45px '+currColor+', 0 0 50px '+currColor+''
						flash.style.fontSize = (currSize+5).toString() +'px'
					}
					// undo change
					const done = flashList[last]
					if (last >= 0) {
						done.style.textShadow=currShadow
						done.style.fontSize = currSize.toString() +'px'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 100);
			})
		}
	},
	slideAnimation: function(id) {
		// id of div which the Title Element is placed in
		const where = document.getElementById(id);
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const words = (title.innerHTML).split("")
			title.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const sliding = "<span class='slideword'>"+words[j]+"</span>"
				title.innerHTML += sliding
			}
			title.addEventListener("mouseenter", function() {
				let index = 0;
				const slideList = where.querySelectorAll('.slideword')
				slideList.forEach(span => {
					span.style.opacity = '0'
					span.style.transform = 'translateX(60px)'
					span.style.transition = 'all 0.5s ease'
					span.style.display='inline-block'
				})
				let timerId = setInterval(() => {
					// change color for each letter
					const slide = slideList[index]
					if (index < words.length) {
						slide.style.opacity = '1'
						slide.style.transform = 'translateX(0px)'
						slide.style.padding = '1px'
					}
					index++;
					if (index === words.length+1){
						clearInterval(timerId);
						timerId = null;
						return;
					}
				}, 200);
			})
		}
		// for subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const words = (subtitle.innerHTML).split('')
			subtitle.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const sliding = "<span class='slide'>"+words[j]+"</span>"
				subtitle.innerHTML += sliding
			}
			subtitle.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const slideList = where.querySelectorAll('.slide')
				slideList.forEach(span => {
					span.style.opacity = '0'
					span.style.transform = 'translateX(40px)'
					span.style.transition = 'all 0.5s ease'
					span.style.display='inline-block'
				})
				let timerId = setInterval(() => {
					const slide = slideList[index]
					if (index < words.length) {
						slide.style.opacity = '1'
						slide.style.transform = 'translateX(0px)'
					}
					index++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 150);
			})
		}
	},
	bounceAnimation: function(id) {
		// id of div which the Title Element is placed in
		const where = document.getElementById(id);
		for (let i = 0; i < this.titles.length; i++) {
			const title = this.titles[i]
			const words = (title.innerHTML).split('')
			title.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const bouncing = "<span class='bounceword'>"+words[j]+"</span>"
				title.innerHTML += bouncing
			}
			title.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const bounceList = where.querySelectorAll('.bounceword')
				bounceList.forEach(span => {
					span.style.opacity = '0'
					span.style.transition = 'all 0.3s ease'
					span.style.display='inline-block'
				})
				let timerId = setInterval(() => {
					// change color for each letter
					const bounce = bounceList[index]
					if (index < words.length) {
						bounce.style.opacity = '1'
						bounce.style.transform = 'translateY(-40px)'

					}
					const done = bounceList[last]
					if (last >= 0) {
						done.style.opacity = '1'
						done.style.transform = 'translateY(0px)'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 200);
			})
		}
		// for subtitles
		for (let i = 0; i < this.subtitles.length; i++) {
			const subtitle = this.subtitles[i]
			const words = (subtitle.innerHTML).split('')
			subtitle.innerHTML = ''
			for(let j=0; j<words.length; j++){ 
				const bouncing = "<span class='bounce'>"+words[j]+"</span>"
				subtitle.innerHTML += bouncing
			}
			subtitle.addEventListener("mouseenter", function() {
				let index = 0;
				let last = -1;
				const bounceList = where.querySelectorAll('.bounce')
				bounceList.forEach(span => {
					span.style.opacity = '0'
					span.style.transition = 'all 0.3s ease'
					span.style.display='inline-block'
				})
				let timerId = setInterval(() => {
					// change color for each letter
					const bounce = bounceList[index]
					if (index < words.length) {
						bounce.style.opacity = '1'
						bounce.style.transform = 'translateY(-20px)'

					}
					const done = bounceList[last]
					if (last >= 0) {
						done.style.opacity = '1'
						done.style.transform = 'translateY(0px)'
					}
					index++;
					last++;
					if (index == words.length+1){
						clearInterval(timerId);
						timerId = null;
					}
				}, 200);
			})
		}
	},
}

// Custom Neon Menu Bar
// Each menu bar should be created seperately: const newMenu = NeonMenuGenerator()
function NeonMenuGenerator() {
	this.options = [] // The options for each menu
	//this.changeColor = [] // color scheme for each type of menu
	this.themeColors = ['#5D0D72','#72F2E5', '#0743C8', '#CB0A88', '#FA0990']
	this.themeColorsLight = ['#8d559c','#d4fbf7', '#517bd8', '#df6cb7', '#fc6bbc']
}
NeonMenuGenerator.prototype = {

	// functions for creating elements

	createColorHorizontalMenu: function(id, numOptions) {
	// id: the id of div in html the menu bar should be placed in
	// numOptions: number of Options in the menubar
		if (numOptions === undefined){numOptions = 5} // default is 5
		// create menu
		const neon_colors = this.themeColors
		const neon_colorsLight =  this.themeColorsLight
		const menu = document.createElement('div')
		menu.setAttribute('class', id) // classname is set same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden; '
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')
			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: inline-block; text-align: center; background-color:'+neon_colors[i]+
							'; padding: 10px 22px; color: white; font-size:20px; font-family: Megrim;'+
							'text-decoration: none; overflow-wrap: break-word; font-weight:bold;'
			option.addEventListener("mouseover", function() {
				option.style.cursor = 'url(./themeify/cursor/neon_select_cyan.cur),auto'
				option.style.backgroundColor=neon_colorsLight[i]
				option.style.textShadow='0 0 20px #fff, 0 0 30px '+neon_colors[i]+', 0 0 40px'+neon_colors[i];
			})
			option.addEventListener("mouseout", function() {
				option.style.backgroundColor=neon_colors[i]
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

		const neon_colors = this.themeColors
		const neon_colorsLight =  this.themeColorsLight
		const menu = document.createElement('div')

		menu.setAttribute('class', id) // class name same as id name
		menu.style = 'display: inline-block; background-color: transparent; overflow: hidden;'
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: block; text-align: center; background-color:'+neon_colors[i]+
							'; padding: 17px 15px; color: white; font-size:25px; font-family: Megrim; font-weight:bold;'+
							'text-decoration: none; width: 100px; overflow-wrap: break-word;'
			option.addEventListener("mouseover", function() {
				option.style.cursor = 'url(./themeify/cursor/neon_select_purple.cur),auto'
				option.style.backgroundColor=neon_colorsLight[i]
				option.style.textShadow='0 0 20px #fff, 0 0 30px '+neon_colors[i]+', 0 0 40px'+neon_colors[i];
			})
			option.addEventListener("mouseout", function() {
				option.style.backgroundColor=neon_colors[i]
				option.style.textShadow=''
			})
			menu.append(option) // append item to menu bar
			this.options.push(option) // keep each option in generator
		}
		// append menu to id
		const where = document.getElementById(id);
		where.append(menu)
	},
	createGlowingHorizontalMenu: function(id, numOptions) {
	// id: the id of div in html the menu bar should be placed in
	// numOptions: number of Options in the menubar
		if (numOptions === undefined){numOptions = 5} // default is 5
		// create menu
		const neon_colors = this.themeColors
		const neon_colorsLight =  this.themeColorsLight
		const menu = document.createElement('div')
		menu.setAttribute('class', id)
		menu.style = 'display: inline-block; background-color: transparent; '

		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')
			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: inline-block; text-align: center; border: 2px solid '+neon_colors[i]+
							'; padding: 10px 20px; color: white; font-size:20px; font-family: Megrim;'+
							'text-decoration: none; overflow-wrap: break-word; background-color: black;'
			option.addEventListener("mouseover", function() {
				option.style.cursor = 'url(./themeify/cursor/neon_select_pink.cur),auto'
				option.style.boxShadow= '0px 0px 20px 10px'+neon_colors[i]+''
				option.style.color = neon_colors[i]
			})
			option.addEventListener("mouseout", function() {
				option.style.boxShadow=''
				option.style.color = 'white'
			})
			menu.append(option) // append item to menu bar
			this.options.push(option) // keep each option in generator
		}
		// append menu to id
		const where = document.getElementById(id);
		where.append(menu)
	},
	createGlowingVerticalMenu: function(id, numOptions) {
		if (numOptions === undefined){numOptions = 5} // default of numOption: 5
		const neon_colors = this.themeColors
		const neon_colorsLight =  this.themeColorsLight
		const menu = document.createElement('div')
		menu.setAttribute('class', id)
		menu.style = 'display: inline-block; background-color: transparent; '
		for (let i=0; i < numOptions; i++){
			const option = document.createElement('a')

			option.innerHTML = "Option" + (i+1);
			option.setAttribute('href', '#')
			// for colors
			if(i>=4){i = i%5}
			option.style = 'display: block; text-align: center; border: 2px solid '+neon_colors[i]+
							'; padding: 15px; color: white; font-size:25px; font-family: Megrim;'+
							'text-decoration: none; width: 100px; overflow-wrap: break-word; background-color:black;'
			option.addEventListener("mouseover", function() {
				option.style.cursor = 'url(./themeify/cursor/neon_select_cyan.cur),auto'
				option.style.boxShadow= '0px 0px 20px 10px'+neon_colors[i]+''
				option.style.color = neon_colors[i]
			})
			option.addEventListener("mouseout", function() {
				option.style.boxShadow=''
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

		for (let i = 0; i < this.options.length; i++) {
			const option = this.options[i]
			const currSize = parseFloat(option.style.fontSize)
			option.style.fontFamily=fontname
			if(fontname === 'Monoton'){
				const newSize = currSize-5
				option.style.fontSize = newSize.toString()+'px'
			}
			if(fontname === 'Comfortaa'){
				const newSize = currSize-3
				option.style.fontSize = newSize.toString()+'px'
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

// Custom Neon Buttons
function NeonButtonGenerator() {
	this.buttons = []
	this.buttonColors = []
	this.themeColors = ['#5D0D72','#72F2E5', '#0743C8', '#CB0A88', '#FA0990']
}

NeonButtonGenerator.prototype = {

	// function to create element

	createButton: function(id) {
		const text = "Do Something"
		const button = document.createElement('button')
		button.innerHTML = "<span style='font-size: 18px;'>Click Me!</span>"
		button.style = 'width: 100px; height: 60px; margin: 10px; background: black;' +
		'opacity: 0.9; border: 2px solid var(--cyan); outline:0; color:white; font-size: 30px; font-weight:bold;'
		button.style.fontFamily = 'Megrim' // change to prefered font here
		const where = document.getElementById(id);
		where.append(button)
		this.buttons.push(button)
		this.buttonColors.push('var(--cyan)')
	},

	// function to change style

	themeifyButtons: function() { // when used with other functions, themeifyButtons() should always be called first
		const neon_colors = this.themeColors
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			this.buttonColors[i] = neon_colors[i]
			//button.style.backgroundColor = neon_colors[i]
			button.style.color = neon_colors[i]
			button.style.borderColor = neon_colors[i]
			
			button.addEventListener("mouseout", function() {
				//button.style.backgroundColor= neon_colors[i]
				button.style.borderColor=neon_colors[i]
				button.style.color = neon_colors[i]
			})
		}
	},

	// functions for special effects 

	colorBorderMouseOver: function() {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]

			button.addEventListener("mouseover", function() {
				button.style.cursor = 'url(./themeify/cursor/neon_select_pink.cur),auto'
				button.style.backgroundColor= buttonColor
				button.style.borderWidth='3px'
				button.style.color='white'
				button.style.fontWeight='bold'
				button.style.opacity='1'
			})
			button.addEventListener("mouseout", function() {
				button.style.backgroundImage= ''
				button.style.backgroundColor= 'black'
				button.style.color=buttonColor
				button.style.fontWeight='normal'
				button.style.opacity='0.8'
			})
		}
	},
	glowMouseOver: function() {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]
			button.addEventListener("mouseover", function() {
				button.style.cursor = 'url(./themeify/cursor/neon_select_purple.cur),auto'
				button.style.boxShadow= '0px 0px 20px 5px'+buttonColor+''
			})
			button.addEventListener("mouseout", function() {
				button.style.boxShadow=''
			})
		}
	},
	realPressedEffect: function() {
		for (let i = 0; i < this.buttons.length; i++) {
			const button = this.buttons[i]
			const buttonColor = this.buttonColors[i]
			button.style.boxShadow= '0 9px gray'
			button.addEventListener("mousedown", function() {
				button.style.cursor = 'url(./themeify/cursor/neon_select_cyan.cur),auto'
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

// Custom Neon Text/Image (Input) Boxes
function NeonInputBoxGenerator() {
	this.inputTitles = []
	this.inputs = []
	this.themeColors = ['#5D0D72','#72F2E5', '#0743C8', '#CB0A88', '#FA0990']
}

NeonInputBoxGenerator.prototype = {

	// functions to create elements

	createTitle: function(id, title) {
		// call this function before any creation of Textboxes
		// creates small subtitle for text/image boxes
		const textTitle = document.createElement('div')
		textTitle.innerHTML = title
		textTitle.setAttribute('class', 'textTitle')
		textTitle.style = 'font-family: Megrim; font-size: 30px; color: white;' + 
						  'text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px var(--cyan), 0 0 30px var(--cyan), 0 0 40px var(--cyan);'
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
		textBox.style = 'width: 450px; height: 200px;  padding: 10px; background: black; font-size: 25px;' +
						'border: 2px solid; border-color: var(--cyan); overflow: scroll; font-family: Megrim; color: white;'
		const where = document.getElementById(id);
		where.append(textBox)
		this.inputs.push(textBox)
	},
	createImageFrame: function(id, imageSrc, type) { 
		// id: of div to place the textbox in
		// imageSrc: the link to image to be inserted
		// type: contain (to insert whole image), cover (to have image cover the whole frame)
		  // if you want the image to cover the whole box, use 'cover'
		  // if you want the whole image to be inside use 'contain'
		const textBox = document.createElement('div')
		textBox.style = 'width: 450px; height: 300px; background-color:black; ' +
						'border: 4px solid; border-color: var(--lightPink); '
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

	themeifyNeon: function(color) { 
		// color: user can choose the color of the inputBox
		const neon_colors = this.themeColors
		var currColor = neon_colors[0]
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			currColor = input.style.borderColor
			input.style.borderColor = currColor
			input.style.boxShadow = '0 0 20px 10px '+ currColor+''
			input.style.margin = '25px 15px'
		}
		// glow all titles
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.color = 'white'
			title.style.textShadow = '0 0 10px '+currColor+', 0 0 15px '+currColor+', 0 0 20px '+currColor+',0 0 30px '+currColor+',0 0 40px '+currColor+''
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

			// mouse change
			const currCursor = textBox.style.cursor

			textBox.addEventListener("mouseover", function(){
				textBox.style.cursor = 'url(./themeify/cursor/neon_text_purple.cur),auto'
			})
			// back to normal
			textBox.addEventListener("mouseout", function(){
				textBox.style.cursor = currCursor
			})

		}
	},
	changeSize: function(width, height, titleFontSize, contentFontSize) {
		// enter new width, height for text/image box and new fontsize for font
		// give 0 as argument to keep default size

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
		// titleFont: font for inputbox title
		// contentFont: font for inputbox content
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.fontFamily = titleFont
		}
		for (let i = 0; i < this.inputs.length; i++) {
			const input = this.inputs[i]
			input.style.fontFamily = contentFont
		}
	},
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
			if (input.style.boxShadow != ''){
				input.style.boxShadow = '0 0 20px 10px '+ boxColor+''
			}
			input.style.color = contentColor
		}
		// glow all titles
		for (let i = 0; i < this.inputTitles.length; i++) {
			const title = this.inputTitles[i]
			title.style.color = 'white'
			title.style.textShadow = '0 0 5px #fff, 0 0 10px '+titleColor+', 0 0 15px '+titleColor+', 0 0 20px '+titleColor+',0 0 30px '+titleColor+',0 0 40px '+titleColor+''		
		}
	},
	
	// Functions for Animation

	glowOnMouseOver: function(id) {
		// glow effect when mouse over for given id inputbox element 

		const content = document.getElementById(id)
		const elem = content.querySelectorAll('.textBox')[0] // the main element to place effect on
		
		const currColor = elem.style.borderColor
		const currShadow = elem.style.boxShadow
		// add mouse effect
		elem.addEventListener("mouseover", function(){
			if (currShadow == ''){
				elem.style.boxShadow = '0 0 20px 10px '+ currColor+''
			}else {
				elem.style.boxShadow = '0 0 15px 1px #fff,0 0 20px 20px '+ currColor+''
			}
		})
		// back to normal
		elem.addEventListener("mouseout", function(){
			elem.style.boxShadow = currShadow
		})
	},
	animateGlowing: function(id) { 
		// places continous glowing effect animation on the given id element

		const content = document.getElementById(id)
		const elem = content.querySelectorAll('.textBox')[0]
		elem.style.transition = 'all 2s ease'
		elem.style.margin = '15px 10px'
		const currColor = elem.style.borderColor
		const currShadow = elem.style.boxShadow

		// constant loop
		let i = 0;
		setInterval(function(){
			if(i == 0) {
		    	if (currShadow == ''){
					elem.style.boxShadow = '0 0 20px 10px '+ currColor+''
				}else {
					// decrease shadow size if already exists
					elem.style.boxShadow = '0 0 20px 1px '+ currColor+''
				}
		        i = 1;
		    } else {
		    	elem.style.boxShadow = currShadow
		        i = 0;
		    }
		},1500);
		
	},
}

global.NeonTitleGenerator = global.NeonTitleGenerator || NeonTitleGenerator
global.NeonMenuGenerator = global.NeonMenuGenerator || NeonMenuGenerator
global.NeonButtonGenerator = global.NeonButtonGenerator || NeonButtonGenerator
global.NeonInputBoxGenerator = global.NeonInputBoxGenerator || NeonInputBoxGenerator
	
})(window);


