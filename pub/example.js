/* CITATION: Outside Sources used to build Themeify Library:
	- Vanila Javascript Animate method (used in animate properties for inputboxes/header): 
	  - https://medium.com/@vilvaathiban/javascript-animations-element-animate-vs-requestanimationframe-vs-conventional-animation-550380b9e05e
	  - https://www.w3schools.com/js/js_htmldom_animate.asp
	- Box Shadow for glow and retro textboxes: https://www.w3schools.com/cssref/css3_pr_box-shadow.asp
	- Text Glow Effect: https://www.w3schools.com/howto/howto_css_glowing_text.asp
	- setTimer/setInterval: https://javascript.info/settimeout-setinterval
	- CSS Transitions: https://thoughtbot.com/blog/transitions-and-transforms
	- CSS box-shadow Demo (Glow box): https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
	- Basic JavaScript, CSS guides: https://www.w3schools.com/
*/

// Retro Theme
function themeifyRetro() {

	// Retro Titles
	const title = new RetroTitleGenerator()
	title.createTitle('titleRegular','Regular Title');
	title.createSubtitle('titleRegular','Regular Subtitle')
	title.shadowMouseOver();

	const title2= new RetroTitleGenerator()
	title2.createTitle('titleLarge','Large Title');
	title2.createSubtitle('titleLarge','Large Subtitle')
	title2.themeifyTitle('aquaGreen', 'red');
	title2.changeSize('120px', '70px');
	title2.shadowMouseOver();

	const title3= new RetroTitleGenerator()
	title3.createTitle('titleSmall','Small Title1');
	title3.createSubtitle('titleSmall','Small Subtitle1')
	title3.themeifyTitle('darkBlue', 'yellow');
	title3.changeSize('50px', '30px');
	title3.shadowMouseOver();
	//title3.changeFont('bratsy_script_demoreguler')

	// Retro Menu Bars
	const menuCH = new RetroMenuGenerator()
	menuCH.createColorHorizontalMenu('colorHorizontalMenu',5)
	//menuCH.changeOneOptionName(0, 'Home')
	//menuCH.changeAllOptions('Home', 'About', 'Content', 'Profile', 'Settings')

	const menuCV = new RetroMenuGenerator()
	menuCV.createColorVerticalMenu('colorVerticalMenu', 5)

	const menuDiskH = new RetroMenuGenerator()
	menuDiskH.createDiskHorizontalMenu('diskHorizontalMenu', 5)

	const menuDiskV = new RetroMenuGenerator()
	menuDiskV.createDiskVerticalMenu('diskVerticalMenu', 5)

	// Retro Buttons
	const buttonBorder = new RetroButtonGenerator()
	for(let i=0; i<5; i++){
		buttonBorder.createButton('buttonBorder');
	}buttonBorder.themeifyButtons();
	buttonBorder.colorBorderMouseOver();

	const buttonImg = new RetroButtonGenerator()
	for(let i=0; i<5; i++){
		buttonImg.createButton('buttonImgPressed');
	}buttonImg.themeifyButtons();
	buttonImg.imageWhenPressed();

	const buttonReal = new RetroButtonGenerator()
	for(let i=0; i<5; i++){
		buttonReal.createButton('buttonRealPressed');
	}buttonReal.themeifyButtons();
	buttonReal.realPressedEffect();


	// Retro Text Box
	const regularTextBox = new RetroInputBoxGenerator()
	regularTextBox.createTitle('textbox','Regular Textbox Title')
	regularTextBox.createTextBox('textbox', 'This is the content for my first textbox! <br/>'+
	'<br/>'+
	'Lorem ipsum dolor sit amet, illum falli qui id. Vix id iriure cotidieque, detracto partiendo nec id, eos assum euismod at. Nam ad menandri eleifend forensibus, eos dolorem expetenda eu. Sed in quem noster disputationi.Mel in epicurei postulant salutandi. Invidunt oporteat ne mel, id veri veritus consectetuer usu. '+
	'Eu tantas insolens repudiandae vel. Sit volumus eligendi dignissim no.Et sed dolor animal. Veri argumentum deterruisset ne pro, sed dicant regione legimus et. Ne elit duis ludus usu. Pri posse quodsi ad, etiam reformidans ea pri. His ea veri debitis, in qui dicunt audire prompta.'+
	'Wisi mazim mediocrem his te, ignota assentior his ad. Nam prodesset constituam in, te vis melius labores propriae. Quem moderatius temporibus ut vis, vim id adolescens incorrupte efficiantur. Posse periculis ei ius, at autem vidisse menandri nam.'+
	'Sit id cibo aliquam recteque, cu option oblique pro. Te sea iisque percipitur, etiam labore vocent mei ne. Eum et euismod menandri eleifend, quis oratio sapientem pri ut. No vel mucius timeam intellegat, tota tantas regione te quo.')
	regularTextBox.changeSize('450px', '250px', '0', '0')

	const editableTextBox = new RetroInputBoxGenerator()
	editableTextBox.createTitle('editabletextbox','Editable Textbox Title')
	editableTextBox.createTextBox('editabletextbox', 'This is the content for Editable textbox! <br/>'+
	'<br/>' + 'Try editing this text!<br/>' + '<br/>' 
	+ 'This textbox also has changeColor() function applied to it!')
	editableTextBox.makeEditable('editabletextbox')
	// changeColor: function(titleColor, contentColor, boxColor)
	editableTextBox.changeColor('var(--red)', 'var(--lightGreen)' , 'var(--lightGreen)')
	editableTextBox.changeSize('450px', '250px', '0', '0')

	const regularImgBox = new RetroInputBoxGenerator()
	regularImgBox.createTitle('imgbox','Regular Image Frame Title')
	regularImgBox.createImageFrame('imgbox', 'retro_img.jpg', 'cover')  // only enter image name inside img folder
	//regularImgBox.themeifyRainbow()
	regularImgBox.changeSize('450px', '300px', '0', '0')

	const rainbowTextBox = new RetroInputBoxGenerator()
	rainbowTextBox.createTitle('textboxRainbow','Rainbow Textbox Title')
	rainbowTextBox.createTextBox('textboxRainbow', 'This is a textbox with rainbow themeify effect! '+
	'You can use this effect as Image Frame as well!!<br/>'+
	'<br/>'+
	'Lorem ipsum dolor sit amet, illum falli qui id. Vix id iriure cotidieque, detracto partiendo nec id, eos assum euismod at. Nam ad menandri eleifend forensibus, eos dolorem expetenda eu. Sed in quem noster disputationi.Mel in epicurei postulant salutandi. Invidunt oporteat ne mel, id veri veritus consectetuer usu. '+
	'Eu tantas insolens repudiandae vel. Sit volumus eligendi dignissim no.Et sed dolor animal. Veri argumentum deterruisset ne pro, sed dicant regione legimus et. Ne elit duis ludus usu. Pri posse quodsi ad, etiam reformidans ea pri. His ea veri debitis, in qui dicunt audire prompta.'+
	'Wisi mazim mediocrem his te, ignota assentior his ad. Nam prodesset constituam in, te vis melius labores propriae. Quem moderatius temporibus ut vis, vim id adolescens incorrupte efficiantur. Posse periculis ei ius, at autem vidisse menandri nam.'+
	'Sit id cibo aliquam recteque, cu option oblique pro. Te sea iisque percipitur, etiam labore vocent mei ne. Eum et euismod menandri eleifend, quis oratio sapientem pri ut. No vel mucius timeam intellegat, tota tantas regione te quo.')
	rainbowTextBox.themeifyRainbow()
	//changeSize: function(width, height, titleFontSize, contentFontSize)
	rainbowTextBox.changeSize('200px', '300px', '0', '0')

	const cdTextBox = new RetroInputBoxGenerator()
	cdTextBox.createTitle('textboxCD','CD Textbox Title')
	cdTextBox.createTextBox('textboxCD', ' This is a textbox with CD themeify effect! '+
	'You can use this effect as Image Frame as well!!<br/>')
	cdTextBox.themeifyCD()
	cdTextBox.changeSize('200px', '300px', '0', '0')
	//changeFont: function(titleFont, contentFont)
	//cdTextBox.changeFontR('Bungee Inline','Bungee Inline')

	const flipTextbox = new RetroInputBoxGenerator()
	flipTextbox.createTitle('textboxFlip','Animate: Flip Textbox Title')
	flipTextbox.createTextBox('textboxFlip', ' This is a textbox with Flip Animation effect! '+
	'You can use this effect as Image Frame as well!!')
	//changeText: function(newTitle, newContent){
	//flipTextbox.changeText('my new title', 'my new text content!')
	flipTextbox.changeSize('300px', '200px', '30px', '0')
	flipTextbox.themeifyCD()
	flipTextbox.animateFlip('textboxFlip', "Hover over me to flip & view the content!")

	const spinTextbox = new RetroInputBoxGenerator()
	spinTextbox.createTitle('textboxSpin','Animate: Spin Textbox Title')
	spinTextbox.createTextBox('textboxSpin', 'Hover over me to spin the box! </br>'+
	' This is a textbox with Spin Animation effect! </br>'+
	'You can use this effect as Image Frame as well!!')
	spinTextbox.changeSize('300px', '200px', '30px', '18px')
	spinTextbox.themeifyCD()
	spinTextbox.animateSpin('textboxSpin')

	const shineTextbox = new RetroInputBoxGenerator()
	shineTextbox.createTitle('textboxShine','Animate: Shine Textbox Title')
	shineTextbox.createImageFrame('textboxShine', 'retro_img2.jpg', 'cover')
	shineTextbox.changeSize('300px', '300px', '25px', '0')
	shineTextbox.themeifyRainbow()
	shineTextbox.animateShine('textboxShine')

	const revealTextbox = new RetroInputBoxGenerator()
	revealTextbox.createTitle('textboxReveal','Animate: Reveal Textbox Title')
	revealTextbox.createTextBox('textboxReveal', ' This is a textbox with Reveal Animation effect! '+
	'You can use this effect as Image Frame as well!!')
	revealTextbox.changeSize('300px', '200px', 0, 0)
	revealTextbox.themeifyRainbow()
	revealTextbox.animateReveal('textboxReveal', 'Click Me to Reveal!')

}

