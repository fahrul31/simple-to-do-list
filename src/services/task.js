// Task class
export default class Task {
    id;
    text;
    completed;
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }

    createElement() {
        const taskElement = document.createElement('div');
        taskElement.className = 'bg-white border rounded-lg shadow-sm p-4 flex flex-col';

        const completedClass = this.completed ? 'line-through text-gray-400' : 'text-gray-700';

        taskElement.innerHTML = `
                    <div class="flex-1 mb-3">
                        <p class="${completedClass} text-lg break-words">${this.text}</p>
                    </div>
                    <div class="flex justify-between mt-auto">
                        <button class="toggle-button ${this.completed ? 'bg-green-500' : 'bg-gray-400'} text-white px-3 py-1 rounded-lg text-sm" data-id="${this.id}">
                            ${this.completed ? 'Tugas Selesai' : 'Tandai Sebagai Selesai'}
                        </button>
                        <button class="delete-button bg-red-100 text-red-500 hover:bg-red-200 px-3 py-1 rounded-lg text-sm" data-id="${this.id}">
                            Delete
                        </button>
                    </div>
                `;

        return taskElement;
    }
}
