/**
 * it fire ON/OFF the screen
 * better than scroll event listener
 * 
 * root: null (default) the viewport
 */
if ("IntersectionObserver" in window) {
    
    const sectionOne = document.querySelector("[data-js-sec-one]");
    const sections = document.querySelectorAll("section");

    const cb = (entries, observer) => {
        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }
            console.log(entry);
            entry.target.classList.toggle("-inverse");
        });
    };

    const options = {
        root: null,
        threshold: 0 , // 1 -100% percent of the item must be on the page, 0 - as soon as any little pieces it enters
        rootMargin: "-150px -150px -150px -150px"

    };

    const observer = new IntersectionObserver(cb, options);

    // observer.observe(sectionOne);

    sections.forEach(section => {
        observer.observe(section);
    });
}

