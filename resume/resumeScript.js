"use strict";
let MyName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let picture = localStorage.getItem("profile_pic");
    let age = localStorage.getItem("age");
    let marStatus = localStorage.getItem("marStatus");
    let gender = localStorage.getItem("gender");
    let contact = localStorage.getItem("contact");
    let email = localStorage.getItem("email");
    let linkdin = localStorage.getItem("linkdin");
    let degree1 = localStorage.getItem("degree1");
    let institute1 = localStorage.getItem("institute1");
    let pass1 = localStorage.getItem("pass1");
    let degree2 = localStorage.getItem("degree2");
    let institute2 = localStorage.getItem("institute2");
    let pass2 = localStorage.getItem("pass2");
    let careerDiscr = localStorage.getItem("careerDiscr");
    let course1 = localStorage.getItem("course1");
    let courseLocation1 = localStorage.getItem("courseLocation1");
    let course2 = localStorage.getItem("course2");
    let courseLocation2 = localStorage.getItem("courseLocation2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let skill6 = localStorage.getItem("skill6");
    let org = localStorage.getItem("org");
    let role = localStorage.getItem("role");
    let stYear = localStorage.getItem("stYear");
    let endYear = localStorage.getItem("endYear");
    let resName = document.getElementById("resName");
    resName.textContent = MyName;
    let resImg = document.getElementById("resImg");
    resImg.src = picture;
    let resAge = document.getElementById("resAge");
    resAge.textContent = age;
    let resMarStatus = document.getElementById("resMarStatus");
    resMarStatus.textContent = marStatus;
    let resGender = document.getElementById("resGender");
    resGender.textContent = gender;
    let resContact = document.getElementById("resContact");
    resContact.textContent = contact;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resLinkedIn = document.getElementById("resLinkedIn");
    resLinkedIn.textContent = linkdin;
    let resDegree1 = document.getElementById("resDegree1");
    resDegree1.textContent = degree1;
    let resInstitute1 = document.getElementById("resInstitute1");
    resInstitute1.textContent = institute1;
    let resPass1 = document.getElementById("resPass1");
    resPass1.textContent = pass1;
    let resDegree2 = document.getElementById("resDegree2");
    resDegree2.textContent = degree2;
    let resInstitute2 = document.getElementById("resInstitute2");
    resInstitute2.textContent = institute2;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resSkill1 = document.getElementById("resSkill1");
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById("resSkill2");
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById("resSkill3");
    resSkill3.textContent = skill3;
    let resSkill4 = document.getElementById("resSkill4");
    resSkill4.textContent = skill4;
    let resSkill5 = document.getElementById("resSkill5");
    resSkill5.textContent = skill5;
    let resSkill6 = document.getElementById("resSkill6");
    resSkill6.textContent = skill6;
    let resCarDiscription = document.getElementById("resCarDiscription");
    resCarDiscription.textContent = careerDiscr;
    let resCourse1 = document.getElementById("resCourse1");
    resCourse1.textContent = course1;
    let resCourseLocation1 = document.getElementById("resCourseLocation1");
    resCourseLocation1.textContent = courseLocation1;
    let resCourse2 = document.getElementById("resCourse2");
    resCourse2.textContent = course2;
    let resCourseLocation2 = document.getElementById("resCourseLocation2");
    resCourseLocation2.textContent = courseLocation2;
    let resOrg = document.getElementById("resOrg");
    resOrg.textContent = org;
    let resRole = document.getElementById("resRole");
    resRole.textContent = role;
    let resStYear = document.getElementById("resStYear");
    resStYear.textContent = stYear;
    let resEndYear = document.getElementById("resEndYear");
    resEndYear.textContent = endYear;
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
// Import toggle skills id
const togglebutton = document.getElementById("toggle-skills");
// Import skills id
const skills = document.getElementById("skills");
// Event listner wait karta ha click karne ka
togglebutton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
let share_btn = document.getElementById("share_btn");
let anc = document.getElementById("anc");
let userName;
if (MyName) {
    userName = MyName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${MyName}`;
share_btn?.addEventListener("click", () => {
    anc?.setAttribute("href", uniqueUrl);
});
let copy_btn = document.getElementById("copy_btn");
copy_btn?.addEventListener("click", () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert("Copy Successfully");
    });
});