// // Neon Theme
function themeifyNeon() {

	// Neon Titles
	const neonTitle1 = new NeonTitleGenerator()
	neonTitle1.createTitle('titleRegular','Regular Title');
	neonTitle1.createSubtitle('titleRegular','Regular Subtitle')

	const neonTitle2 = new NeonTitleGenerator()
	neonTitle2.createTitle('titleLarge','Large Title');
	neonTitle2.createSubtitle('titleLarge','Large Subtitle')
	neonTitle2.changeSize('120px', '60px');
	neonTitle2.themeifyTitle('darkPurple', 'skyBlue');

	const neonTitle3 = new NeonTitleGenerator()
	neonTitle3.createTitle('titleSmall','Small Title');
	neonTitle3.createSubtitle('titleSmall','Small Subtitle')
	neonTitle3.changeSize('50px', '30px');
	neonTitle3.themeifyTitle('blue', 'cyan');

	// Neon Titles Animation
	const glowTitle = new NeonTitleGenerator()
	glowTitle.createTitle('glowTitle','Glowing Title');
	glowTitle.createSubtitle('glowTitle','Hover Over Me to see me GLOW!')
	glowTitle.glowMouseOver()

	const blinkTitle = new NeonTitleGenerator()
	blinkTitle.createTitle('blinkTitle','Blinking Title');
	blinkTitle.createSubtitle('blinkTitle','Hover Over Me to see me BLINK!')
	blinkTitle.themeifyTitle('blue', 'cyan');
	blinkTitle.blinkAnimation('blinkTitle')

	const flashTitle = new NeonTitleGenerator()
	flashTitle.createTitle('flashTitle','Flashing Title');
	flashTitle.createSubtitle('flashTitle','Hover Over Me to see me FLASH!')
	flashTitle.themeifyTitle('darkPurple', 'cyan');
	flashTitle.flashAnimation('flashTitle')

	const slideTitle = new NeonTitleGenerator()
	slideTitle.createTitle('slideTitle','Sliding Title');
	slideTitle.createSubtitle('slideTitle','Hover Over Me to see me SLIDE!')
	slideTitle.themeifyTitle('lightPink', 'cyan');
	slideTitle.slideAnimation('slideTitle')

	const bounceTitle = new NeonTitleGenerator()
	bounceTitle.createTitle('bounceTitle','Bouncing Title');
	bounceTitle.createSubtitle('bounceTitle','Hover Over Me to see me BOUNCE!')
	bounceTitle.themeifyTitle('cyan', 'pink');
	bounceTitle.bounceAnimation('bounceTitle')

	// Neon Menu Bars
	const menuHorizontal = new NeonMenuGenerator()
	menuHorizontal.createColorHorizontalMenu('colorHorizontalMenu',5)
	//menuHorizontal.changeOneOptionNameN(0, 'Home')
	//menuHorizontal.changeAllOptionsN('Home', 'About', 'Content', 'Profile', 'Settings')
	const menuVertical = new NeonMenuGenerator()
	menuVertical.createColorVerticalMenu('colorVerticalMenu', 5)

	const menuGlowHorizontal = new NeonMenuGenerator()
	menuGlowHorizontal.createGlowingHorizontalMenu('glowHorizontalMenu',5)
	//menuGlowHorizontal.changeFontN('Comfortaa')

	const menuGlowVertical = new NeonMenuGenerator()
	menuGlowVertical.createGlowingVerticalMenu('glowVerticalMenu', 5)
	//menuGlowVertical.changeFontN('Comfortaa')

	// Neon Buttons
	const buttonBorder = new NeonButtonGenerator()
	for(let i=0; i<5; i++){
		buttonBorder.createButton('buttonBorder');
	}buttonBorder.themeifyButtons();
	buttonBorder.colorBorderMouseOver();

	const buttonImg = new NeonButtonGenerator()
	for(let i=0; i<5; i++){
		buttonImg.createButton('buttonImgPressed');
	}buttonImg.themeifyButtons();
	buttonImg.glowMouseOver();

	const buttonReal = new NeonButtonGenerator()
	for(let i=0; i<5; i++){
		buttonReal.createButton('buttonRealPressed');
	}buttonReal.themeifyButtons();
	buttonReal.realPressedEffect();

	// Neon Text Box
	const regularTextBox = new NeonInputBoxGenerator()
	regularTextBox.createTitle('textbox','Regular Textbox Title')
	regularTextBox.createTextBox('textbox', 'This is the content for Display textbox! <br/>'+
	'<br/>'+
	'Lorem ipsum dolor sit amet, illum falli qui id. Vix id iriure cotidieque, detracto partiendo nec id, eos assum euismod at. Nam ad menandri eleifend forensibus, eos dolorem expetenda eu. Sed in quem noster disputationi.Mel in epicurei postulant salutandi. Invidunt oporteat ne mel, id veri veritus consectetuer usu. '+
	'Eu tantas insolens repudiandae vel. Sit volumus eligendi dignissim no.Et sed dolor animal. Veri argumentum deterruisset ne pro, sed dicant regione legimus et. Ne elit duis ludus usu. Pri posse quodsi ad, etiam reformidans ea pri. His ea veri debitis, in qui dicunt audire prompta.'+
	'Wisi mazim mediocrem his te, ignota assentior his ad. Nam prodesset constituam in, te vis melius labores propriae. Quem moderatius temporibus ut vis, vim id adolescens incorrupte efficiantur. Posse periculis ei ius, at autem vidisse menandri nam.'+
	'Sit id cibo aliquam recteque, cu option oblique pro. Te sea iisque percipitur, etiam labore vocent mei ne. Eum et euismod menandri eleifend, quis oratio sapientem pri ut. No vel mucius timeam intellegat, tota tantas regione te quo.')

	const editableTextBox = new NeonInputBoxGenerator()
	editableTextBox.createTitle('editabletextbox','Editable Textbox Title')
	editableTextBox.createTextBox('editabletextbox', 'This is the content for Editable textbox! <br/>'+
	'<br/>' + 'Try editing this text!<br/>' + '<br/>' 
	+ 'This textbox also has changeColor() function applied to it!')
	editableTextBox.makeEditable('editabletextbox')
	editableTextBox.changeColor('var(--blue)', 'var(--darkPurple)','var(--blue)')


	const regularImgBox = new NeonInputBoxGenerator()
	regularImgBox.createTitle('imgbox','Regular Image Frame Title')
	regularImgBox.createImageFrame('imgbox', 'neon_img.png', 'contain')  // only enter image name inside img folder


	const neonTextBox = new NeonInputBoxGenerator()
	neonTextBox.createTitle('textboxNeon','Neon Textbox Title')
	neonTextBox.createTextBox('textboxNeon', 'This is a textbox with neon themeify effect! '+
	'You can use this effect as Image Frame as well!!<br/>'+
	'<br/>'+
	'This InputBox has the changeSizeN() and changeColorN() functions applied to them.<br/>'+
	'<br/>'+
	'Lorem ipsum dolor sit amet, illum falli qui id. Vix id iriure cotidieque, detracto partiendo nec id, eos assum euismod at. Nam ad menandri eleifend forensibus, eos dolorem expetenda eu. Sed in quem noster disputationi.Mel in epicurei postulant salutandi. Invidunt oporteat ne mel, id veri veritus consectetuer usu. '+
	'Eu tantas insolens repudiandae vel. Sit volumus eligendi dignissim no.Et sed dolor animal. Veri argumentum deterruisset ne pro, sed dicant regione legimus et. Ne elit duis ludus usu. Pri posse quodsi ad, etiam reformidans ea pri. His ea veri debitis, in qui dicunt audire prompta.'+
	'Wisi mazim mediocrem his te, ignota assentior his ad. Nam prodesset constituam in, te vis melius labores propriae. Quem moderatius temporibus ut vis, vim id adolescens incorrupte efficiantur. Posse periculis ei ius, at autem vidisse menandri nam.'+
	'Sit id cibo aliquam recteque, cu option oblique pro. Te sea iisque percipitur, etiam labore vocent mei ne. Eum et euismod menandri eleifend, quis oratio sapientem pri ut. No vel mucius timeam intellegat, tota tantas regione te quo.')
	neonTextBox.themeifyNeon()
	//changeSize: function(width, height, titleFontSize, contentFontSize)
	neonTextBox.changeSize('450px', '0', '0', '0')
	//changeColor: function(titleColor, contentColor, boxColor)
	neonTextBox.changeColor('var(--darkPurple)', 'var(--cyan)','var(--darkPurple)')


	// Neon Textbox Animations

	const glowTextbox = new NeonInputBoxGenerator()
	glowTextbox.createTitle('textboxGlow','Glow on MouseOver')
	glowTextbox.createTextBox('textboxGlow', ' This is a textbox that glows on MouseOver! </br>'+
	'You can use this effect as Image Frame as well!!')
	//changeText: function(newTitle, newContent){
	//glowTextbox.changeText('my new title', 'my new text content!')
	glowTextbox.themeifyNeon()
	glowTextbox.changeColor('var(--pink)', 'var(--pink)','var(--pink)')
	glowTextbox.glowOnMouseOver('textboxGlow', "Hover over me to make me glow!")


	const shiningTextbox = new NeonInputBoxGenerator()
	shiningTextbox.createTitle('textboxGlowing','Constantly Glowing Textbox')
	shiningTextbox.createTextBox('textboxGlowing', 'This is a textbox with Glowing Animation effect! </br>'+
	'You can use this effect as Image Frame as well!!')
	shiningTextbox.themeifyNeon()
	shiningTextbox.changeColor('var(--darkPurple)', 'var(--darkPurple)','var(--cyan)')
	shiningTextbox.animateGlowing('textboxGlowing')

}

const title = document.title;
if (title === "Retro"){
	// Title for Retro Theme
	const htmlTitle = new RetroTitleGenerator()
	htmlTitle.createTitle('htmlTitle','Themeify: Retro');
	htmlTitle.createSubtitle('htmlTitle','User-friendly elements to create Retro theme website!')
	htmlTitle.changeSize('0','35');
	htmlTitle.shadowMouseOver();

	// paste elements for Retro Theme
	themeifyRetro();
}
if (title === "Neon") {
	// Title for Neon Theme
	const neonTitle = new NeonTitleGenerator()
	neonTitle.createTitle('neonTitle','Themeify: Neon');
	neonTitle.createSubtitle('neonTitle','User-friendly elements to create Neon theme website!')
	neonTitle.changeSize('120px', '45px');
	neonTitle.glowMouseOver()

	// paste elements for Neon Theme
	themeifyNeon();
}



