import update from "./preview.js"


const colors = ['gray', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown'];

        function colorChange(color) {
            const changeElements = document.getElementsByClassName('change');
            const headingElements = document.getElementsByTagName('h2');

            for (let i = 0; i < changeElements.length; i++) {
                changeElements[i].style.backgroundColor = color;
            }

            for (let i = 0; i < headingElements.length; i++) {
                headingElements[i].style.color = color;
            }
        }

        const colorContainer = document.getElementById("color");

        colors.forEach(color => {
            const button = document.createElement('button');
            button.className = 'button';
            button.id = color;
           
            button.style.backgroundColor = color;
            button.addEventListener('click', () => colorChange(color));
            colorContainer.appendChild(button);
        });

    



const font=document.getElementById("font");
font.innerHTML=`<label for="font-select" class="form-label">Choose Font-Style:</label>
<select id="font-select" class="form-select">
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
    </select>`;

    function fontChange(fontStyle) {
      const main = document.getElementById('main');
      main.style.fontFamily = fontStyle;
  }

  const fontSelect = document.getElementById("font-select");
  fontSelect.addEventListener('change', function() {
      const selectedFont = this.value;
      fontChange(selectedFont);
  });

const form=document.createElement("form");
form.innerHTML=`<div id="contact" class="mb-3">
<h3 >Contact</h3> <hr>
<span> <label for="Name"> <span class="text-danger">*</span>Name:</label>
<input type="text" placeholder="Please enter your full name" id="Name"  class=" mb-2 form-control" required >
<div class="invalid-feedback">Please enter only characters.</div>
</span>
<span>
<label for="jobTitle"><span class="text-danger">*</span>Applying for:</label>
<input type="text" placeholder="Please enter job title" id="jobTitle">
</span>
<span>
<label for="ph_number"><span class="text-danger">*</span>Mobile Number:</label>
<input type="tel" class=" mb-2"  placeholder="Please enter your mobile number" id="ph_number"  >
<div class ="invalid-feedback"> invalid mobile number </div>
</span>
<span class="mt-2">
<label for="mail"><span class="text-danger">*</span>Mail:</label>
<input type="email" class="mb-2" id="mail" placeholder="Please enter your email id">
<div class="invalid-feedback"> please enter valid email</div>
</span>

<span>
<label for="address"><span class="text-danger">*</span>Address:</label>
<input type="text-area" placeholder="Please enter your address" id="address" ></span>

<span>
<label for="website"><span class="text-danger">*</span>Website:</label>
<input type="text-area" placeholder="Please enter your website link" id="website" ></span>
</div>

<div id="education">
<h3>Education</h3><hr>
<div>
<span>
<label for="degree"><span class="text-danger">*</span>Choose your degree</label>
<select id="degree" class="form-select  mb-2">
    <option>Master's</option>
    <option>Bachelor's</option>
    <option>12th/Diploma</option>
    <option>10th</option>
</select></span>
<span>
<label for="institution"><span class="text-danger ">*</span>Institution Name:</label>
<input type="text" placeholder="Enter your institution name" id="institution" class = "mb-2">
</span>

<span ><label for="studyField"><span class="text-danger ">*</span>Field of Study:</label>
<input type="text" placeholder="Enter your field of study" id="studyField" class ="mb-2"></span>

<span >
<span class="text-danger ">* </span>
<input type="radio" name="score" value="%" id="radiobtn">Percentage
<input type="radio" name="score" value="CGPA"  class="ms-3">CGPA
<input type="number"  placeholder="Score" id="score" class="mb-2 w-50">
</span>
<span>
<span class="text-danger ">* </span>
<label for="to">Graduation Year:</label>
<input type="number" id="Gradyear" name="year" min="1900" max="2099" step="1" placeholder="yyyy" class="w-25 ">
<button id="addeducation" type="button" class="btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add +</button>
</span>

</div>
</div>
<div id="skills">
<h3 class="fw-bold m-3 fs">Skill</h3><hr>
<span>
<label for="skill">Skill</label>
<input type="text" id="skill" placeholder="Ex: html">
</span>

<button class="btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 " id="skillBtn">Add Skill +</button>

</div>
<div id="lang">
<h3>Languages</h3><hr>
<span>
<label for="Language">Language</label>
<input type="text" id="Language" placeholder="Ex: English">
</span>
<button class="btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3" id="langBtn">Add Language +</button>

</div>
<div>
<h3>Write about you</h3>
<label></label>
<textarea class="form-control" rows="5" cols="50" id="aboutMe"  placeholder="Ex: I am..."></textarea>
</div>
<div>
<h3>Work Experiance</h3>
<span>
<label for="title1">Job Title</label>
<input type="text" id="title" placeholder="Enter Job Title">
</span>
<span>
<label for="company1">Name of Company:</label>
<input type="text" id="company" placeholder="Enter Company Name">
</span>
<span >
<span class="text-danger">*</span>Duration:
<div class="d-flex align-items-center mt-2">

<label for="from">From:</label>
<input type="text" id="from" name="year" min="1900" max="2099" step="1" placeholder="yyyy" class="w-25 mr-3">
<label for="to" >To:</label>
<input type="text" id="to" name="year" min="1900" max="2099" step="1" placeholder="yyyy" class="w-25 mr-3"> 
</div>
</span>
<span>
<label for="proDesc">Project Description:</label>
<textarea class="form-control" rows="5" cols="50" id="proDesc" placeholder="Ex: My project is..."></textarea>
</span>
</div>
<button id="exBtn" class=" fw-bold btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add Experiance +</button>
<div>
<h3>Projects</h3>
<span>
<label >Name of Project:</label>
<input type="text" id="projectName" placeholder="Enter your project name.">
</span>

<span>
Project Description:
<textarea class="form-control" rows="5" cols="50" id="proDescription" placeholder="Ex: My project is..."></textarea>
</span>
</div>
<button class="btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3" id="projectBtn">Add Project +</button>
<div>
<h3>Certifications</h3>
<div>
<span>
<label for="certiName">Certification Name</label>
<input type="text" id="certiName" placeholder="Please enter certification name">
</span>
<span>
<label>Certifying Organization</label>
<input type="text" id="organization" placeholder="Please enter certifying organization"></span>
<span >
<span class="text-danger">*</span>Duration:
<div class="d-flex align-items-center mt-2">

 <label for="from">From:</label>
<input type="text" id="certiFrom" name="year" min="1900" max="2099" step="1"  class="w-25 mr-3">
 <label for="to" >To:</label>
 <input type="text" id="certiTo" name="year" min="1900" max="2099" step="1" class="w-25 mr-3">
</div>
</span>
</div>
<button id="certiBtn" class=" fw-bold btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add Certification +</button>
</div>

<div>
<h3>Awards</h3>
<span>
<label for="awardName" >Award Name</label>
<input type="text" id="awardName" placeholder="Please enter Award name"></span>
<button id="awardBtn" class=" fw-bold btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add Award +</button>
</div>

<div>
<h3>Achievements</h3>
<div id="achieve">
<textarea class="form-control" rows="5" cols="50" id="achievement" placeholder="Ex: My achievement is..."></textarea>
</div>
<button id="achieveBtn" class=" fw-bold btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add Achievement +</button>
</div>
<!-- <div>
// <h3>Social Media Link</h3>
// <span>
//  <label for="link1" ><svg width="20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></label> 
//  <input type="url" id="link1" placeholder="LinkedIn"></span>
// <span>
// <label for="link2" ><svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg> 

// </label>
// <input type="url" id="link2" placeholder="LeetCode">
// </span>
// <button class=" fw-bold btn btn-outline-secondary border-3 fw-bold rounded-3 p-2 m-3 ">Add link +</button>
// </div>-->

`;




const userDetails=document.getElementById("userDetails");
userDetails.appendChild(form);

form.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); 
  }
});

