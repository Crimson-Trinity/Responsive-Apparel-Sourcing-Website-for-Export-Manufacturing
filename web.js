document.addEventListener("DOMContentLoaded", function(){

// ================= NAVBAR SCROLL =================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if(navbar){
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});


// ================= FORM SUCCESS =================
const form = document.getElementById("inquiryForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const success = document.getElementById("successMessage");
        if(success){
            success.style.display = "block";
        }
        form.reset();
    });
}


// ================= FAQ ACCORDION =================
const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {

    box.addEventListener("click", function(){

        const answer = box.querySelector(".faq-answer");
        const icon = box.querySelector("span");
        const isOpen = box.classList.contains("active");

        // close all
        faqBoxes.forEach(item => {
            item.classList.remove("active");

            const ans = item.querySelector(".faq-answer");
            const sym = item.querySelector("span");

            if(ans) ans.style.maxHeight = null;
            if(sym) sym.textContent = "+";
        });

        // open clicked
        if(!isOpen){
            box.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";
        }

    });

});


});