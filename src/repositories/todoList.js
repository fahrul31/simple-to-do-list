import Task from '../services/task.js';

// TodoList class
export default class TodoList {
    // Task collection
    tasks = [];
    constructor() {
        // DOM elements
        this.taskInput = document.getElementById('taskInput');
        this.addButton = document.getElementById('addButton');
        this.taskGrid = document.getElementById('taskGrid');
        this.emptyMessage = document.getElementById('emptyMessage');

        // Initialize
        this.loadTasks();
        this.setupEventListeners();
    }

    // Load tasks from localStorage
    loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const taskData = JSON.parse(savedTasks);
            this.tasks = taskData.map(data => new Task(data.id, data.text, data.completed));
            this.renderTasks();
        }
    }

    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Set up event listeners
    setupEventListeners() {
        this.addButton.addEventListener('click', () => this.addTask());

        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        this.taskGrid.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (!button) return;

            const id = button.getAttribute('data-id');

            if (button.classList.contains('toggle-button')) {
                this.toggleTask(id);
            } else if (button.classList.contains('delete-button')) {
                this.deleteTask(id);
            }
        });
    }

    // Render all tasks
    renderTasks() {
        this.taskGrid.innerHTML = '';

        if (this.tasks.length === 0) {
            this.emptyMessage.style.display = 'block';
        } else {
            this.emptyMessage.style.display = 'none';

            this.tasks.forEach(task => {
                const taskElement = task.createElement();
                this.taskGrid.appendChild(taskElement);
            });
        }
    }

    // Add a new task
    addTask() {
        const text = this.taskInput.value.trim();
        if (text !== '') {
            const newTask = new Task(Date.now().toString(), text);
            this.tasks.push(newTask);
            this.saveTasks();
            this.renderTasks();

            this.taskInput.value = '';
        }
    }

    // Toggle task completion status
    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggle();
            this.saveTasks();
            this.renderTasks();
        }
    }

    // Delete a task
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }
}
