import Page from '../page.js'

const settings = {

  coverPath: '/img/students/covers/',
  profilePath :'/img/students/profiles/'
}

const allStudents =[
  { //0
    id : 20200101,
    coverImg:`img01a.jpg`,
    profilePicture : `img01.jpg`,
    firstName: `Ivandi`,
    lastName:`Santoso`,
    program:`wddm`,
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
    firstName: `sashidhar`,
    lastName:`meesala`,
    program:`wddm`,
    phoneNumber: `456789123`,
    email: `student.two@humbermail.ca`,
    skills: `HTML, CSS,Js,XD,figma`,
    projects: `Re-make apple website`,
    facebookURL: `https:/www.facebook.com/sashidharursweetheart`,
    linkedinURL:`https://www.linkedin.com/in/sashidharmeesala`,
    githubURL:`https://github.com/sashidharmeesala`
  },{ //2
    id : 20200103,
    coverImg:`img03a.jpg`,
    profilePicture : `img03.jpg`,
    firstName: `Ram`,
    lastName:`Charan`,
    program:`graphicdesign`,
    phoneNumber: `456789044`,
    email: `Ramcharan@humbermail.ca`,
    skills: `HTML,CSS,JS,React`,
    projects: `Project1, project2`,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //3
    id : 20200104,
    coverImg:`img04a.jpg`,
    profilePicture : `img04.jpg`,
    firstName: `priya`,
    lastName:`kumari`,
    program:`graphicdesign`,
    phoneNumber: ``,
    email: `@humbermail.ca`,
    skills: `PhotoShop,aftereffects,animate,ps`,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //4
    id : 20200105,
    coverImg:`img05a.jpg`,
    profilePicture : `img04.jpg`,
    firstName: `peter`,
    lastName:`lou`,
    program:`graphicdesign`,
    phoneNumber: `32423541514`,
    email: `peter@humbermail.ca`,
    skills: `PhotoShop,aftereffects,animate,ps`,
    projects: `project 45 , project x`,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //5
    id : 20200106,
    coverImg:`img06a.jpg`,
    profilePicture : `img04.jpg`,
    firstName: `michael`,
    lastName:`white`,
    program:`modellingandvisualeffects`,
    phoneNumber: `998765477`,
    email: `michael@humbermail.ca`,
    skills: `3d modelling, visual effetcs`,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //6
    id : 20200107,
    coverImg:`img07a.jpg`,
    profilePicture : `img04.jpg`,
    firstName: `David`,
    lastName:`Red`,
    program:`modellingandvisualeffects`,
    phoneNumber: `5678765434`,
    email: `red@humbermail.ca`,
    skills: `3d modelling, visual effetcs`,
    projects: ``,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  },{ //7
    id : 20200108,
    coverImg:`img01a.jpg`,
    profilePicture : `img03.jpg`,
    firstName: `Student`,
    lastName:`Three`,
    program:`wddm`,
    phoneNumber: `567891234`,
    email: `student.three@humbermail.ca`,
    skills: `CSS,PHP`,
    projects: `Re-make airbnb website`,
    facebookURL: ``,
    linkedinURL:``,
    githubURL:``
  }
];

export default class Contact extends Page {
  constructor() {
		super()
    this.html = `<h2>Find students by programs</h2>
  
    <nav class="header-nav">
    <ul class="router">
      <li><a href="students/Wddm">Web Design and Development</a></li>
      <li><a href="students/graphicdesign">Graphic Design</a></li>
      <li><a href="students/modellingandvisualeffects">3d Modelling and Visual Effects</a></li>    
    </ul>
    </nav>
    <article id="app"></article>`
  }
  registerListeners() {
    console.log('registerListeners() from: students page')
    //document.querySelector('#dosomething').addEventListener('click', event => {
      //alert("It worked!")
    //})
  }
  subrequests(path) {
    console.log(path) // The path (after the page) as an Array
  
    const $app = document.getElementById('app')
    const arrayLength = path.length;
    const Lastroute =window.location.pathname.split('/')[window.location.pathname.split('/').length-1]
    //Depending on the first directive in the URL, load up different content (these can also be Page components!)
    if (path[0] == 'Wddm') {
      $app.innerHTML = `<h1>WDDM</h1>
      
      <ul>`
      $app.innerHTML+=allStudents.filter(p => p.program == 'wddm').map(returnStudentCardAsHTML).join("\n");
    
    } else if (path[0]== 'graphicdesign') {
      $app.innerHTML = `<h1>Graphic Design</h1>
    
      <ul>
      `
      $app.innerHTML+=allStudents.filter(p => p.program == 'graphicdesign').map(returnStudentCardAsHTML).join("\n");

        }
        else if (path[0] == 'modellingandvisualeffects') {
      $app.innerHTML = `<h1>Modelling and Visual Effects</h1>
     
      <ul>
      `
      $app.innerHTML+=allStudents.filter(p => p.program == 'modellingandvisualeffects').map(returnStudentCardAsHTML).join("\n");        }

        else if(path[0] == null)  {
           $app.innerHTML=allStudents.map(returnStudentCardAsHTML).join("\n");
        }
        else{
          $app.innerHTML=allStudents.filter(p => p.firstName == `${path[0]}`).map(returnStudentProfileAsHTML).join("\n");
        }

        

        
  
  
}
}

function returnStudentCardAsHTML(student){
  return `
  <article class="card">
    <img src="${settings.profilePath+student.profilePicture}" alt="${student.firstName}" >
    <ul class="student-card-info">
      <li>Full name : ${student.firstName} ${student.lastName}</li>
      <li>Skills set : ${student.skills}</li>
      <li>Email : ${student.email}</li>
    </ul>
    <ul class="router button">
      <li><a href="students/${student.firstName}">Know more</a></li>
    </ul>
  </article>
  
  `


}



function returnStudentProfileAsHTML(students){
return `<article class="student-picture">
<section class="cover-image">
  
</section>
<section class="profile-picture">
<img src="${settings.profilePath+students.profilePicture}" alt="${students.firstName}" >
</section>
</article>
<article class="student-info">    
<fieldset class="about-student">
  <legend for="about-student">&nbsp; About &nbsp;</legend>
  <ul>
    <li>Student ID : ${students.id}</li>
    <li>First Name : ${students.firstName}</li>
    <li>Last Name :${students.lastName} </li>
    <li>Phone Number:${students.phoneNumber} </li>
    <li>Email : ${students.email}</li>
    <li><a href="${students.facebookURL}"><img src="/img/icons/facebook.png" alt=""></a></li>
    <li><a href="${students.linkedinURL}"><img src="/img/icons/linkedin.png" alt="" srcset=""></a></li>
    <li><a href="${students.githubURL}"><img src="/img/icons/github.png" alt="" srcset=""></a></li>
  </ul>
</fieldset>
<fieldset class="student-skill">
  <legend for="student-skill"><a href="/skills" alt="Skills">&nbsp; Skills</a> &nbsp;|&nbsp; <a href="/projects">Projects &nbsp;</a></legend>
  <ol>
    <li>${students.skills}</li>
    
  </ol>
</fieldset>
</article>`

}



function returnWddmLinks(students){
return `<li><a href="students/${students.firstName}">${students.firstName}</a></li>`;
}