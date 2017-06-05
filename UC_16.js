function findQuestion(questionId) {
    // Now make a HTTP request
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if (this.status === 200) {
                // The request was successful!
                displayQuestion(this.responseText);
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
            // Waiting for a response...
        }
    }
    var url = "https://opentdb.com/api.php?amount=1&type=boolean";
    httpRequest.open("GET", url, true);
    httpRequest.send();
    console.log("success");
}
var response;

function displayQuestion(data) {
    response = JSON.parse(data);
    console.log(response);
    console.log(response.results[0].question);
    document.getElementById("response").className = "alert alert-info";
    document.getElementById("response").innerHTML = response.results[0]["question"];
    document.getElementById("answer").className = null;
    document.getElementById("answer").innerHTML = "";
}

function responseTrue() {
    if (response.results[0]["correct_answer"] == "True") {
        document.getElementById("answer").className = "alert alert-success";
        document.getElementById("answer").innerHTML = "CORRECT!"
    }
    else {
        document.getElementById("answer").className = "alert alert-danger";
        document.getElementById("answer").innerHTML = "The correct answer is " + response.results[0]["correct_answer"];
    }
}

function responseFalse() {
    if (response.results[0]["correct_answer"] == "False") {
        document.getElementById("answer").className = "alert alert-success";
        document.getElementById("answer").innerHTML = "CORRECT!"
    }
    else {
        document.getElementById("answer").className = "alert alert-danger";
        document.getElementById("answer").innerHTML = "The correct answer is " + response.results[0]["correct_answer"];
    }
}
