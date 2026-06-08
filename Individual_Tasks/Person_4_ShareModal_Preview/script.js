// Person 4 - Share Modal & Preview Mode Functionality

class ShareAndPreview {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Preview buttons
        document.getElementById('previewBtn').addEventListener('click', () => this.openPreview());
        document.getElementById('closePreviewBtn').addEventListener('click', () => this.closePreview());

        // Share buttons
        document.getElementById('shareBtn').addEventListener('click', () => this.openShare());
        document.getElementById('closeShareBtn').addEventListener('click', () => this.closeShare());

        // Tab switching in share modal
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target));
        });

        // Copy and Send buttons
        document.getElementById('copyLinkBtn').addEventListener('click', () => this.copyToClipboard('link'));
        document.getElementById('copyEmbedBtn').addEventListener('click', () => this.copyToClipboard('embed'));
        document.getElementById('sendEmailBtn').addEventListener('click', () => this.sendEmail());

        // Preview form submission
        document.querySelector('.preview-form').addEventListener('submit', (e) => this.submitPreviewForm(e));

        // Confirmation modal close
        document.getElementById('confirmationCloseBtn').addEventListener('click', () => this.closeConfirmation());
    }

    openPreview() {
        console.log('Opening preview mode');
        document.getElementById('previewModal').classList.add('active');
    }

    closePreview() {
        console.log('Closing preview mode');
        document.getElementById('previewModal').classList.remove('active');
    }

    openShare() {
        console.log('Opening share modal');
        document.getElementById('shareModalOverlay').classList.add('active');
    }

    closeShare() {
        console.log('Closing share modal');
        document.getElementById('shareModalOverlay').classList.remove('active');
    }

    switchTab(tabBtn) {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-btn-active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('tab-content-active'));

        // Add active class to selected tab
        tabBtn.classList.add('tab-btn-active');
        const tabName = tabBtn.dataset.tab;
        document.getElementById(`${tabName}-tab`).classList.add('tab-content-active');
        
        console.log(`Switched to tab: ${tabName}`);
    }

    copyToClipboard(type) {
        const input = type === 'link' 
            ? document.querySelector('.share-input')
            : document.querySelectorAll('.share-input')[1];
        
        input.select();
        document.execCommand('copy');
        
        console.log(`Copied ${type} to clipboard`);
        
        // Show feedback
        const btn = type === 'link' ? document.getElementById('copyLinkBtn') : document.getElementById('copyEmbedBtn');
        const originalText = btn.textContent;
        btn.textContent = '✅ Đã sao chép';
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }

    sendEmail() {
        const emailInput = document.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Vui lòng nhập địa chỉ email');
            return;
        }
        
        console.log(`Sending to email: ${email}`);
        alert(`Biểu mẫu sẽ được gửi đến: ${email}`);
        emailInput.value = '';
    }

    submitPreviewForm(e) {
        e.preventDefault();
        console.log('Form submitted in preview mode');
        
        // Close preview
        this.closePreview();
        
        // Show confirmation
        document.getElementById('confirmationModal').classList.add('active');
    }

    closeConfirmation() {
        document.getElementById('confirmationModal').classList.remove('active');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ShareAndPreview();
});
