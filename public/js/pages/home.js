import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `
		<div class="home-name">
		<h2>Humber Media Pros</h2>
	</div>
	<div class="main-section">
		<h2>Welcome!</h2>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, excepturi placeat deserunt a sint tempore iure delectus. Explicabo tenetur eligendi rerum consequatur adipisci! Non recusandae provident placeat facere aut architecto!</p>
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
			<p>View past humber media pro graduates, See thier skilset and projects </p>
			<input type="button" value="View" class='view-btn'>
		</section>

		<section>
			<h1>Staff</h1>
			<p>Humber professors teaching at the Media building, talk to coordinators and staff</p>
			<input type="button" value="View" class='view-btn'>
		</section>
	</article>

	<h2 class="title">Who We Are</h2>
	<iframe class="us-vid" src="https://www.youtube.com/embed/julQT58GvF4"></iframe>


			`
	}
}