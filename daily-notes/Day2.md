# Day 2 - VS Code Setup, Base Structure, Icons, and First Task Card Layout

## Project

**Student Homework Tracker**

## Date

Day 2 focused on moving from planning into actual project development.

The main goal was to begin building the project inside VS Code, connect the project workflow properly, create the first HTML and CSS structure, and start shaping the dashboard layout.

---

## Main Goal For Day 2

The goal for Day 2 was to start the actual website/app build after completing the planning stage on Day 1.

This included:

- Setting up VS Code for a comfortable development workspace
- Connecting the project folder to GitHub using Git
- Creating the main project files
- Building the first HTML structure
- Styling the background and navigation bar
- Creating the first homework task card
- Adding subject icons
- Beginning the card-based dashboard layout
- Documenting the progress with screenshots and daily notes

---

## VS Code Setup

VS Code was set up to make the workspace more comfortable and easier to use.

Installed and configured:

- Catppuccin theme
- Material Icon Theme
- JetBrains Mono font
- Live Server
- Prettier
- Error Lens
- indent-rainbow

This helped make the coding environment cleaner, more readable, and more enjoyable to work in.

---

## Git and GitHub Workflow

The GitHub repository was connected to VS Code so changes can be made locally and then manually committed and synced to GitHub.

The workflow being used is:

```text
Edit in VS Code
Save locally
Stage changes
Commit with a clear message
Sync / Push to GitHub
```

This gives better control over when the GitHub repository gets updated.

---

## Project Files Created

The main project files were created:

```text
index.html
css/style.css
js/script.js
```

The project now has a more realistic front-end structure:

```text
student-homework-tracker
│
├── index.html
├── README.md
├── LICENSE
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── assets
│   ├── images
│   │   ├── settings-icon.png
│   │   └── subject-icons
│   └── screenshots
│
├── daily-notes
│   ├── Day1.md
│   └── Day2.md
│
└── planning
    └── project-brief.md
```

---

## Subject Icons Added

A full set of subject icons was added to the project inside:

```text
assets/images/subject-icons/
```

These icons will be used visually inside homework task cards.

Examples of subject icons added:

- Accounting
- Agriculture
- Art
- Biology
- Business Studies
- Chemistry
- Coding
- Computer Science
- Consumer Studies
- Design
- Drama
- Economics
- Engineering
- English
- Environmental Studies
- Geography
- Health Sciences
- History
- Law
- Life Orientation
- Mathematics
- Media Studies
- Music
- Other Languages
- Philosophy
- Physical Education
- Physics
- Psychology
- Religion
- Robotics
- Science
- Social Sciences
- Statistics
- Technology
- Tourism

The first card currently uses the Mathematics icon.

---

## HTML Progress

The HTML structure now includes:

- Document setup
- Linked CSS stylesheet
- Header
- Navigation bar
- Settings button
- Project title
- Add task button
- Main content area
- Schedule heading
- Task container
- First homework task card

The first task card includes:

- Subject icon
- Subject name
- Task title
- Priority badge
- Divider line
- Due date
- Completion badge
- Data attributes for future JavaScript use

The card structure is being designed so that it can later be used with JavaScript or a backend system.

The current task card stores task information using `data-*` attributes:

- `data-subject`
- `data-priority`
- `data-task`
- `data-due-date`
- `data-completed`

This will make it easier to add interactivity later, such as filtering, sorting, checking completion status, or detecting overdue tasks.

---

