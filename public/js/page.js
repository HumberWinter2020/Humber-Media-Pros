export default class Page {
	constructor() {
	}
	render(to) {
		to.innerHTML = this.html
		this.registerListeners()
<<<<<<< HEAD
	}
	registerListeners() {
		// No events were present in the child class, so this parent method is called (and does nothing)
		console.log('registerListeners() from: Page')
	}
	subrequests() {

=======
>>>>>>> Ivan-branch
	}
	registerListeners() {
		// No events were present in the child class, so this parent method is called (and does nothing)
		console.log('registerListeners() from: Page')
	}
	subrequests() {

	}
}



// export default class Page {
// 	constructor() {
// 	}
// 	getHTML() {
// 		return this.html
// 	}
// }