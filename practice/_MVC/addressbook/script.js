// model
const contactData = [
    { name: "joshua", age: 23 },
    { name: "richard", age: 24 },
    { name: "maj", age: 25 },
    { name: "aleeza", age: 26 }
];

// view
class BookView {
    init() {
        console.log('render html here');
    }
}

const bookView = new BookView();

// model and view cannot talk to each other directly, only controller

// controller

class BookCtrl {
    constructor(view) {
        this.bookView = view;
    }

    init() {
        this.bookView.init();
    }

    getContacts() {
        return contactData;
    }
}

// successfully hooked the controller and view
const bookApp = new BookCtrl(bookView);
bookApp.init();



renderContactListModule() {
    //get all contacts and assign to contacts 
    const contacts = addressBookApp.getContacts();
    // cache #contact-list DOM 
    const $contactListUI = document.getElementById('contact-list');
    // clear HTML from the DOM 
    $contactListUI.innerHTML = '';
    for (let i = 0, len = contacts.length; i < len; i++) {
        let $li = document.createElement('li');
        $li.setAttribute('class', 'contact-list-item');
        $li.setAttribute('data-index', i);
        $li.innerHTML = `${contacts[i]['fname']},${contacts[i]['lname']}`;
        $contactListUI.append($li);
    }
}