## Current HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="settings.html"><img src="assets/images/settings-icon.png" alt="Settings-Button" id="nav-settings-btn"></a></li>
                <li><p id="nav-project-name"><strong>Student Homework Tracker</strong></p></li>
                <li><button type="button" id="add-task-btn">+</button></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Your Schedule</h2>
        <div id="task-container">
            <article class="task-card" data-subject="Mathematics" data-priority="high" data-task="Task 5.2" data-due-date="2023-10-15" data-completed="true">
                    <div class="task-top-container">
                        <div class="task-icon-container">
                            <img src="assets/images/subject-icons/mathematics.png" alt="Subject Icon" class="task-subject-icon">
                        </div>
                        <div class="task-main-text-container">
                            <p class="task-subject"><span class="task-subject-value">Mathematics</span></p>
                            <p class="task-title"><strong><span class="task-title-value">Task 5.2</span></strong></p>
                        </div>
                        <div class="task-priority-badge-container">
                            <p><strong><span class="task-priority-badge">HIGH</span></strong></p>
                        </div>
                    </div>
                    <div class="task-divider-container">
                        <hr>
                    </div>
                    <div class="task-bottom-container">
                        <div class="task-due-date-container">
                            <p class="task-due-date"><strong>Due:</strong> <span class="task-due-date-value">2023-10-15</span></p>
                        </div>
                        <div class="task-status-badge-container">
                            <p class="task-completion-badge"><span class="task-completion-value">Completed</span></p>
                        </div>
                    </div>
            </article>
        </div>
    </main>
</body>
</html>
```

---

## CSS Progress

The CSS now includes styling for:

- Page background
- Dotted/planning-board style background
- Header/navigation bar
- Settings icon
- Project title
- Add task button
- Main content area
- Task container
- Task card
- Subject icon area
- Task subject/title layout
- Priority badge
- Divider
- Due date
- Completion badge

The layout is starting to match the planned dashboard card design.

---

## Current CSS

```css
body {
    min-height: 100vh;
    background-color: #f8fbff;
    background-image:
        radial-gradient(circle at top left, rgba(219, 234, 254, 0.45), transparent 32%),
        radial-gradient(circle at top right, rgba(219, 234, 254, 0.45), transparent 32%),
        radial-gradient(circle at bottom left, rgba(219, 234, 254, 0.45), transparent 38%),
        radial-gradient(circle at bottom right, rgba(191, 219, 254, 0.28), transparent 38%),
        radial-gradient(circle, rgba(160, 180, 210, 0.18) 1px, transparent 1.2px);
    background-size:
        auto,
        auto,
        24px 24px;
    font-family: 'inter', sans-serif;
}

/* Specifics */
.task-subject-value, .task-priority-value, .task-title-value, .task-due-date-value, .task-completion-value {
    font-family: JetBrains Mono, monospace;
}

/* Header Styles */
header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    border-radius: 20px;
}

nav ul {
    /*Spacing*/
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;

    list-style: none;
}

/* Navigation Icon Styles */
#nav-settings-btn {
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 25%;

    /* Flexbox control */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Prevent dragging and text selection */
    user-select: none;
    -webkit-user-drag: none;
}

#nav-project-name {
    font-size: 18px;
    color: #333;
    margin: 0;

    /* Prevent user selection */
    user-select: none;
}

#add-task-btn {
    background-color: #ffffff;
    color: #333;
    border: 2px solid #ccc;
    border-radius: 50%;

    font-size: 20px;
    cursor: pointer;

    /* Flexbox control */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Prevent user selection */
    user-select: none;
}

