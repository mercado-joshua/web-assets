try {
    if(age  === '') {
        throw 'age should not be empty';
    }
    else if(age < 18) {
        throw 'too young to vote';
    }
} catch(error) {
    console.error(error.message);
} finally {
    // will run after theres an error or not
    // good place to clean up resources, eg. server connection
}

// acessing html dom
let id = document.getElementById('id');
let classes = document.getElementsByClassName('class');
let tags = document.getElementsByTagName('img');

// acessing attributes
id.align = 'center';
Image.src = '';

// styling
id.style.color = 'red';


const handleEvent = () => {
    document.getElementById('btn').addEventListener('click', handleBtnClick);

    const handleBtnClick = () => {
        alert('Hello');
    };
};

window.addEventListener('load', handleEvent);

let parent = document.getElementById('parent');
let child = document.getElementById('child');

// create text inside paragraph
let text = document.createTextNode('new paragraph text');
child.appendChild(text);

{/* <div id="parent">
    <div id="child">This will be deleted</div>
</div> */}

parent.removeChild(child);