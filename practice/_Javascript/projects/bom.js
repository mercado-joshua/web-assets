// screen
console.log(window.screen.width);
console.log(window.screen.height);

// history
window.history.back(); // simulate back/previous site button
window.history.forward(); // simulate forward site button

// navigator - get all the browser information
window.navigator.appName; // returns "netscape"
window.navigator.appCodeName; // returns browser name
window.navigator.cookieEnabled;


for (item in window.navigator) {
    console.log(item);
}