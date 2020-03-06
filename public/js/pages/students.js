import Page from '../page.js'


const allStudents =[
  { //0
    id : 20200101,
    coverImg:`img01a.jpg`,
    profilePicture : `img01.jpg`,
    firstName: `Ivandi`,
    lastName:`Santoso`,
    phoneNumber: 123456789,
    email: `n01398965@humbermail.ca`,
    skills: `HTML, CSS, JavaScript`,
    projects: `Single Page Application, Web Store`,
    facebookURL: `https://www.facebook.com/ivandisantoz`,
    linkedinURL:`https://www.linkedin.com/in/ivandisantoso/`,
    githubURL:`https://github.com/ivandisantoso`
  
  },{ //1
    id : 20200102,
    coverImg:`img02a.jpg`,
    profilePicture : `img02.jpg`,
    firstName: ``,
    lastName:``,
    phoneNumber: ``,
    email: `@humbermail.ca`,
    skills: ``,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //2
    id : 20200103,
    coverImg:`img03a.jpg`,
    profilePicture : `img03.jpg`,
    firstName: ``,
    lastName:``,
    phoneNumber: ``,
    email: `@humbermail.ca`,
    skills: ``,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //3
    id : 20200104,
    coverImg:`img04a.jpg`,
    profilePicture : `img04.jpg`,
    firstName: ``,
    lastName:``,
    phoneNumber: ``,
    email: `@humbermail.ca`,
    skills: ``,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  }
];

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

