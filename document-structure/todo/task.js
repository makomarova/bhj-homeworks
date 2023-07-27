const addTaskBtn = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const form = document.getElementById('tasks__form');        

form.addEventListener('submit', event => {
    event.preventDefault();
    if ( taskInput.value != '') {
        const element = document.createElement('div');
        element.classList.add('task');
        element.innerHTML += `
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>`;
        tasksList.appendChild(element);

        element.querySelector('.task__remove').addEventListener('click', e => {
            e.target.closest('.task').remove();
        });

        taskInput.value = '';
    }
});