import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `
		<div class="program">
		<h2>Program Name</h2>
	</div>
	<div class="main-section">
	<h2>Home</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, excepturi placeat deserunt a sint tempore iure delectus. Explicabo tenetur eligendi rerum consequatur adipisci! Non recusandae provident placeat facere aut architecto!</p>
	</div>
	<div class="course">
		<h2>Courses</h2>
	</div>
			`
	}
}