import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

import GithubIcon from '../navbar/githubWhite.svg';
import AppleIcon from './applelogo.svg';

import './Work.css';

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
				'https://apps.apple.com/br/app/zombie-apocalypse/id1504183894',
				'https://apps.apple.com/br/app/the-movie-genie/id1462797983',
				'https://apps.apple.com/br/app/pocket-pastre/id1497205539',
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
				name: name,
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

	loadApps() {
  		var joined = this.state.loadedApps.concat(
  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 

  			  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 
  			  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 
  			  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 
  			  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 
  			  			{
				name: "Appzao",
				descriptionHTML: "Baixe agora a extensão para macOS: https://pastre.github.io/harmonify/index.html<br><br>Harmonify é um app que permite encontrar cores diretamente da sua câmera e automaticamente gerar uma paleta baseada nessa cor, ou salvar a cor para referência depois.<br>Harmonify vem com 4 templates de paletas por padrão: Monochromatic, Analog, Complementary and Triads.<br>Paletas de cores aparecem na aplicação para macOS, permitindo assim a melhor integração com diversas ferramentas como Sketch, Illustrator, Photoshopou até mesmo o XCode.<br>Quando salvas, cores e paletas podem ser exportadas como texto, ou um arquivo no formato .sketchpallete, que pode ser aberto diretamente no Sketch.<br>Harmonify disponibiliza também detelhes de cores, seja em código HEX ou RGB, e é perfeito para qualquer um buscando cores do mundo real",
				imageTags: "imageTags",
				images: ["https://is5-ssl.mzstatic.com/image/thumb/Purple123…9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png", "https://is3-ssl.mzstatic.com/image/thumb/Purple113…9-52a9-e421-059c450dd380/pr_source.png/230x0w.png", "https://is1-ssl.mzstatic.com/image/thumb/Purple123…5-083c-80b7-8b86d5f38fc8/pr_source.png/230x0w.png"],
  			}, 
  		)

  		// this.setState({ loadedApps:  joined })
		this.state.urls.forEach( value => this.doGet(value) )
	}

	isLoading() {
		console.log(this.state.loadedApps.length, this.state.urls.length)
		return this.state.loadedApps.length !== this.state.urls.length
	}

	render() {
		if(this.isLoading()) {
			return (
			    <div>

			    </div>
			);
		}

		return this.workView()
	}

	workView() {
		return (
		    <div className = "Work">
		    	<div className = "Work-header"> 
		    		Bruno's <b>Work</b>
		    	</div>
		    	{ this.workTable() }
		    </div>
		);
	}

	workTable() {

		var rows = []
		var normallyFlipped = true
		var loadedApps = []

		for(var i = 0 ; i < this.state.urls.length; i++) {
			var app = this.state.loadedApps.find( element => element.appstoreUrl == this.state.urls[i])
			console.log("app", app)
			loadedApps.push(app)
		}

		for(var i = 1; i < loadedApps.length; i += 2) {
			const app1 = this.state.loadedApps[i]
			const app2 = this.state.loadedApps[i - 1]

			var newRow = this.workRows([this.workCell(app1, normallyFlipped), this.workCell(app2, !normallyFlipped)])
			normallyFlipped = !normallyFlipped
			rows.push(newRow)
		}

		return ( 
			<div className = "Work-cellsTable">
				{ rows }
			</div>
		);
	}

	workRows(cells) {
		return ( 
			<div className = "Work-cellsRowContainer">
				{ cells }
			</div>
		);
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
			<img  className = "Work-cellImage" src = "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/ae/5b/4d/ae5b4df7-f3d9-6bd3-3888-0b281d255f59/pr_source.png/230x0w.png" />
		)
	}

	workCellContent(work) {
		return (

				<div className = "Work-cellContent">
					<div className = "Work-cellTitleContainer">

						<div className = "Work-cellTitle">
							{ work.name }
						</div>
						<div className = "Work-imageLink">
							<button className = "Work-itemButton itemButton" onClick={ () => {
   								window.open( work.appstoreUrl , "_blank")
							}} >
							  <img src={AppleIcon} alt="AppleStore Icon" className="Work-imageLink" />
							</button>
							<button className = "Work-itemButton itemButton" onClick={ () => {
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

	stripHtml(html)
		{
		   var tmp = document.createElement("DIV");
		   tmp.innerHTML = html;
		   return tmp.textContent || tmp.innerText || "";
		}
}

export default Work;
