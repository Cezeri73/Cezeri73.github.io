// DOMContentLoaded: Tüm HTML yüklendikten sonra çalıştırılır.
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Görev ekleme işlevi
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const deleteBtn = document.createElement('button');

            span.textContent = taskText;
            deleteBtn.textContent = 'Sil';

            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            // Görev silme işlevi
            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                taskList.removeChild(li);
            });

            // Görev tamamlanma işlevi
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Girdi alanını temizleme
            taskInput.value = '';
        }
    }

    // Ekle butonuna tıklama olayını dinleme
    addTaskBtn.addEventListener('click', addTask);
});
