
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

function editBioListener(editBio, bio) {
        editBio.value = bio.innerHTML;
        // document.getElementById("editBio").addEventListener("keyup", function(event) {
        //     console.log(event);
        // })
}

// keyup eventListener for the textarea
document.getElementById("editBio").addEventListener("keyup", function(event) {
    console.log("lastSection", lastSection);
    document.getElementById(lastSection).innerHTML = document.getElementById("editBio").value;
    console.log(document.getElementById("editBio").value);
});

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
        /*move everything in the bio field to the input field and any
        change you make should appear in the bio that you clicked.*/
        // This gets the innerHTML of the section element
        var bio = document.getElementById(this.id).getElementsByTagName("section")[0];
        lastSection = bio.id;
        console.log(lastSection);
        var editBio = document.getElementById("editBio");
        editBioListener(editBio, bio);
    });
};


/*1. Create an array of objects that represents famous people (see structure below). Done
2. Create a text input in your DOM. Done
3. Beneath that, create a container, block element in your DOM.
4. Create a DOM element for each of the objects inside the container. Style your person elements however you like. Done
5. For every even numbered element, have a light yellow background. Done
6. For every odd numbered element, have a light blue background. Done
7. Each element's DOM structure should be as shown below. Done
8. When you click on one of the person elements, a dotted border should appear around it.
9. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.*/