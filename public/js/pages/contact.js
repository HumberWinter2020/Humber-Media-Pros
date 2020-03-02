import Page from '../page.js'

export default class Contact extends Page {
	constructor() {
		super()
		this.html = `
		<h2 class="contactus-title">Your Profile</h2>
		<section class="main">
    <article class="cover">
        <img src="../img/conor.jpg" class="contact-image"/>
    </article>
    <article class="profile">
        <img src="../img/icons/icons8-user-90.png" />
    </article>
</section>
		<Section class="details_Section">
		
	
		
		<article class="contactus-detail">
		<h3>Details</h3>
          <h2>
          First Name Last Name
          </h2>
          <p>
          Graduated in year
          </p>
          <p>
          Program: Program Name
		  </p>
		  <p>Skillset: HTML , CSS, JS</p>
        </article>
		<article>
		<h3>Bio</h3>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum molestias odit, vero perspiciatis vitae earum ut neque sint animi nobis corporis, amet modi fugit beatae illum! Reiciendis, dolor consectetur.
		</article>
    </Section>

    <section class="projects_social">
    <article class="projects">
        <h2>Projects</h2>
        <p>		Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum molestias odit, vero perspiciatis vitae earum ut neque sint animi nobis corporis, amet modi fugit beatae illum! Reiciendis, dolor consectetur.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum molestias odit, vero perspiciatis vitae earum ut neque sint animi nobis corporis, amet modi fugit beatae illum! Reiciendis, dolor consectetur.
        </p>
    </article>

    <article class="social">
    <h3>Connect with me on </h3>
        <section class="connect">
        <article class="connect_gridItem">
          <i class="fab fa-facebook fa-7x"></i>
        </article>
        <article class="connect_gridItem">
          <i class="fab fa-github fa-7x"></i>
        </article>
        <article class="connect_gridItem">
          <i class="fab fa-linkedin fa-7x"></i>
        </article>
        <article class="connect_gridItem">
          <i class="fab fa-codepen fa-7x"></i>
        </article>
        </section>
    </article>
    </section>
    `
	}
}

