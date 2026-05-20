
// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================= SCROLL REVEAL =================

const hiddenElements =
document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=> observer.observe(el));

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_2220lfl",
        "template_ywkac5q",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }
    )

    .then(function(){

        alert("Message sent successfully!");

        contactForm.reset();

    })

    .catch(function(error){

        alert("Failed to send message.");

        console.log(error);

    });

});

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});