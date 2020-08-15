import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

import GithubIcon from '../navbar/githubWhite.svg';
import AppleIcon from './applelogo.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Work.css';
import useWindowSize from '../App'

const SHOULD_MOCK = false

class Work extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
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
	}

	componentDidMount() {
		this.loadApps()
	}

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

  		var joined = this.state.loadedApps.concat({
				name: name.includes('Harmonify') ? 'Harmonify': name.includes('Bubbles') ? "Bubbles" : name,
				descriptionHTML: descriptionHTML,
				images: images,
				appstoreUrl: url,
				githubUrl: this.state.repos[this.state.urls.indexOf(url)]
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


	workCell(work, isImageFirst) {

		if (isImageFirst) return (
			<div className = "Work-workCell">
				{ this.workCellImage(work) }
				{ this.workCellContent(work) }
			</div>
		);


		return (
			<div className = "Work-workCell">
				{ this.workCellContent(work) }
				{ this.workCellImage(work) }
			</div>
		)
	}

	workCellImage(work) {

		return (
			<Carousel className = "Work-cellImage"
				showArrows={true} showThumbs={false}
				showIndicators={false} showStatus={false}
				dynamicHeight={false}
				width={ 100 } >
				 <img src= {work.images[0]} />
				 <img src= {work.images[1]} />
				 <img src= {work.images[2]} />
			</Carousel>	
		)
	}

	workCellContent(work) {
		return (

				<div className = "Work-cellContent">
					<div className = "Work-cellTitleContainer">

						<div className = "Work-cellTitle">
							<b>{ work.name }</b>
						</div>
						<div className = "Work-imageLink">
							<button className = "Work-itemButton " onClick={ () => {
   								window.open( work.appstoreUrl , "_blank")
							}} >
							  <img src={AppleIcon} alt="AppleStore Icon" className="Work-imageLink" />
							</button>
							<button className = "Work-itemButton " onClick={ () => {
    							window.open( work.githubUrl , "_blank")
							}} >
							  <img src={GithubIcon} alt="Github Logo" className="Work-imageLink" />
							</button>
						</div>
					</div>

					<Scrollbar className = "Work-cellDescription">
						{ this.stripHtml(work.descriptionHTML.replace("<br>", ". "))}
						
					</Scrollbar>
				
				</div>
			)
	}

	stripHtml(html) {
		   var tmp = document.createElement("DIV");
		   tmp.innerHTML = html;
		   return tmp.textContent || tmp.innerText || "";
	}
}

export default Work;
