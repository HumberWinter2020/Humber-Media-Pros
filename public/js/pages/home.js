import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `

		<select name="sort" id="sortOrder" class="sort">
                 
		<option value="priceHigh">Price, highest to lowest</option>
		<option value="priceLow">Price, lowest to highest</option>
		<option value="nameAsc" selected>Name, A to Z</option>
		<option value="nameDesc">Name, Z to A</option>
		
	</select>
	<h2>Products <small id="numResults">(5 results)</small></h2>
	<section id="products" class="products"></section>

		<div class="home-name">
		<h2>Humber Media Pros</h2>
	</div>
	<div class="main-section">
		<h2>Welcome!</h2>
		<p>Humber invites you to attend our 2019 MEDIA PROS Grad Show.

		Join our students from the one-year intensive study programs in Graphic Design, Web Design and Development and 3D Modelling and Visual Effects; browse their portfolios, talk about their career goals and maybe find your next best employee.</p>
	</div>

	<h2 class="title">Courses</h2>
	<div class="choices">
		<section class="web">Web design and development</section>
		<section class="print">Graphic Design For Print and Web</section>
		<section class="mod">3D Modelling and Visual Effects Production</section>
	</div>

	<h2 class="title">People</h2>
	<article class="people">
		<section>
			<h1>Alumni</h1>
			<p>Advancement and Alumni is committed to establishing lifelong connections with our 250,000+ graduates and strengthening our relationship with the Humber community. We want to stay connected with you, share news and stories about your career achievements, celebrate your successes, and provide you with value-added services and benefits.</p>
			<input type="button" value="View" class='view-btn'>
		</section>

		<section>
			<h1>Staff</h1>
			<p>MyHumber provides staff and faculty with access to Academic Progress, grade entry, program rosters, Student Action Form (SAF) functionality, and additional information about courses, programs, and students.</p>
			<input type="button" value="View" class='view-btn'>
		</section>
	</article>

	<h2 class="title">Who We Are</h2>
	<iframe class="us-vid" src="https://www.youtube.com/embed/julQT58GvF4"></iframe>


			`
	}
}