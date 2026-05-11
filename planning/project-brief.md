# Project Brief - Student Homework Tracker

## Project Name

Student Homework Tracker

---

## Project Summary

Student Homework Tracker is a simple dashboard-style web app that helps students manage their homework tasks in one place.

The app will allow a student to add homework tasks with a subject, due date, priority level, and completion status. The dashboard will also make overdue tasks easy to notice so the student can quickly see which work needs urgent attention.

This project is being built as a beginner-friendly web development project using HTML, CSS, and JavaScript.

---

## Problem This Project Solves

Students often have homework from different subjects with different due dates and priority levels. It can become difficult to remember what needs to be done, what is already completed, and what is overdue.

This project solves that problem by giving students a simple visual dashboard where they can track all homework tasks clearly.

Instead of relying on memory, paper notes, or scattered reminders, the student can view all their homework in one organized place.

---

## Target User

The target user is a student who wants a simple and easy way to manage homework.

The user may need to track:

- Homework from multiple subjects
- Due dates
- Important tasks
- Completed work
- Overdue work

The app should be simple enough for a student to understand quickly without needing instructions.

---

## Main Goal

The main goal is to create a useful homework dashboard where a student can add, view, and manage homework tasks.

By the end of version 1, the user should be able to:

- Add a homework task
- Add the subject for the task
- Add a due date
- Choose a priority level
- See the task displayed on the dashboard
- Mark the task as completed
- Clearly see when a task is overdue

---

## Version 1 Scope

Version 1 will focus only on the core features needed to make the app useful.

### Included In Version 1

- Basic dashboard layout
- Homework input form
- Subject field
- Task/title field
- Due date field
- Priority selection
- Completed/not completed status
- Task display area
- Homework task cards
- Overdue task highlighting
- Basic responsive layout
- Simple clean styling

### Not Included In Version 1

These features are useful, but they will be saved for later versions:

- User accounts
- Login system
- Database storage
- Cloud syncing
- Calendar integration
- Notifications
- Sharing tasks with other users
- Advanced animations

---

## Core Features

### 1. Add Homework Task

The user should be able to add a new homework task using a form.

The form should collect:

- Subject
- Homework title or description
- Due date
- Priority level
- Completion status

---

### 2. Display Homework Tasks

After a task is added, it should appear on the dashboard in a clear and readable way.

Each homework task should show:

- Subject
- Task title
- Due date
- Priority
- Completed status

---

### 3. Priority Levels

Each task should have a priority level so the student can tell how important the task is.

Planned priority levels:

- Low
- Medium
- High

High priority tasks should visually stand out more than low priority tasks.

---

### 4. Completed Status

The user should be able to see whether a task is completed or not completed.

A completed task should look different from an incomplete task so the user can quickly tell the difference.

Possible completed task styles:

- Faded card
- Check mark
- Completed label
- Crossed-out task title

---

### 5. Overdue Highlighting

If a homework task is past its due date and has not been completed, it should be highlighted as overdue.

This is one of the main features of the project.

Overdue tasks should be easy to notice using a warning style such as:

- Red border
- Red label
- Light red background
- Overdue badge

Completed tasks should not be treated as overdue, even if the due date has passed.

---

## Planned Layout

The app layout will be simple and dashboard-style.

### Main Sections

The page will include:

- Top navigation bar
- Dashboard heading
- Homework input form
- Task display section
- Homework task cards
- Possible summary section

---

## Layout Plan

The general layout idea:

```text
Top Navigation Bar
- Settings icon
- App name
- Add task button or main action area

Dashboard Area
- Page heading
- Short summary or stats

Homework Form
- Subject input
- Task title input
- Due date input
- Priority selector
- Add task button

Homework Task List
- Task cards
- Subject
- Task details
- Due date
- Priority badge
- Completed status
- Overdue warning when needed
