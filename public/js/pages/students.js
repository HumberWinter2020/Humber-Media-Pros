import Page from '../page.js'

const student =
  { //0
    id : 20200101,
    coverImg:`img01.jpg`,
    profilePicture : `img01.jpg`,
    firstName: `Student`,
    lastName:`One`,
    phoneNumber: `123456789`,
    email: `test@example.com`,
    skills: ["HTML","CSS","JavaScript"],
    projects: ["Single Page Application", "Web Store"],
    facebookURL: `https://www.facebook.com/student.one`,
    linkedinURL:`https://www.linkedin.com/in/student.one/`,
    githubURL:`https://github.com/student.one`
  };


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

