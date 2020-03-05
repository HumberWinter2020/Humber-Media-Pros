import Page from '../page.js'

export default class Contact extends Page {
	constructor() {
		super()
		this.html = `
		<article class="student-picture">
      <section class="cover-image">
        
      </section>
      <section class="profile-picture">
        <img src="img/students/blank-profile-picture.png" alt="">
      </section>
    </article>
  
    <article class="student-info">    
      <fieldset class="about-student">
        <legend for="about-student"><img src="img/icons/icons8-user-90.png" alt="">About</legend>
        <ul>
          <li>Student ID : </li>
          <li>First Name : </li>
          <li>Last Name : </li>
          <li>Phone Number : </li>
          <li>Email : </li>
          <li>Address :</li>
          <li><a href="#"><img src="/img/icons/facebook.png" alt=""></a></li>
          <li><a href="#"><img src="/img/icons/linkedin.png" alt="" srcset=""></a></li>
          <li><a href="#"><img src="/img/icons/github.png" alt="" srcset=""></a></li>
        </ul>
      </fieldset>
      <fieldset class="student-skill">
        <legend for="student-skill"><a href="/skills" alt="Skills">&nbsp; Skills</a> &nbsp;|&nbsp; <a href="/projects">Projects &nbsp;</a></legend>
        <ul>
          <li>1.</li>
          <li>2.</li>
        </ul>
      </fieldset>
    </article>
    `
	}
}

