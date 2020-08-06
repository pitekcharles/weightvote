function createVoteOption () {
    var option = document.createElement("section");
    var buttons = createButtonGroup();
    option.appendChild(buttons);
    $("#vote").append(option);

}

//function for creating buttons as I believe I will be doing alot of it
function createButton (id, innerText) {
    var button = document.createElement("button");
    button.setAttribute("id", id);
    button.setAttribute("type", "button");
    button.innerText = innerText;
    return button;
}

//function to create button group for each voting option
function createButtonGroup () {
    var buttonGroup = document.createElement("div");
    var bestButton = createButton("bestButton", "Best");
    var goodButton = createButton("goodButton", "Good");
    var neutralButton = createButton("neutralButton", "Neutral");
    var badButton = createButton("badButton", "Bad");
    var worstButton = createButton("worstButton", "Worst");
    buttonGroup.appendChild(bestButton);
    buttonGroup.appendChild(goodButton);
    buttonGroup.appendChild(neutralButton);
    buttonGroup.appendChild(badButton);
    buttonGroup.appendChild(worstButton);
    return buttonGroup;
}

$(document).on("click", "#create", function(){
    createVoteOption();
})