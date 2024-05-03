$(document).ready(function() {
    $("#birthday").datepicker({
        changeMonth: true,
        changeYear: true
    });

});



$(document).ready(function() {
    var programming = [
    "Java", "JavaScript", "Dart", "C#", "Python", "PHP", "Assembly", "C/C++", "Go", "Swift", "Kotlin", 
    "Ruby", "Rust", "TypeScript", "Scala", "Perl", "Lua", "Haskell", "Clojure", "MATLAB", "Groovy"
];

$("#programmingLang").autocomplete({
    source: programming,
   
});

 } );