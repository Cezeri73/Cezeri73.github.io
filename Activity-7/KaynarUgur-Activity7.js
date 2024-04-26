



var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("add").onclick = addScore;
    $("name").focus();
};

function displayResults() {
    var average = 0;
    var highestScore = 0;

    var k = 0;
    for (var i = 0; i < scores.length; i++) {
        average = (average * i + scores[i]) / (i + 1);
        if (scores[i] > highestScore) {
            highestScore = scores[i];
			k=i;
        }
    }
    
    var resultsDiv = $("results");
    resultsDiv.innerHTML = "<h2>Results</h2><p>Average score: " + average.toFixed(2) + "</p><p>Highest score: " + names[k] + " " + "with a score off " + highestScore + "</p>";

}

function displayScores() {
    var table = $("scores_table");
    table.innerHTML = ""; 
    
    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow();
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);
        
        nameCell.textContent = names[i];
        scoreCell.textContent = scores[i];
    }
}

function addScore() {
    var nameInput = $("name").value.trim();
    var scoreInput = parseFloat($("score").value);
    
    if (nameInput === "" || isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
        alert("You must enter a name and a valid score (0-100).");
        return;
    }
    
    names.push(nameInput);
    scores.push(scoreInput);
    
    displayScores(); 
    $("name").value = ""; 
    $("score").value = "";
    $("name").focus(); 
}

