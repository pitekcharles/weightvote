$(document).ready(function () {
    //function to create buttons
    function createButton(id, innerText) {
        var button = document.createElement("button");
        button.setAttribute("id", id);
        button.setAttribute("type", "button");
        button.innerText = innerText;
        return button;
    }

    //function to create button group for each voting option
    function createButtonGroup(option) {
        var buttonGroup = document.createElement("div");
        buttonGroup.setAttribute("id", option.split(" ").join("XoX"));
        buttonGroup.setAttribute("class", "buttonGroup");
        var bestButton = createButton(`bestButton`, "No Resistance");
        // var goodButton = createButton(`goodButton`, "Good");
        var neutralButton = createButton(`neutralButton`, "Some Resistance");
        // var badButton = createButton(`badButton`, "Bad");
        var worstButton = createButton(`worstButton`, "Maximum Resistance");
        buttonGroup.appendChild(bestButton);
        // buttonGroup.appendChild(goodButton);
        buttonGroup.appendChild(neutralButton);
        // buttonGroup.appendChild(badButton);
        buttonGroup.appendChild(worstButton);
        return buttonGroup;
    }

    // creates the label for option to be voted on as well as the buttons
    function createOption(heading) {
        var option = document.createElement("div");
        var title = document.createElement("h3");
        title.innerText = heading;
        var buttons = createButtonGroup(heading);
        option.appendChild(buttons);
        $("#vote").append(title);
        $("#vote").append(option);
    }

    function removeButtons(event) {
        var parent = event.target.parentElement;
        console.log(event.target.parentElement.id);
        parent.removeChild(parent.childNodes[0]);
        parent.removeChild(parent.childNodes[0]);
        parent.removeChild(parent.childNodes[0]);
        //    parent.removeChild(parent.childNodes[0]);
        //    parent.removeChild(parent.childNodes[0]);
        //section to replace buttons with text showing what your vote was
        //had issues making this its own function so put it here
        var newText = "";
        switch (event.target.id) {
            case "bestButton":
                newText = "No Resistance";
                break;
            case "goodButton":
                newText = "Good";
                break;
            case "neutralButton":
                newText = "Some Resistance";
                break;
            case "badButton":
                newText = "Bad";
                break;
            case "worstButton":
                newText = "Maximum Resistance";
                break;
            default:
                newText = "";
                break;
        }
        var vote = document.createElement("p");
        vote.innerText = newText;
        parent.appendChild(vote);
    }

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);
})