/* Main Content Styles */
main {
    /*Spacing*/
    margin: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: auto;
    padding: 20px;
    text-align: center;

    background-color: #fdffff;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#task-container {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

/* Task Card Styling */
.task-card {
    width: 550px;
    background-color: #ffffff;
    border: #f9fff8 solid 1px;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
}

.task-top-container {
    display: flex;
    align-items: center;
    padding: 5px;
    padding-bottom: 1px;
    margin-bottom: auto;
}

.task-icon-container {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.task-subject-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.task-main-text-container {
    display: flex;
    column-gap: 10px;
    flex-direction: column;
    align-items: flex-start;
}

.task-subject {
    margin-bottom: auto;
    font-size: 18px;
    color: #666;
}

.task-title {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 28px;
    color: #0a0a0a;
}

.task-priority-badge-container {
    margin-left: auto;
    margin-bottom: auto;
    margin-top: 10px;
    margin-right: 20px;
}

.task-priority-badge {
    background-color: rgb(255,155,155);
    color: red;
    border: rgb(255, 133, 133) solid 1px;
    border-radius: 5px;
    padding: 3px;
}

.task-divider-container {
    border: #fdffff solid 1px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 15px;
    margin-left: 15px;
}

.task-bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-due-date {
    margin-left: 20px;
    font-size: 18px;
}

.task-completion-badge {
    background-color: rgb(155, 255, 155);
    color: green;
    border: rgb(133, 255, 133) solid 1px;
    border-radius: 5px;
    padding: 3px;
    margin-right: 20px;
}
```

---

## Current Visual Result

By the end of Day 2, the page has:

- A clean top navigation bar
- A settings icon on the left
- Centered project name
- Add task button on the right
- Soft blue/white planning-board background
- Rounded main content container
- “Your Schedule” heading
- First styled homework task card
- Mathematics subject icon
- Priority badge
- Due date
- Completion badge

The first card is now starting to look like the planned dashboard design.

---

## Day 2 Screenshots

The following screenshots were captured to document Day 2 progress.

### VS Code File Changes

This screenshot shows the project changes waiting to be committed, including new subject icons, updated HTML/CSS, and daily note files.

![VS Code file changes](../assets/screenshots/day-2-file-changes.png)

### Dashboard Preview

This screenshot shows the current browser preview of the Student Homework Tracker dashboard.

![Dashboard preview](../assets/screenshots/day-2-dashboard-preview.png)

### Current HTML Structure

This screenshot shows the current HTML structure for the navigation bar, main schedule area, and task card.

![HTML structure](../assets/screenshots/day-2-html-structure.png)

### Current CSS Styling

This screenshot shows the current CSS work for the page background, navigation, main container, task card, badges, and layout.

![CSS styling](../assets/screenshots/day-2-css-styling.png)

---

## Current Screenshot Notes

Screenshots from Day 2 show:

- The current file changes in VS Code
- Added subject icons inside the assets folder
- The current working dashboard in the browser
- The first styled task card
- Current `index.html`
- Current `style.css`

These screenshots help document the project progress visually.

---

## What I Learned On Day 2

On Day 2, I practiced:

- Connecting VS Code work to GitHub
- Creating a clean project file structure
- Writing the first HTML layout
- Using semantic structure with `header`, `nav`, `main`, and `article`
- Using reusable CSS classes
- Creating a card-style layout
- Using Flexbox for navigation and card layout
- Adding images into HTML
- Organizing assets into folders
- Styling badges
- Using a dotted dashboard-style background
- Keeping project progress documented

---

## Completed On Day 2

Completed tasks:

- Connected the project to VS Code
- Confirmed Git workflow works
- Created `index.html`
- Created `css/style.css`
- Created `js/script.js`
- Added subject icons
- Added settings icon
- Built the header/navigation layout
- Added the main schedule area
- Created the first homework task card
- Added task data attributes for future JavaScript
- Styled the first task card
- Added priority and completion badges
- Started matching the planned dashboard design
- Created Day 1 documentation
- Started Day 2 documentation

---

## Notes For Improvement

Things to improve later:

- Change the page `<title>` from `Document` to `Student Homework Tracker`
- Import Inter properly through Google Fonts or another font source
- Import JetBrains Mono properly for public consistency
- Refine the task card spacing
- Make the card more responsive for smaller screens
- Add more sample cards
- Add different priority styles
- Add overdue task styling
- Add completed/not completed visual states
- Add hover effects later
- Add JavaScript functionality later
- Consider renaming `data-task` to `data-task-title` for clearer future JavaScript use
- Consider creating reusable CSS classes for high, medium, low, completed, not completed, and overdue states

---

## Next Steps

The next steps after Day 2 are:

- Add more manual sample task cards
- Create examples for high, medium, and low priority
- Create examples for completed, not completed, and overdue tasks
- Improve card spacing and badge styling
- Continue refining the CSS layout
- Begin planning the add-task form
- Keep committing progress to GitHub

---

## Day 2 Summary

Day 2 moved the project from planning into actual development.

The project now has a working HTML and CSS foundation, a clean dashboard layout, subject icons, and the first styled homework task card.

The app is not functional yet, but the visual foundation is now in place and ready for more cards, improved styling, and eventually JavaScript behavior.