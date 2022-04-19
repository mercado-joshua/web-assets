/**
 * do anything you want based on the visibility of elements
 * - animating elements OFF screen not ONSCREEN
 * - by default, even if one pixel is visibleon screen, the observer will treat the element as visible
 */

// infinite scrolling - add cards in the end over and over again
// add/remove classes
// scroll-based animations / scroll activated animations
// lazy loading

// tell what you want to observe
const cards = document.querySelectorAll(".card");

/**
 * to handle scrolling
 */

// takes a callback - callback will be called every single time what you observing changes its intersection
// entries - all the things that have change, intersected or not intersected
const observer = new IntersectionObserver(
    entries => {
    console.log(entries);
    entries.forEach(entry => {
        entry.target.classList.toggle("-show", entry.isIntersecting);

        // once the element is visible on the screen, it will no longer play the animation because you removing them from the observer
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0,
    // rootMargin: "-100px" // offset from top and bottom screen, shrinks container and do whatever you want before they enter the screen

    // "100px" - animation will play 100px away from becoming onscreen
    // good for preload images

    // root - parent element, tracks/observe the children
});

/* 
threshold:
value: 0 - 1 (represents percentage) 
    0 - just about visible on the screen 
    1 - 100% of the element must be on the screen before the animation statrts (isIntersecting)
    
*/

// observe when this thing when change intersection
// observe all cards in this list
cards.forEach(card => {
    observer.observe(card);
})

/**
 * intersectionRatio: (1 == 100%)
 *  - what percentage of the element is on the screen
 * 
 * isIntersecting: (true or false) (important)
 *  - is it visible to the user / is it on the screen?
 * 
 * boundingClientRect:
 *  - actual shape of the element you are expecting
 * 
 * intersectionRect:
 *  - amount of space that should be visible on the screen of the thing you are targeting
 * e.g - shows 50% of the thing on the screen
 * 
 * rootBounds:
 *  - bounds of the screen (root by default)
 * 
 * target - the actual thing that you observing (important)
 */