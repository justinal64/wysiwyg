
var famousPeople = [{
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg bio0",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}, {
    title: "Samurai",
    name: "Justin Leggett",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg bio1",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}, {
    title: "Samurai",
    name: "Katie Leggett",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg bio2",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}, {
    title: "Samurai",
    name: "Kallie Leggett",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg bio3",
    lifespan: {
        birth: 1747,
        death: 1797
    }
},{
    title: "Samurai",
    name: "Zoey Leggett",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg bio4",
    lifespan: {
        birth: 1747,
        death: 1797
    }
}];

// used to iterate through object
var i = 0;
var lastSection;
var editBio = document.getElementById("editBio");
console.log(famousPeople);


// create innerHTML element in a function???
var container = document.getElementById("container");
for (var counter = 0; counter < 5; counter++) {
  // Give each person element a unique identifier
  container.innerHTML += "<div class='person_container' id='person_" + counter + "'><person><header>" +
  "His name was " + famousPeople[i]["name"] + " His title was "  + famousPeople[i]["title"] +
  "</header><section id='sec_" + counter + "'>" + famousPeople[i]["bio"] + " if you would like to see what he looked like follow this link " +
  famousPeople[i]["image"] + " </section><footer>he lived from " + famousPeople[i]["lifespan"]["birth"] +" - " + famousPeople[i]["lifespan"]["death"] + "</footer></person></div"
  i++;
}

// keyup eventListener for the textarea
document.getElementById("editBio").addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        editBio.value = "";
    } else {
        document.getElementById(lastSection).innerHTML = editBio.value;
    }
});

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
        // This gets the innerHTML of the section element
        var bio = document.getElementById(this.id).getElementsByTagName("section")[0];
        // set border of the section you clicked
        document.getElementById(bio.id).style.border = "4px dotted blue";
        // sets focus to the input field
        editBio.focus();
        // used when the keyup function sends the data back to the section element
        lastSection = bio.id;

        editBio.value = bio.innerHTML;
    });
};









