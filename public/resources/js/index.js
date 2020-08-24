// const question = require("../../../models/question");

$(document).ready(function () {
    //variable definition
    // var questionId;

    //function for creating buttons as I believe I will be doing alot of it
    // function createButton(id, innerText) {
    //     var button = document.createElement("button");
    //     button.setAttribute("id", id);
    //     button.setAttribute("type", "button");
    //     button.innerText = innerText;
    //     return button;
    // }

    function saveQuestionId(id) {
        questionId = id;
        // console.log(questionId);
    }

    // puts the question to be voted on in the Vote section
    function questionTitle() {
        var questionInput = $("#question").val()
        var questionPop = document.createElement("h2");
        questionPop.innerText = questionInput;
        $("#vote").append(questionPop);
        $.post("/api/questions", { question: questionInput })
            .then(result => saveQuestionId(result.id));
    }

    // creates the label for option to be voted on as well as the buttons
    // function createOption(heading) {
    //     var option = document.createElement("div");
    //     var title = document.createElement("h3");
    //     title.innerText = heading;
    //     var buttons = createButtonGroup(heading);
    //     option.appendChild(buttons);
    //     $("#vote").append(title);
    //     $("#vote").append(option);
    // }

    // puts all the options up on the screen as well as their buttons and a submit button
    function createVoteOption() {
        var questionId = 0;
        var questionInput = $("#question").val();
        $.post("/api/questions", { question: questionInput })
            .then(function (result) {
                console.log(result.id);
                questionId = result.id;
                var option1 = $("#option1").val();
                var option2 = $("#option2").val();
                var option3 = $("#option3").val();
                var option4 = $("#option4").val();
                var option5 = $("#option5").val();
                $.post("/api/options", { option: option1, QuestionID: questionId })
                    .then(console.log("option working maybe"));
                $.post("/api/options", { option: option2, QuestionID: questionId })
                    .then(console.log("option working maybe"));
                $.post("/api/options", { option: option3, QuestionID: questionId })
                    .then(console.log("option working maybe"));
                $.post("/api/options", { option: option4, QuestionID: questionId })
                    .then(console.log("option working maybe"));
                $.post("/api/options", { option: option5, QuestionID: questionId })
                    .then(console.log("option working maybe"));
            });
        // questionTitle();
    }


    //function to create button group for each voting option
    // function createButtonGroup(option) {
    //     var buttonGroup = document.createElement("div");
    //     buttonGroup.setAttribute("id", option.split(" ").join("XoX"));
    //     buttonGroup.setAttribute("class", "buttonGroup");
    //     var bestButton = createButton(`bestButton`, "No Resistance");
    //     // var goodButton = createButton(`goodButton`, "Good");
    //     var neutralButton = createButton(`neutralButton`, "Some Resistance");
    //     // var badButton = createButton(`badButton`, "Bad");
    //     var worstButton = createButton(`worstButton`, "Maximum Resistance");
    //     buttonGroup.appendChild(bestButton);
    //     // buttonGroup.appendChild(goodButton);
    //     buttonGroup.appendChild(neutralButton);
    //     // buttonGroup.appendChild(badButton);
    //     buttonGroup.appendChild(worstButton);
    //     return buttonGroup;
    // }

    // // removes choices once a choice has been voted for
    // function removeButtons(event) {
    //     var parent = event.target.parentElement;
    //     console.log(event.target.parentElement.id);
    //     parent.removeChild(parent.childNodes[0]);
    //     parent.removeChild(parent.childNodes[0]);
    //     parent.removeChild(parent.childNodes[0]);
    //     //    parent.removeChild(parent.childNodes[0]);
    //     //    parent.removeChild(parent.childNodes[0]);
    //     //section to replace buttons with text showing what your vote was
    //     //had issues making this its own function so put it here
    //     var newText = "";
    //     switch (event.target.id) {
    //         case "bestButton":
    //             newText = "No Resistance";
    //             break;
    //         case "goodButton":
    //             newText = "Good";
    //             break;
    //         case "neutralButton":
    //             newText = "Some Resistance";
    //             break;
    //         case "badButton":
    //             newText = "Bad";
    //             break;
    //         case "worstButton":
    //             newText = "Maximum Resistance";
    //             break;
    //         default:
    //             newText = "";
    //             break;
    //     }
    //     var vote = document.createElement("p");
    //     vote.innerText = newText;
    //     parent.appendChild(vote);
    // }

    //function to pull existing polls from database, this will be temporary to show working product before changing to 2 pages
    function pagePop() {
        $.get("/api/questions", function (data) {
            for (var i = 0; i < data.length; i++) {
                var questionInput = data[i].question
                var questionPop = document.createElement("h3");
                questionPop.innerText = questionInput;
                $("#vote").append(questionPop);
                $.get(`/api/options/${data[i].id}`, function (options) {
                    console.log(options);
                    for(var i = 0; i < options.length; i++){
                        createOption(options[i].option);
                    }
                })
                console.log(data);
            }
        })
    }

    //callouts to run on page start
    // pagePop();

    // on click event for the create poll button
    $(document).on("click", "#create", function () {
        createVoteOption();
        // $("#createPoll").remove();
    })

    // on click event for the buttons created in the vote div
    // $("#vote").on("click", "button", function (event) {
    //     if (event.target.id === "submitChoices") {
    //         console.log("Its working!");
    //     } else {
    //         removeButtons(event);
    //         // showVote(event);
    //     }
    // })
})
