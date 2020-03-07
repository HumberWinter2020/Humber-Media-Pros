import Page from '../page.js'
const std1= {
	Name : 'sashidhar Meesala',
	id:100,
	program:`wddm`

};

const std2= {
	Name : 'ram',
	id:101,
	program:`wddm`

};

const students=[std1,std2];

export default class About extends Page {
	constructor() {
        super()
        
		this.html = `<h2 class="about-title">Programs</h2>
		<article class="cover">
        <img src="../img/conor.jpg" class="about-title-image"/>
    </article>
    <p class="about-media-title">Welcome to Humber Media Programs</p>
    <section class="programs_intro">
        <article class="program">
            <img src="../img/web-image.png" class="about-program-image"/>
            <h4 class="about-program-title">Web design and development</h4>
            <ul class="about-benefit">
            <li>Become a career-ready web designer in 1 year</li>
            <li>Gain a comprehensive education from highly-talented and industry-experienced faculty</li>
            <li>Use various industry-standard software in our state-of-the-art labs </li>
            <li>Graduate from the program with a captivating portfolio website to present to potential employers</li>
            <li>Make connections with industry professionals during networking opportunities</li>
            </ul>
            <br>
            <br>
            <br>
            <br>
            <a href="programs/Wddm"><button class="about-explore-btn">Explore</button></a>
            
        </article>
        <article class="program">
            <img src="../img/graphic-image.png" class="about-program-image"/>
            <h4 class="about-program-title">Graphic Design For Print and Web</h4>
            <ul class="about-benefit">
            <li>Become a career-ready graphic designer in 1 year</li>
            <li>Gain a comprehensive education from highly-talented and industry-experienced faculty</li>
            <li>Use industry-standard software like Adobe Creative Cloud in our state-of-the-art labs</li>
            <li>Graduate the program with a portfolio to present to potential employers</li>
            <li>Make connections with industry professionals by participating in a portfolio show</li>
            </ul>
            <a href="programs/graphicdesign"><button class="about-explore-btn">Explore</button></a>
        </article>
        <article class="program">
            <img src="../img/3D-image.jpg" class="about-program-image"/>
            <h4 class="about-program-title">3D Modelling and Visual Effects Production</h4>
            <ul class="about-benefit">
            <li>Flexibility for industry professionals looking to develop new skills</li>
            <li>Approved for second career candidates</li>
            <li>Course curriculum taught and designed by industry professionals</li>
            <li>Teaching process and course structure follows a “pipelines process,” mirroring the realities of a real-world production environment</li>
            </ul>
            <a href="programs/modellingandvisualeffects"><button class="about-explore-btn">Explore</button></a>
        </article>
    </section>
    <article id="info"></article>

	`
    }
    registerListeners() {
		console.log('registerListeners() from: About')
		//document.querySelector('#dosomething').addEventListener('click', event => {
			//alert("It worked!")
		//})
	}
	subrequests(path) {
		console.log(path) // The path (after the page) as an Array

		const $info = document.getElementById('info')

		// Depending on the first directive in the URL, load up different content (these can also be Page components!)
		if (path[0] == 'Wddm') {
			$info.innerHTML = `<h3>wdmm</h3>
			<p>WDDDM</p>
			<ul class="router">`
			$info.innerHTML+=students.map(returnWddmLinks).join("\n");
		
		} else if (path[0] == 'graphicdesign') {
			$info.innerHTML = `<h3>graphicdesign</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
        }
        else if (path[0] == 'modellingandvisualeffects') {
			$info.innerHTML = `<h3>modellingandvisualeffects</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
        }
        

	}
}



function returnWddmLinks(students){
	return `<li><a href="Wddm/${students.Name}">${students.Name}</a></li>`;
}
