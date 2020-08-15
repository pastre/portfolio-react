var model = 
{
	isLoading: true,
	repos: [
		'https://github.com/pastre/color-palette',
		'https://github.com/pastre/bubbles',
		'https://github.com/pastre/nc4',
		'https://github.com/pastre/pick-me-a-movie',
		'https://github.com/pastre/pocket-pastre',
		'https://github.com/pastre/studying-with-pc',
		'https://github.com/pastre/startupeiros',
		'https://github.com/pastre/celeste',
		'https://github.com/pastre/nc2',
		'https://github.com/pastre/Activity-Manager',
	],
	urls: [
		'https://apps.apple.com/br/app/harmonify-cores-e-paletas/id1467642991',
		'https://apps.apple.com/br/app/bubbles-why-not/id1458220809',
		'https://apps.apple.com/br/app/pocket-pastre/id1497205539',
		'https://apps.apple.com/br/app/the-movie-genie/id1462797983',
		'https://apps.apple.com/br/app/zombie-apocalypse/id1504183894',
		'https://apps.apple.com/br/app/studying-with-pc/id1463404891',
		'https://apps.apple.com/br/app/cube-h/id1491076636',
		'https://apps.apple.com/br/app/space/id1477382763',
		'https://apps.apple.com/br/app/jumpy-aliens/id1500965920',
		'https://apps.apple.com/br/app/activities-manager/id1464430414',
	],
	loadedApps: []
};


doScrap(htmlString, url) {
	var el = document.createElement( 'html' );
	el.innerHTML = htmlString;
	const name = el.getElementsByClassName("product-header__title app-header__title")[0].innerHTML.split("<")[0].trim()
	const descriptionHTML = el.getElementsByClassName("we-truncate we-truncate--multi-line we-truncate--interactive ember-view l-column small-12 medium-9 large-8")[0].children[0].innerHTML
	const imageTags = el.getElementsByClassName("l-row l-row--peek we-screenshot-viewer__screenshots-list")[0].getElementsByTagName("li")
	var images = []

	for(let li of imageTags) {
	const source = li.getElementsByClassName("we-artwork__source")[0].srcset.split(" ")[0]
	images.push(source)
	}

	var joined = model.loadedApps.concat({
		name: name.includes('Harmonify') ? 'Harmonify': name.includes('Bubbles') ? "Bubbles" : name,
		descriptionHTML: descriptionHTML,
		images: images,
		appstoreUrl: url,
		githubUrl: model.repos[model.urls.indexOf(url)]
		}
	)
	console.log("Loaded ", name)
	this.setState({ loadedApps:  joined })
}


doGet(url) {
	var xhr = new XMLHttpRequest()

	xhr.addEventListener('load', () => {
		this.doScrap(xhr.responseText, url)
    })

	xhr.addEventListener('error', () => {
		console.log("DEU RUIM")
    })
    // open the request with the verb and the url
    xhr.open('GET', url)
    // send the request
    xhr.send()
}

loadApps() {
	console.log("VOU CARREGAR CARALHO")
	return;
	model.urls.forEach( value => this.doGet(value) )
}


isLoading() {
	return this.state.loadedApps.length !== this.state.urls.length
}
