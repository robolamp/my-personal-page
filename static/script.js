document.addEventListener('DOMContentLoaded', function(){
    initTerm();
});

function initTerm() {
    this.term = rTerm({
        height: 400,
        username: "robolamp",
        hostname: "robolamp.me",
        file: "static/contacts.json"
    });
};