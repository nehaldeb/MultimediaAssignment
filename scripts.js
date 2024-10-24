document.addEventListener("DOMContentLoaded", function() {
    // Add a scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerText = "Scroll to Top";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px 15px";
    scrollButton.style.backgroundColor = "#0066cc";
    scrollButton.style.color = "white";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "5px";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none";
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });
});
