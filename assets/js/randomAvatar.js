
// Generating New Random Avatar from Dicebear in the Pixel Art Style
// with random background color in hsl format.

function getRandomAvatar(seedLength = 10) {
	let seedLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let avatarURLBase = 'https://avatars.dicebear.com/api/pixel-art/'
	let avatarURLSVGFormat = '.svg'
	let avatarURL = ''
	
	function generateRandomIndexNumber() {
		return Math.floor(Math.random() * seedLetters.length)
	}
	
	!function generateRandomSeed() {
		let seed = ''
		
		for (let index = 0; index < seedLength; index++) {
			seed += seedLetters[generateRandomIndexNumber()]
		}
		
		avatarURL = `${avatarURLBase}${seed}${avatarURLSVGFormat}`
	}()
	
	return avatarURL
}

function getRandomBackgroundColor() {
	let hue = ''
	let saturation = ''
	let brightness = ''
	
	function generateRandomColorNumber(str = '%', max = 100) {
		return `${Math.floor(Math.random() * max)}${str}`
	}
	
	hue = generateRandomColorNumber('deg', 360)
	saturation = generateRandomColorNumber()
	brightness = generateRandomColorNumber()
	
	return `hsl(${hue}, ${saturation}, ${brightness})` 
}

// I want each avatar on the mockup to be randomized **but** I want
// both avatars contained in the header and the trending avatar of the
// same user to be identical.

!function addRandomAvatar() {
	let avatars = document.querySelectorAll('.isRandomAvatar')
			avatars.forEach((avatar) => {
				avatar.setAttribute('src', getRandomAvatar())
				avatar.style.backgroundColor = getRandomBackgroundColor()
			})
}()

!function sameRandomAvatar() {
	let headerAvatar1 = document.querySelector('.header-user-avatar')
			headerAvatar1Src = headerAvatar1.getAttribute('src')
			headerAvatar1BG = headerAvatar1.style.backgroundColor
			
	let headerAvatar2 = document.querySelector('.header-greetings-user-avatar')
			headerAvatar2.setAttribute('src', headerAvatar1Src)
			headerAvatar2.style.backgroundColor = headerAvatar1BG
			
	let trendingAvatar = document.querySelector('.isSameAvatar')
			trendingAvatar.setAttribute('src', headerAvatar1Src)
			trendingAvatar.style.backgroundColor = headerAvatar1BG
}()
