$(document).ready(function () {
    function saveQuestionId(id) {
        questionId = id;
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
                var link = document.createElement("a");
                console.log(window.location.pathname)
                link.innerText = window.location.pathname + `${questionId}`;
                $("#pollLink").append(link);
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
    }

    // on click event for the create poll button
    $(document).on("click", "#create", function () {
        createVoteOption();
    })
})
