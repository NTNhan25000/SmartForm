// Person 3 - Sidebar & Theme Picker Functionality

class SidebarThemePicker {
    constructor() {
        this.currentTheme = 'blue';
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Question type buttons
        document.querySelectorAll('.question-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = btn.dataset.type;
                this.addQuestionType(type);
            });
        });

        // Theme buttons
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectTheme(btn);
            });
        });
    }

    addQuestionType(type) {
        const typeLabels = {
            short: 'Trả lời ngắn',
            paragraph: 'Đoạn văn',
            multiple: 'Lựa chọn nhiều',
            checkbox: 'Hộp kiểm',
            dropdown: 'Thả xuống',
            scale: 'Thang đo tuyến tính',
            date: 'Ngày',
            time: 'Giờ'
        };

        console.log(`Adding question type: ${typeLabels[type]}`);
        alert(`Thêm loại câu hỏi: ${typeLabels[type]}`);
        // Emit event to add question
        // document.dispatchEvent(new CustomEvent('addQuestion', { detail: { type } }));
    }

    selectTheme(btn) {
        // Remove active from all
        document.querySelectorAll('.theme-btn').forEach(b => {
            b.classList.remove('theme-btn-active');
        });

        // Add active to selected
        btn.classList.add('theme-btn-active');
        
        const theme = btn.dataset.theme;
        this.currentTheme = theme;
        console.log(`Theme selected: ${theme}`);
        
        // Get the color
        const color = btn.style.getPropertyValue('--color');
        console.log(`Theme color: ${color}`);
        
        // Apply theme to preview
        this.updatePreview(color);
    }

    updatePreview(color) {
        const preview = document.querySelector('.preview-header');
        if (typeof color === 'string' && color.includes('gradient')) {
            preview.style.background = color;
        } else {
            const darkColor = this.getDarkerColor(color);
            preview.style.background = `linear-gradient(135deg, ${color}, ${darkColor})`;
        }
    }

    getDarkerColor(color) {
        // Simple color darkening (for solid colors)
        const colors = {
            '#4285f4': '#3367d6',
            '#ea4335': '#c5221f',
            '#34a853': '#2d652d',
            '#fbbc04': '#f57c00',
            '#9c27b0': '#7b1fa2',
            '#5f6368': '#424242'
        };
        return colors[color] || color;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SidebarThemePicker();
});
