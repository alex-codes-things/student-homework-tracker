// Form Visability Handler
const add_task_dialog = document.getElementById("add-task-form-container");

// Capturing Form Data
const task_container = document.getElementById("task-container");
const add_task_form = document.getElementById("add-task-form");

add_task_form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Captureing form data
    let subject = document.getElementById("subject").value;
    let title = document.getElementById("title").value;
    let priority = document.getElementById("priority").value.toUpperCase();
    let due_date = document.getElementById("due-date").value;
    let is_complete = false;

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
    `

    task_container.appendChild(new_card);

    // Reset the form after submission
    add_task_form.reset();

    // Close the form after submission
    add_task_dialog.close().removeAttribute("open");
});