let Myname: any = document.getElementById("name");
let pic: any = document.getElementById("pic");
let age: any = document.getElementById("age");
let marStatus: any = document.getElementById("marStatus");
let gender: any = document.getElementById("gender");
let contact: any = document.getElementById("contact");
let email: any = document.getElementById("email");
let linkdin: any = document.getElementById("linkdin");
let degree1: any = document.getElementById("degree1");
let institute1: any = document.getElementById("institute1");
let pass1: any = document.getElementById("pass1");
let degree2: any = document.getElementById("degree2");
let institute2: any = document.getElementById("institute2");
let pass2: any = document.getElementById("pass2");
let careerDiscr: any = document.getElementById("careerDiscr");
let course1: any = document.getElementById("course1");
let courseLocation1: any = document.getElementById("courseLocation1");
let course2: any = document.getElementById("course2");
let courseLocation2: any = document.getElementById("courseLocation2");
let skill1: any = document.getElementById("skill1");
let skill2: any = document.getElementById("skill2");
let skill3: any = document.getElementById("skill3");
let skill4: any = document.getElementById("skill4");
let skill5: any = document.getElementById("skill5");
let skill6: any = document.getElementById("skill6");
let org: any = document.getElementById("org");
let role: any = document.getElementById("role");
let stYear: any = document.getElementById("stYear");
let endYear: any = document.getElementById("endYear");

let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");

// // Options ko dynamically display karne ke liye array
// let marital_status_options = ["Single", "Married", "Divorced", "Widowed"];

// // Get the display element
// let resMarStatus = document.getElementById('resMarStatus');

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  localStorage.setItem("name", Myname.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("marStatus", marStatus.value);
  localStorage.setItem("gender", gender.value);
  localStorage.setItem("contact", contact.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("linkdin", linkdin.value);
  localStorage.setItem("degree1", degree1.value);
  localStorage.setItem("institute1", institute1.value);
  localStorage.setItem("pass1", pass1.value);
  localStorage.setItem("degree2", degree2.value);
  localStorage.setItem("institute2", institute2.value);
  localStorage.setItem("pass2", pass2.value);
  localStorage.setItem("careerDiscr", careerDiscr.value);
  localStorage.setItem("course1", course1.value);
  localStorage.setItem("courseLocation1", courseLocation1.value);
  localStorage.setItem("course2", course2.value);
  localStorage.setItem("courseLocation2", courseLocation2.value);
  localStorage.setItem("skill1", skill1.value);
  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);
  localStorage.setItem("skill4", skill4.value);
  localStorage.setItem("skill5", skill5.value);
  localStorage.setItem("skill6", skill6.value);
  localStorage.setItem("org", org.value);
  localStorage.setItem("role", role.value);
  localStorage.setItem("stYear", stYear.value);
  localStorage.setItem("endYear", endYear.value);

  if (pic.files && pic.files[0]) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let textImg: any = reader.result;
      localStorage.setItem("profile_pic", textImg);
    });
    reader.readAsDataURL(pic.files[0]);
  }

  window.location.href = "./resume/resume.html";
});
