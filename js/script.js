// create html element function
function elements(name) {
    return document.createElement(name);

}
let count = 0;


document.getElementById('add-button').addEventListener('click', function() {
    // main add intems button

    const inputField = document.getElementById('input-field');
    if (inputField.value.length > 0) {

        const tableBody = document.getElementById('table-body');

        // create table elements
        const tr = elements('tr');
        const th = elements('th');
        const td1 = elements('td');
        const td2 = elements('td');
        const doneButton = elements('button');
        doneButton.innerText = 'Done';
        const removeButton = elements('button');
        removeButton.innerText = 'remove';

        // add class in done and remove button
        doneButton.classList.add("btn", "btn-primary");
        removeButton.classList.add('btn', 'btn-danger', 'rmv-btn');
        // child added
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        td2.appendChild(doneButton);
        td2.appendChild(removeButton);
        tableBody.appendChild(tr);

        // add class in tr
        th.innerText = count += 1;

        td1.innerText = inputField.value;

        inputField.value = '';

        rmvButton = document.getElementsByClassName('rmv-btn');
        for (const btn of rmvButton) {


            btn.addEventListener('click', e => {
                e.target.parentNode.parentNode.remove();

            })
        }

    }
});

// all clear button