/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'school': 'school.png'

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Yui',
		color: '#5bcaff',
		sprites: {
			normal: 'Yui.png'
		},
		nvl: false
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show scene school with fadeIn',
		'show character y normal at center with fadeIn',
		'y Hey there! Good to see you {{player.name}}. Break time finally, huh? This Algebra book is going to be the end of me.',
		{
			'Choice': {
				'Dialog': 'y What do you think?',
				'HelpWithMath': {
					'Text': 'Yeah, math can be really tough. Need any help?',
					'Do': 'jump HelpWithMath'
				},
				'AfterSchool': {
					'Text': 'Break time is a lifesaver. So, what are you doing after school?',
					'Do': 'jump AfterSchool'
				}
			}
		}
	],

	'HelpWithMath': [
		'y Wow, really? That would be amazing! I\'m having a hard time understanding quadratic equations.',
		'show character y normal at center with fadeIn',
		'No worries, we can go through it step by step. Quadratics aren\'t so bad once you get the hang of it.',
		'y You\'re a lifesaver. Maybe we can study together sometime?',
		{
			'Choice': {
				'Dialog': 'y Would you like to study together sometime?',
				'StudyYes': {
					'Text': 'Sure, studying together sounds good!',
					'Do': 'jump StudyYes'
				},
				'StudyNo': {
					'Text': 'Actually, I prefer studying alone, but I can still help you out.',
					'Do': 'jump StudyNo'
				}
			}
		}
	],

	'AfterSchool': [
		'y After school? Hmm, I\'m thinking of joining a club but I\'m not sure which one yet. Any suggestions?',
		'show character y normal at center with fadeIn',
		'How about the art club? I heard they\'re doing some cool projects.',
		'y That does sound interesting. Are you in any clubs?',
		{
			'Choice': {
				'Dialog': 'y Are you in any clubs?',
				'ClubYes': {
					'Text': 'Yeah, I\'m in the robotics club. It\'s really fun!',
					'Do': 'jump ClubYes'
				},
				'ClubNo': {
					'Text': 'Not yet, I\'m still figuring it out. Maybe we could join one together?',
					'Do': 'jump ClubNo'
				}
			}
		}
	],

	'StudyYes': [
		'y That sounds like a plan! Let\'s ace that Algebra test!',
		'show character y normal at center with fadeIn',
		'end'
	],

	'StudyNo': [
		'hide character y fadeOut',
		'y That\'s alright. Any help is appreciated!',
		'end'
	],

	'ClubYes': [
		'y Wow, robotics club sounds really intense but fun!',
		'show character y normal at center with fadeIn',
		'end'
	],

	'ClubNo': [
		'y That could be a lot of fun, exploring a new club together!',
		'show character y normal at center with fadeIn',
		'end'
	]
});



/*
monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show background school with fadeIn',
		'show character y normal at center with fadeIn',
		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you not already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});

*/