const labels = document.getElementsByTagName("LABEL");
for (let i = 0; i < labels.length; i++) {
    labels[i].classList.add("form-label");
    labels[i].style.color='#0d6efd'; 
}

const inputs=document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'radio') {
        inputs[i].classList.add('form-control');
    }
    inputs[i].addEventListener("keyup",()=>{
        update();
    })
}

const textAreas=document.getElementsByTagName("textarea");
for(let i=0;i< textAreas.length;i++)
    {
        textAreas[i].addEventListener("keyup",()=>{
            update();
        })
    }




        const rName=/^[a-z\s]+$/i;

        if(!rName.test(userName.value) )
            
            {
            Name.addEventListener('input', function(){
                Name.classList.add("is-invalid");
             

            });
            
        
            }else{
                Name.classList.remove("is-invalid");
            }
            
    

            $(document).ready(function() {
                $('#mobile').on('input', function() {
                    var input = $(this);
                    var value = input.val();
                    var isValid = /^\d{10}$/.test(value);
            
                    if (isValid) {
                        input.removeClass('is-invalid').addClass('is-valid');
                    } else {
                        input.removeClass('is-valid').addClass('is-invalid');
                    }
                });
            });



const validateInput = (input, pattern) => {
    const value = input.val();
    const isValid = pattern.test(value);

    if (isValid) {
      input.removeClass('is-invalid');
    } else {
      input.removeClass('is-valid').addClass('is-invalid');
    }
  };

  $('#Name').on('input', function() {
    validateInput($(this), /^[a-z\s]+$/i);
  });

  $('#ph_number').on('input', function() {
    validateInput($(this), /^\d{10}$/);
  });

  $('#mail').on('input',function() {
    validateInput($(this), /^[\w\W]+@[\w\W]+\.[\w\W]{2,4}$/i )

  });

  const addEducation=document.getElementById("addeducation");
  const userEducation=document.getElementById("userEducation");
  const degree = document.getElementById("degree");
