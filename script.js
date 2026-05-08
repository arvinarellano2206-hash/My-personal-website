//hamburger
const hamburgers = document.querySelectorAll(".hamburger");

hamburgers.forEach(hamburger => {
    hamburger.addEventListener("click", () => {
        const nav = hamburger.nextElementSibling; 
        nav.classList.toggle("active");
    });
});

//section
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section")

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.getAttribute("href").substring(1);

        sections.forEach(sec => sec.classList.remove("active"));

        document.getElementById(target).classList.add("active");
    });
});

const Links = document.querySelectorAll(".footer-links a");

Links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = this.getAttribute("data-target");

        // remove active from all sections
        document.querySelectorAll("section").forEach(section => {
            section.classList.remove("active");
        });

        // activate target section
        document.getElementById(target).classList.add("active");
    });

});