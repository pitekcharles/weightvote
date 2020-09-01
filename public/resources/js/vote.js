$(document).ready(function () {
    function createButton(id, innerText) {
        var button = document.createElement("button");
        button.setAttribute("id", id);
        button.setAttribute("type", "button");
        button.innerText = innerText;
        return button;
    }

    function createButtonGroup(option, id) {
        var buttonGroup = document.createElement("div");
        buttonGroup.setAttribute("id", id);
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

    function createOption(heading, id) {
        var option = document.createElement("div");
        var title = document.createElement("h3");
        title.innerText = heading;
        var buttons = createButtonGroup(heading, id);
        option.appendChild(buttons);
        $("#vote").append(title);
        $("#vote").append(option);
    }

    function removeButtons(event) {
        var optionId = event.originalEvent.path[1].id;
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
                $.post("/api/votes", {
                    vote: newText,
                    value: 0,
                    optionId: optionId
                }).then(function (result) {
                    var vote = document.createElement("p");
                    vote.innerText = newText;
                    parent.appendChild(vote);
                });
                break;
            case "goodButton":
                newText = "Good";
                break;
            case "neutralButton":
                newText = "Some Resistance";
                $.post("/api/votes", {
                    vote: newText,
                    value: 3,
                    optionId: optionId
                }).then(function (result) {
                    var vote = document.createElement("p");
                    vote.innerText = newText;
                    parent.appendChild(vote);
                });
                break;
            case "badButton":
                newText = "Bad";
                break;
            case "worstButton":
                newText = "Maximum Resistance";
                $.post("/api/votes", {
                    vote: newText,
                    value: 5,
                    optionId: optionId
                }).then(function (result) {
                    var vote = document.createElement("p");
                    vote.innerText = newText;
                    parent.appendChild(vote);
                });
                break;
            default:
                newText = "";
                break;
        }
        // var vote = document.createElement("p");
        // vote.innerText = newText;
        // parent.appendChild(vote);
    }
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);
    $.get(`/api/questions/${id}`, function (data) {
        var questionInput = data.question
        var questionPop = document.createElement("h3");
        questionPop.innerText = questionInput;
        $("#vote").append(questionPop);
        $.get(`/api/options/${data.id}`, function (options) {
            console.log(options);
            for (var i = 0; i < options.length; i++) {
                createOption(options[i].option, options[i].id);
            }
        })
        console.log(data);
    })

    //function to show results on the page
    function seeResults(event) {

        // console.log(id);
        $.get(`/api/options/${id}`, function (data) {
            dataOptions = data;
            // console.log(dataOptions)
            for (var i = 0; i < data.length; i++) {
                optionsArray.push(data[i].option);
                $.get(`/api/votes/${data[i].id}`, function (votes) {
                    var score = 0;
                    console.log(votes);
                    for (var x = 0; x < votes.length; x++) {
                        score += votes[x].value;
                    }

                    optionsArray.push(score.toString());
                    // console.log(i);
                    // console.log(optionsArray);
                    // console.log(optionsArray[i]);
                    // var optionScore = document.createElement("p");
                    // optionScore.innerText = resistanceArray[i];
                    // var optionTitle = document.createElement("h3");
                    // optionTitle.innerText = optionsArray[i];
                    // $("#results").append(optionTitle);
                    // $("#results").append(optionScore);
                }).then(function (results) {
                    console.log("done");
                });
            }
            // popResults(optionsArray);
        }).then(function () {
            // // for (var i = 0; i < 5; i++) {
            // console.log(scores[0]);
            // console.log(optionsArray[5]);
                
            // $("#results").append(optionTitle);
            // $("#results").append(optionScore);
            // // }
            // popResults(optionsArray)
        })
        // console.log(optionsArray);
    }

    function popResults(array) {
        for (var i = 0; i < 5; i++) {
            // console.log(scores[0]);
            console.log(array[5]);
            var optionScore = document.createElement("p");
            optionScore.innerText = array[i + 5];
            var optionTitle = document.createElement("h3");
            optionTitle.innerText = array[i];
            $("#results").append(optionTitle);
            $("#results").append(optionScore);
        }
    }
    var score;
    var dataOptions;
    var resistanceArray = [];
    var optionsArray = [];
    seeResults(event);
    // on click event for the buttons created in the vote div
    $("#vote").on("click", "button", function (event) {
        if (event.target.id === "submitChoices") {

        } else {
            removeButtons(event);
            // showVote(event);
        }
    })

    $("#results").on("click", "button", function (event) {
        
        // console.log(optionsArray);
        popResults(optionsArray);

    })
})