
        let button = document.getElementById('button');
        let timeout = 500;
        let maxWidth = window.innerWidth - 75;
        let maxHeight = window.innerHeight - 30;
        let isMouseOver = false;
        let clicksRemaining = 3;
        let level = 1;

        button.addEventListener('mouseover', function() {
            isMouseOver = true;
            startMoving();
        });

        button.addEventListener('mouseout', function() {
            isMouseOver = false;
            clearTimeout(timeout);
        });

        button.addEventListener('click', function() {
            if (isMouseOver) {
                clearTimeout(timeout);
                moveButton();
                clicksRemaining--;
                if (clicksRemaining === 0) {
                    level++;
                    clicksRemaining = 3;
                    if (level <= 6) {
                        alert("Level " + (level - 1) + " completed! Level " + level + " started.");
                        timeout =timeout - 100; 

                        moveButton();
                    } else {
                        alert("Congratulations! You've completed all levels.");
                    }
                }
            }
        });

        function startMoving() {
            timeout = setTimeout(moveButton, 500);
        }

        function moveButton() {
            let newLeft = Math.random() * maxWidth;
            let newTop = Math.random() * maxHeight;

            button.style.marginLeft = newLeft + 'px';
            button.style.marginTop = newTop + 'px';
        }
   