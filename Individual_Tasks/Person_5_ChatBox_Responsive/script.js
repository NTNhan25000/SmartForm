// Person 5 - AI Chatbox & Responsive Polish Functionality

class AIChatbox {
    constructor() {
        this.isOpen = false;
        this.conversationHistory = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Toggle button
        document.getElementById('aiToggleBtn').addEventListener('click', () => this.toggleChatbox());

        // Close button
        document.getElementById('aiCloseBtn').addEventListener('click', () => this.closeChatbox());

        // Refresh button
        document.getElementById('aiRefreshBtn').addEventListener('click', () => this.refreshChatbox());

        // Send button
        document.getElementById('sendBtn').addEventListener('click', () => this.sendMessage());

        // Input enter key
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Quick action buttons
        document.querySelectorAll('.quick-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleQuickAction(e.target));
        });
    }

    toggleChatbox() {
        if (this.isOpen) {
            this.closeChatbox();
        } else {
            this.openChatbox();
        }
    }

    openChatbox() {
        console.log('Opening chatbox');
        this.isOpen = true;
        document.getElementById('aiChatbox').classList.add('open');
        document.getElementById('aiToggleBtn').classList.add('open');
        document.getElementById('chatInput').focus();
    }

    closeChatbox() {
        console.log('Closing chatbox');
        this.isOpen = false;
        document.getElementById('aiChatbox').classList.remove('open');
        document.getElementById('aiToggleBtn').classList.remove('open');
    }

    refreshChatbox() {
        console.log('Refreshing chatbox');
        const container = document.getElementById('messagesContainer');
        
        // Show loading state
        const statusDot = document.querySelector('.status-dot');
        statusDot.classList.remove('online');
        statusDot.classList.add('checking');
        
        // Simulate refresh delay
        setTimeout(() => {
            statusDot.classList.remove('checking');
            statusDot.classList.add('online');
            this.showToast('AI Assistant đã được làm mới', 'info');
        }, 1500);
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate AI response delay
        setTimeout(() => {
            this.removeTypingIndicator();
            this.addMessage(this.getAIResponse(message), 'ai');
            this.showToast('AI đã trả lời', 'success');
        }, 1500);
    }

    addMessage(text, sender) {
        const container = document.getElementById('messagesContainer');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = text;

        messageDiv.appendChild(bubble);
        container.appendChild(messageDiv);

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;

        this.conversationHistory.push({ sender, text });
    }

    showTypingIndicator() {
        const container = document.getElementById('messagesContainer');
        const message = document.createElement('div');
        message.className = 'message ai-message';
        message.id = 'typing-indicator';

        const dots = document.createElement('div');
        dots.className = 'typing-indicator';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'typing-dot';
            dots.appendChild(dot);
        }

        message.appendChild(dots);
        container.appendChild(message);
        container.scrollTop = container.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    getAIResponse(userMessage) {
        const responses = {
            default: 'Đó là một ý tưởng tuyệt vời! Tôi có thể giúp bạn phát triển điều này thêm.',
            question: 'Câu hỏi hay! Bạn có thể thêm các tùy chọn để người dùng dễ trả lời hơn.',
            title: 'Tiêu đề rất hay! Hãy thêm một mô tả chi tiết để người dùng hiểu rõ hơn.',
            improve: 'Tôi gợi ý rằng bạn nên làm cho nó ngắn gọn và dễ hiểu hơn.'
        };

        const lower = userMessage.toLowerCase();
        if (lower.includes('câu hỏi') || lower.includes('question')) return responses.question;
        if (lower.includes('tiêu đề') || lower.includes('title')) return responses.title;
        if (lower.includes('cải thiện') || lower.includes('improve')) return responses.improve;
        return responses.default;
    }

    handleQuickAction(btn) {
        const action = btn.dataset.action;
        console.log(`Quick action: ${action}`);

        let message = '';
        switch (action) {
            case 'suggest-questions':
                message = 'Gợi ý một số câu hỏi phù hợp cho form này';
                break;
            case 'improve-title':
                message = 'Cải thiện tiêu đề form của tôi';
                break;
            case 'add-questions':
                message = 'Thêm một số câu hỏi tốt cho khảo sát này';
                break;
        }

        if (message) {
            document.getElementById('chatInput').value = message;
            this.sendMessage();
        }
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AIChatbox();

    // Add responsive polish
    handleResponsiveChanges();
    window.addEventListener('resize', handleResponsiveChanges);
});

function handleResponsiveChanges() {
    const width = window.innerWidth;
    const chatbox = document.getElementById('aiChatbox');
    
    if (width < 480) {
        // Mobile: Make chatbox fullscreen
        chatbox.style.position = 'fixed';
    } else {
        // Desktop: Fixed position
        chatbox.style.position = 'relative';
    }
}

// Add toast animation
const style = document.createElement('style');
style.textContent = `
    @keyframes toastOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
