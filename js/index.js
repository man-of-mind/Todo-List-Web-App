window.addEventListener('load', () => {
    const form = document.querySelector("#new_task_form");
    const task_input = document.querySelector('#new_task_input');
    const task_list = document.querySelector('#tasks');
    const task_number = document.getElementsByTagName('h2');

    /*    var check = document.getElementsByClassName('checkbox_container');
        var ind = document.querySelector("#checkme");
        ind.name = "task one";
        console.log(ind.name);
        console.log(ind.checked);
    */
    var list = document.getElementsByClassName("task");
    console.log(list.length);

    task_number[1].addEventListener('click', () => {
        task_number[1].innerHTML = 'Number of incomplete task(s): ' + list.length;
    })

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


        task_number[1].innerHTML = 'Number of incomplete task(s): ' + list.length;

        checkbox = document.getElementById('conducted');

        new_task_checkbox_input.addEventListener('change', e => {

            if (e.target.checked) {
                var num = Number(list.length);
                num = num - 1;
                console.log(num);
                //                task_number[1].innerHTML = 'Number of incomplete task(s): ' + num;

                new_task_input.style.color = 'gray';
                new_task_input.style.textDecorationLine = 'line-through';
            }

        });

        new_task_delete_button.addEventListener('click', () => {
            task_list.removeChild(new_task);
            //           task_number[1].innerHTML = 'Number of incomplete task(s): ' + list.length;
        })
    })
})