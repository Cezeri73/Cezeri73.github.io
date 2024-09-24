
document.addEventListener('DOMContentLoaded', function() {
    const commentInput = document.getElementById('comment-input');
    const addCommentBtn = document.getElementById('add-comment-btn');
    const commentList = document.getElementById('comment-list');
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    function renderComments() {
        commentList.innerHTML = '';
        storedComments.forEach((comment, index) => {
            const li = document.createElement('li');
            li.textContent = comment.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Sil";
            deleteBtn.addEventListener('click', function() {
                storedComments.splice(index, 1);
                localStorage.setItem('comments', JSON.stringify(storedComments));
                renderComments();
            });

            const likeBtn = document.createElement('button');
            likeBtn.textContent = `Beğen (${comment.likes || 0})`;
            likeBtn.addEventListener('click', function() {
                comment.likes = (comment.likes || 0) + 1;
                localStorage.setItem('comments', JSON.stringify(storedComments));
                renderComments();
            });

            li.appendChild(deleteBtn);
            li.appendChild(likeBtn);
            commentList.appendChild(li);
        });
    }

    addCommentBtn.addEventListener('click', function() {
        const commentText = commentInput.value;
        if (commentText.trim() !== "") {
            storedComments.push({ text: commentText, likes: 0 });
            localStorage.setItem('comments', JSON.stringify(storedComments));
            commentInput.value = '';
            renderComments();
        }
    });

    renderComments();

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Work filtering
    const categoryFilter = document.getElementById('category-filter');
    const works = document.querySelectorAll('.work');

    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        works.forEach(work => {
            if (selectedCategory === 'all' || work.getAttribute('data-category') === selectedCategory) {
                work.style.display = 'block';
                work.classList.add('show');
            } else {
                work.style.display = 'none';
            }
        });
    });

    works.forEach(work => {
        work.classList.add('show');
    });

    // Quiz
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    const savedAnswer = localStorage.getItem('quizAnswer');

    if (savedAnswer) {
        quizResult.textContent = `Daha önce ${savedAnswer} cevabını verdiniz.`;
    }

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked').value;
        localStorage.setItem('quizAnswer', selectedAnswer);
        quizResult.textContent = `Cevabınız: ${selectedAnswer}`;
    });
});
