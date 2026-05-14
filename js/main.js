// Form Visability Handler
const add_task_dialog = document.getElementById("add-task-form-container");
const add_task_btn = document.getElementById("add-task-btn");
const form_close_btn = document.getElementById("form-close-btn");

add_task_btn.addEventListener('click', () => {
    add_task_dialog.showModal();
    document.body.classList.add("no-scroll");
});

form_close_btn.addEventListener('click', () => {
    add_task_dialog.close();
    document.body.classList.remove("no-scroll");
});

// Capturing Form Data
const task_container = document.getElementById("task-container");
const add_task_form = document.getElementById("add-task-form");
const error_msg = document.getElementById("form-message")

add_task_form.addEventListener("submit", function(event) {
    // Preventing the default form submission and refreshing the page
    event.preventDefault(); 

    // Captureing form data
    let subject = document.getElementById("subject").value.strip();
    let title = document.getElementById("title").value.strip();
    let priority = document.getElementById("priority").value.toUpperCase().strip();
    let due_date = document.getElementById("due-date").value.strip();
    let is_complete = false;
    let can_create = false;

    if (subject == "") {
        can_create = false
    }
    else if (title == "") {
        can_create = false
    }
    else if (priority == "") {
        can_create = false
    }
    else if (due_date == "") {
        can_create = false
    }
    else {
        can_create = true
    }

    if (can_create == true) {
        // Creating the task card
        const new_card = document.createElement("article");

        new_card.classList.add("task-card");
        new_card.dataset.subject = subject;
        new_card.dataset.priority = priority;
        new_card.dataset.task = title;
        new_card.dataset.due_date = due_date;

        new_card.innerHTML = `
            <div class="task-top-container">
                <div class="task-icon-container">
                    <img src="assets/images/subject-icons/mathematics.png" alt="Subject Icon" class="task-subject-icon">
                </div>
                <div class="task-main-text-container">
                    <p class="task-subject"><span class="task-subject-value">${subject}</span></p>
                    <p class="task-title"><strong><span class="task-title-value">${title}</span></strong></p>
                </div>
                <div class="task-priority-badge-container">
                    <p><strong><span class="task-priority-badge">${priority}</span></strong></p>
                </div>
            </div>
            <div class="task-divider-container">
                <hr>
            </div>
            <div class="task-bottom-container">
                <div class="task-due-date-container">
                    <p class="task-due-date"><strong>Due:</strong> <span class="task-due-date-value">${due_date}</span></p>
                </div>
                <div class="task-status-badge-container">
                    <p class="task-completion-badge"><span class="task-completion-value">Incomplete</span></p>
                </div>
            </div>
        `;

        task_container.appendChild(new_card);

        // Reset the form after submission
        add_task_form.reset();

        // Close the form after submission
        add_task_dialog.close().removeAttribute("open");
    }
    else {
        error_msg.innerHTML = "Error: Please Fill the form in!";
    }
});