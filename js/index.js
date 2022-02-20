window.addEventListener('load', () => {
    const form = document.querySelector("#new_task_form");
    const task_input = document.querySelector('#new_task_input');
    const task_list = document.querySelector('#tasks');
    const task_number = document.getElementsByTagName('h2');
    var list = document.getElementsByClassName("task");


    function checkboxListener() {
        var total_tasks = list.length;
        for (let i = 0; i < list.length; i++) {
            const curr = list[i].getElementsByClassName("checkme");
            const vari = list[i].getElementsByClassName("checkmark");
            if (curr[0].checked === true) {
                total_tasks--;
            }
        }

        if (total_tasks != undefined) {
            task_number[1].innerHTML = 'Number of incomplete task(s): ' + total_tasks;
        } else {
            task_number[1].innerHTML = 'Number of incomplete task(s): 0';
        }

    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = task_input.value;
        if (!task) {
            alert("Kindly fill your new task!!!");
            return;
        }
        const new_task = document.createElement("div");
        new_task.classList.add('task');

        const new_task_content = document.createElement('div');
        const new_task_input = document.createElement('input');

        new_task_input.classList.add('text');
        new_task_input.type = 'text';
        new_task_input.value = task;
        new_task_input.setAttribute('readonly', 'readonly');
        new_task_content.classList.add('content');
        new_task_content.appendChild(new_task_input);

        const new_task_actions = document.createElement('div');
        new_task_actions.classList.add('actions');
        const new_task_delete_button = document.createElement('button');
        new_task_delete_button.classList.add('delete');
        new_task_delete_button.innerHTML = 'Delete';
        const new_task_checkbox_label = document.createElement('label');
        new_task_checkbox_label.classList.add('checkbox_container');
        const new_task_checkbox_input = document.createElement('input');
        new_task_checkbox_input.type = 'checkbox';
        new_task_checkbox_input.classList.add('checkme');
        const new_task_checkbox = document.createElement('span');
        new_task_checkbox.classList.add('checkmark');

        new_task_checkbox_label.appendChild(new_task_checkbox_input);
        new_task_checkbox_label.appendChild(new_task_checkbox);

        new_task_actions.appendChild(new_task_checkbox_label);
        new_task_actions.appendChild(new_task_delete_button);

        new_task.appendChild(new_task_content);
        new_task.appendChild(new_task_actions);
        task_list.appendChild(new_task);
        task_input.value = '';


        checkboxListener();

        new_task_checkbox_input.addEventListener('click', () => {
            checkboxListener();
            if (new_task_checkbox_input.checked) {
                new_task_input.style.color = 'gray';
                new_task_input.style.textDecorationLine = 'line-through';
            } else {
                new_task_input.style.color = 'white';
                new_task_input.style.textDecorationLine = 'none';
            }
        });

        new_task_delete_button.addEventListener('click', () => {
            task_list.removeChild(new_task);
            checkboxListener();
        })
    })
})