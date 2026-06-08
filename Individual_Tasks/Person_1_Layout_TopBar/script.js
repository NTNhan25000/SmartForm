// Person 1 - Layout & Top Bar Functionality

class EditorLayout {
    constructor() {
        this.saveStatus = 'saved';
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Form title input
        const titleInput = document.querySelector('.form-title-input');
        titleInput.addEventListener('input', (e) => this.handleTitleChange(e));

        // Undo button
        document.querySelectorAll('.btn')[0].addEventListener('click', () => this.undo());

        // Redo button
        document.querySelectorAll('.btn')[1].addEventListener('click', () => this.redo());

        // Preview button
        document.querySelectorAll('.btn')[2].addEventListener('click', () => this.preview());

        // Share button
        document.querySelectorAll('.btn')[3].addEventListener('click', () => this.share());

        // Complete button
        document.querySelectorAll('.btn')[4].addEventListener('click', () => this.complete());

        // Auto-save simulation
        this.setupAutoSave();
    }

    handleTitleChange(e) {
        const title = e.target.value;
        console.log('Form title changed:', title);
        this.triggerSave();
    }

    triggerSave() {
        const statusDot = document.querySelector('.status-dot');
        const statusText = document.querySelector('.status-text');
        
        // Show saving status
        statusDot.classList.add('saving');
        statusText.textContent = 'Đang lưu...';
        
        // Clear timeout if exists
        if (this.saveTimeout) clearTimeout(this.saveTimeout);
        
        // Simulate save delay
        this.saveTimeout = setTimeout(() => {
            statusDot.classList.remove('saving');
            statusText.textContent = 'Đã lưu';
            this.saveStatus = 'saved';
        }, 1500);
    }

    setupAutoSave() {
        // Auto-save every 5 seconds of inactivity
        setInterval(() => {
            if (this.saveStatus === 'saved') {
                console.log('Auto-saving form...');
            }
        }, 5000);
    }

    undo() {
        console.log('Undo action');
        alert('Undo chưa được triển khai');
    }

    redo() {
        console.log('Redo action');
        alert('Redo chưa được triển khai');
    }

    preview() {
        console.log('Opening preview mode');
        alert('Preview mode sẽ được triển khai bởi Person 4');
    }

    share() {
        console.log('Opening share modal');
        alert('Share modal sẽ được triển khai bởi Person 4');
    }

    complete() {
        const title = document.querySelector('.form-title-input').value;
        if (title.trim() === '') {
            alert('Vui lòng nhập tiêu đề form');
            return;
        }
        console.log('Form completed');
        alert('Form hoàn tất: ' + title);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new EditorLayout();
});