const institution = document.getElementById("institution");
const fieldofstudy = document.getElementById("studyField");
const percentage = document.getElementById("score");
const year = document.getElementById("Gradyear");

    let i =1;
    addEducation.addEventListener("click",function(event){
  
      var selectedRadio = document.getElementsByName("score");
      let temp= (selectedRadio[0].checked)? selectedRadio[0].value :selectedRadio[1].value;
      event.preventDefault();
      i++;
     
      userEducation.innerHTML+=`<li><span id="institutionS${i}">${institution.value} &nbsp &nbsp   
      (${year.value})</span>
      <p class="m-0">
      <span id="degreeS${i}">${degree.value} in </span>
      <span id="fieldofstudyS${i}">${fieldofstudy.value}</span>
      </p>
      
      <span id="percentageS${i}"> ${percentage.value} ${temp}</span>
      </li>
      `
    })

const skillBtn=document.getElementById("skillBtn");
const userSkills=document.getElementById("userSkills");
const skill=document.getElementById("skill");
skillBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    userSkills.innerHTML+=`<li>${skill.value}</li>`;
    skill.value="";
})

const exBtn=document.getElementById("exBtn");
const userExperiance=document.getElementById("userExperiance");
const title=document.getElementById("title");
const company=document.getElementById("company");
const from=document.getElementById("from");
const to=document.getElementById("to");
const proDesc=document.getElementById("proDesc");
exBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  userExperiance.innerHTML+=`<li><span>${title.value}</span><br>
  <span>${company.value}  ${from.value}-${to.value}</span><br>
  <span>${proDesc.value}</span></li>`
  })

  const projectBtn=document.getElementById("projectBtn");
  const userProject=document.getElementById("userProject");
  const projectName=document.getElementById("projectName");
  const proDescription=document.getElementById("proDescription");
  projectBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    userProject.innerHTML+=`<li><span>${projectName.value}</span><br>
    <span>${proDescription.value}</span></li>`
    })
  


  const certiBtn=document.getElementById("certiBtn");
  const userCerti=document.getElementById("userCerti");
  const certiName=document.getElementById("certiName");
  const organization=document.getElementById("organization");
  const certiFrom=document.getElementById("certiFrom");
  const certiTo=document.getElementById("certiTo");
  certiBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    userCerti.innerHTML+=`<li><span>${certiName.value}</span><br>
    <span>Certified under ${organization.value} in the duration of ${certiFrom.value}-${certiTo.value}</span>
   </li>`
    })

    const awardName=document.getElementById("awardName");
    const awardBtn=document.getElementById("awardBtn");
    awardBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        userCerti.innerHTML+=`<li><span>${awardName.value}</span>

       </li>`
        })
    

const achieveBtn=document.getElementById("achieveBtn");
const userAchieve=document.getElementById("userAchieve");
const achievement=document.getElementById("achievement");
achieveBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  userAchieve.innerHTML+=`<li><span>${achievement.value}</span>
 </li>`
  })

  const userLang=document.getElementById("userLang");
  const Language=document.getElementById("Language");
  const langBtn=document.getElementById("langBtn");
  langBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    userLang.innerHTML+=`<li>${Language.value}</li>`;
    Language.value="";
  })