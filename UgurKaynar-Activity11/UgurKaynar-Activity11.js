document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#nav_list a');
    var mainElement = document.querySelector('main');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var fileName = this.getAttribute('title');
            var jsonFilePath = 'json_files/' + fileName + '.json';

            var xhr = new XMLHttpRequest();
            xhr.open('GET', jsonFilePath, true);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    var speaker = data.speakers[0];

                    mainElement.innerHTML = '';

                    var htmlContent = '<h1>' + speaker.title + '</h1>' +
                                      '<img src="' + speaker.image + '" alt="' + speaker.speaker + '">' +
                                      '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
                                      '<p>' + speaker.text + '</p>';

                    mainElement.innerHTML = htmlContent;
                } else {
                    console.error('Error: JSON file could not be loaded.');
                }
            };

            xhr.onerror = function() {
                console.error('Error: JSON file could not be loaded.');
            };

            xhr.send();
        });
    });
});
