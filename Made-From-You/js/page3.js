let hovered = 0;

document.querySelectorAll(".trackable-link").forEach(link => {

    link.addEventListener("mouseenter", () => {

        if (!link.dataset.hovered) {       
            link.dataset.hovered = "true"; 
            hovered++;                       
        }

        if (hovered === 3) {                   // all 3 links hovered once
            document.getElementById("final-reveal-message").classList.add("show");
        }
    });

});
