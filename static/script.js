document.addEventListener('DOMContentLoaded', function(){
    initTerm();
});

function initTerm() {
    this.term = rTerm({
        height: 1000,
        username: "robolamp",
        hostname: "robolamp.me",
        file: "static/contacts.json"
    });
};