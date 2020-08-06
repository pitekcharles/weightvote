$(document).ready(function(){
    //function for creating buttons as I believe I will be doing alot of it
    function createButton(id, innerText) {
        var button = document.createElement("button");
        button.setAttribute("id", id);
        button.setAttribute("type", "button");
        button.innerText = innerText;
        return button;
    }
    
    function questionTitle() {
        var question = $("#question").val()
        var questionPop = document.createElement("h3");
        questionPop.innerText = question;
        $("#vote").append(questionPop);
    }
    
    function createOption(heading) {
        var option = document.createElement("section");
        var title = document.createElement("h3");
        title.innerText = heading;
        var buttons = createButtonGroup(heading);
        option.appendChild(buttons);
        $("#vote").append(title);
        $("#vote").append(option);
    }
    
    function createVoteOption() {
        questionTitle();
        var option1 = $("#option1").val();
        var option2 = $("#option2").val();
        var option3 = $("#option3").val();
        var option4 = $("#option4").val();
        var option5 = $("#option5").val();
        createOption(option1);
        createOption(option2);
        createOption(option3);
        createOption(option4);
        createOption(option5);
        var submitButton = createButton("submitChoices", "Submit");
        $("#vote").append(submitButton);
    }
    
    
    //function to create button group for each voting option
    function createButtonGroup(option) {
        var buttonGroup = document.createElement("div");
        buttonGroup.setAttribute("id", option.split(" ").join("XoX"));
        var bestButton = createButton(`bestButton${option.split(" ").join("XoX")}`, "Best");
        var goodButton = createButton(`goodButton${option.split(" ").join("XoX")}`, "Good");
        var neutralButton = createButton(`neutralButton${option.split(" ").join("XoX")}`, "Neutral");
        var badButton = createButton(`badButton${option.split(" ").join("XoX")}`, "Bad");
        var worstButton = createButton(`worstButton${option.split(" ").join("XoX")}`, "Worst");
        buttonGroup.appendChild(bestButton);
        buttonGroup.appendChild(goodButton);
        buttonGroup.appendChild(neutralButton);
        buttonGroup.appendChild(badButton);
        buttonGroup.appendChild(worstButton);
        return buttonGroup;
    }
    
    $(document).on("click", "#create", function () {
        createVoteOption();
    })
    
    $(document).on("click", "#vote", function(event){
        console.log(event.target.parentElement.id);
    })

})
