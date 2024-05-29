function update(){
    const Name=document.getElementById("Name");
    const userName=document.getElementById("userName");
    const mail=document.getElementById("mail");
    const userMail=document.getElementById("userMail");
    const mobile=document.getElementById("ph_number");
    const userMobile=document.getElementById("userMobile");
    const address=document.getElementById("address");
    const userAddress=document.getElementById("userAddress");
    const aboutMe=document.getElementById("aboutMe");
    const aboutUser=document.getElementById("aboutUser");
    userName.innerText=Name.value;
    userMobile.innerHTML=mobile.value;
    userMail.innerHTML=mail.value;
    userAddress.innerHTML=address.value;
    aboutUser.innerText=aboutMe.value;
    const website=document.getElementById("website");
    const userWebsite=document.getElementById("userWebsite");
    userWebsite.innerText=website.value;
    const jobTitle=document.getElementById("jobTitle");
    const userJobTitle=document.getElementById("userJobTitle");
    userJobTitle.innerText=jobTitle.value;
   

}


export default update;






