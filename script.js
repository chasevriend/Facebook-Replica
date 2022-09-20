//database, newsfeed, userNamePrompt, passwordPrompt, 
//signIn(user, pass) funciton
var database = [
    {
        username: "chase",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "chase",
        timeline: "Here I am again"
    },
    {
        username: "nathan",
        timeline: "I want more tattoos"
    },
    {
        username: "johnnydepp",
        timeline: "amber sucks lol"
    }
];

var userNamePrompt = prompt("Please enter username:");
var passwordPrompt = prompt("Please enter password:");

function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password.");
    }
};

signIn(userNamePrompt, passwordPrompt);