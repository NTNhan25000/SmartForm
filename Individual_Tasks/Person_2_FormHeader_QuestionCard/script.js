// Person 2 - Form Header & Question Card Functionality

class FormEditor {
    constructor() {
        this.selectedQuestionCard = null;
        this.questions = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Question card selection
        document.querySelectorAll('.question-card').forEach((card, index) => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.action-btn') && !e.target.closest('input[type="checkbox"]')) {
                    this.selectQuestionCard(card);
                }
            });

            // Action buttons
            const deleteBtn = card.querySelectorAll('.action-btn')[1];
            deleteBtn.addEventListener('click', () => this.deleteQuestion(card));

            const copyBtn = card.querySelectorAll('.action-btn')[0];
            copyBtn.addEventListener('click', () => this.duplicateQuestion(card));
        });

        // Add question button
        document.querySelector('.btn-add-question').addEventListener('click', () => this.addNewQuestion());

        // Form title and description
        document.querySelector('.form-title').addEventListener('input', (e) => {
            console.log('Form title changed:', e.target.value);
        });

        document.querySelector('.form-description').addEventListener('input', (e) => {
            console.log('Form description changed:', e.target.value);
        });
    }

    selectQuestionCard(card) {
        // Remove previous active state
        document.querySelectorAll('.question-card').forEach(c => {
            c.classList.remove('question-card-active');
        });
        
        // Add active state
        card.classList.add('question-card-active');
        this.selectedQuestionCard = card;
        console.log('Selected question card');
    }

    deleteQuestion(card) {
        if (confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) {
            card.remove();
            console.log('Question deleted');
        }
    }

    duplicateQuestion(card) {
        const clonedCard = card.cloneNode(true);
        card.parentNode.insertBefore(clonedCard, card.nextSibling);
        this.initializeEventListeners();
        console.log('Question duplicated');
    }

    addNewQuestion() {
        const container = document.querySelector('.questions-container');
        const newCard = document.createElement('div');
        newCard.className = 'question-card';
        newCard.innerHTML = `
            <div class="question-header">
                <input type="text" class="question-text" placeholder="Nhập câu hỏi của bạn">
            </div>
            <div class="question-content">
                <div class="question-type-display">
                    <span class="type-badge">Trả lời ngắn</span>
                </div>
                <input type="text" class="question-preview" placeholder="Trả lời ngắn">
            </div>
            <div class="question-footer">
                <label class="checkbox-label">
                    <input type="checkbox" class="required-checkbox">
                    <span>Bắt buộc</span>
                </label>
                <div class="question-actions">
                    <button class="action-btn" title="Sao chép">📋</button>
                    <button class="action-btn" title="Xóa">🗑️</button>
                    <button class="action-btn menu-btn" title="Menu">⋮</button>
                </div>
            </div>
        `;
        container.appendChild(newCard);
        this.initializeEventListeners();
        console.log('New question added');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FormEditor();
});
