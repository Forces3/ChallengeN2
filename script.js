// Global variables
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeNavigation();
    initializeFormHandlers();
    initializeAnimations();
});

// Initialize all charts
function initializeCharts() {
    createHeroChart();
    createPopularQueriesChart();
    createTrendsChart();
    createGeoChart();
    createSeasonalityChart();
}

// Create hero chart
function createHeroChart() {
    const ctx = document.getElementById('heroChart');
    if (!ctx) return;

    const data = {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        datasets: [{
            label: 'Поисковые запросы',
            data: [1200, 1350, 1420, 1580, 1650, 1720, 1680, 1750, 1820, 1950, 2100, 2250],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            tension: 0.4,
            fill: true
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    charts.heroChart = new Chart(ctx, config);
}

// Create popular queries chart
function createPopularQueriesChart() {
    const ctx = document.getElementById('popularQueriesChart');
    if (!ctx) return;

    const data = {
        labels: ['SEO анализ', 'Ключевые слова', 'Конкурентный анализ', 'Поисковая оптимизация', 'Маркетинг'],
        datasets: [{
            label: 'Популярность',
            data: [85, 72, 68, 65, 58],
            backgroundColor: [
                '#2563eb',
                '#3b82f6',
                '#60a5fa',
                '#93c5fd',
                '#dbeafe'
            ],
            borderWidth: 0
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    };

    charts.popularQueriesChart = new Chart(ctx, config);
}

// Create trends chart
function createTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;

    const data = {
        labels: ['1 нед', '2 нед', '3 нед', '4 нед'],
        datasets: [{
            label: 'Растущие тренды',
            data: [12, 19, 15, 25],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4
        }, {
            label: 'Падающие тренды',
            data: [8, 12, 6, 15],
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    charts.trendsChart = new Chart(ctx, config);
}

// Create geographic chart
function createGeoChart() {
    const ctx = document.getElementById('geoChart');
    if (!ctx) return;

    const data = {
        labels: ['Москва', 'СПб', 'Новосибирск', 'Екатеринбург', 'Казань'],
        datasets: [{
            label: 'Активность',
            data: [45, 32, 18, 15, 12],
            backgroundColor: [
                '#2563eb',
                '#3b82f6',
                '#60a5fa',
                '#93c5fd',
                '#dbeafe'
            ],
            borderWidth: 0
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    charts.geoChart = new Chart(ctx, config);
}

// Create seasonality chart
function createSeasonalityChart() {
    const ctx = document.getElementById('seasonalityChart');
    if (!ctx) return;

    const data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Сезонность',
            data: [65, 85, 75, 95],
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.4,
            fill: true
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    };

    charts.seasonalityChart = new Chart(ctx, config);
}

// Initialize navigation
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Initialize form handlers
function initializeFormHandlers() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.analytics-card, .competitor-card, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Сообщение успешно отправлено!', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Handle newsletter subscription
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    if (!email) {
        showNotification('Пожалуйста, введите email', 'error');
        return;
    }
    
    // Simulate subscription
    const submitBtn = e.target.querySelector('button');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Вы успешно подписались на рассылку!', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Analyze keywords function
function analyzeKeywords() {
    const keywordInput = document.getElementById('keywordInput');
    const regionSelect = document.getElementById('regionSelect');
    const periodSelect = document.getElementById('periodSelect');
    const resultsContainer = document.getElementById('toolResults');
    
    if (!keywordInput.value.trim()) {
        showNotification('Пожалуйста, введите ключевые слова', 'error');
        return;
    }
    
    // Show loading state
    resultsContainer.innerHTML = `
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Анализируем ключевые слова...</p>
        </div>
    `;
    
    // Simulate analysis
    setTimeout(() => {
        const keywords = keywordInput.value.split(',').map(k => k.trim());
        const results = generateAnalysisResults(keywords, regionSelect.value, periodSelect.value);
        resultsContainer.innerHTML = results;
    }, 3000);
}

// Generate analysis results
function generateAnalysisResults(keywords, region, period) {
    const results = keywords.map(keyword => {
        const popularity = Math.floor(Math.random() * 100) + 20;
        const trend = Math.random() > 0.5 ? 'up' : 'down';
        const trendValue = Math.floor(Math.random() * 30) + 5;
        const competition = Math.floor(Math.random() * 100);
        const volume = Math.floor(Math.random() * 10000) + 1000;
        
        return `
            <div class="keyword-result">
                <div class="keyword-header">
                    <h4>${keyword}</h4>
                    <span class="trend ${trend}">
                        <i class="fas fa-arrow-${trend}"></i>
                        ${trendValue}%
                    </span>
                </div>
                <div class="keyword-metrics">
                    <div class="metric">
                        <span class="metric-label">Популярность</span>
                        <span class="metric-value">${popularity}/100</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Конкуренция</span>
                        <span class="metric-value">${competition}/100</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Объем поиска</span>
                        <span class="metric-value">${volume.toLocaleString()}</span>
                    </div>
                </div>
                <div class="keyword-recommendation">
                    <strong>Рекомендация:</strong> 
                    ${popularity > 70 ? 'Высокий потенциал' : popularity > 40 ? 'Средний потенциал' : 'Низкий потенциал'}
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <div class="analysis-results">
            <div class="results-header">
                <h3>Результаты анализа</h3>
                <p>Анализ для региона: ${region}, период: ${period} дней</p>
            </div>
            <div class="results-content">
                ${results}
            </div>
            <div class="results-actions">
                <button class="btn btn-primary" onclick="exportAnalysis()">
                    <i class="fas fa-download"></i>
                    Экспорт результатов
                </button>
            </div>
        </div>
    `;
}

// Export chart function
function exportChart(chartId) {
    const chart = charts[chartId];
    if (!chart) return;
    
    try {
        const canvas = chart.canvas;
        const link = document.createElement('a');
        link.download = `${chartId}-chart.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
        
        showNotification('График экспортирован!', 'success');
    } catch (error) {
        console.error('Ошибка при экспорте графика:', error);
        showNotification('Ошибка при экспорте графика', 'error');
    }
}

// Download report function
function downloadReport() {
    showNotification('Отчет готовится к скачиванию...', 'info');
    
    setTimeout(() => {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Add title
            doc.setFontSize(20);
            doc.setFont(undefined, 'bold');
            doc.text('Отчет по анализу поисковой строки', 20, 30);
            
            // Add subtitle
            doc.setFontSize(14);
            doc.setFont(undefined, 'normal');
            doc.text('Профессиональная аналитика SEO трендов', 20, 45);
            
            // Add date
            doc.setFontSize(12);
            doc.text(`Дата создания: ${new Date().toLocaleDateString('ru-RU')}`, 20, 60);
            
            // Add content sections
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text('Основные показатели:', 20, 80);
            
            doc.setFontSize(12);
            doc.setFont(undefined, 'normal');
            doc.text('• Популярные поисковые запросы', 25, 95);
            doc.text('• Тренды и динамика популярности', 25, 105);
            doc.text('• Конкурентный анализ', 25, 115);
            doc.text('• Географическое распределение', 25, 125);
            doc.text('• Сезонность запросов', 25, 135);
            
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text('Рекомендации:', 20, 155);
            
            doc.setFontSize(12);
            doc.setFont(undefined, 'normal');
            doc.text('• Оптимизация под высокочастотные запросы', 25, 170);
            doc.text('• Разработка контент-стратегии', 25, 180);
            doc.text('• Мониторинг конкурентов', 25, 190);
            doc.text('• Анализ сезонных трендов', 25, 200);
            
            // Save the PDF
            doc.save('search-analytics-report.pdf');
            showNotification('Отчет успешно скачан!', 'success');
        } catch (error) {
            console.error('Ошибка при создании PDF:', error);
            showNotification('Ошибка при создании PDF', 'error');
        }
    }, 2000);
}

// Export analysis function
function exportAnalysis() {
    showNotification('Результаты анализа экспортируются...', 'info');
    
    setTimeout(() => {
        try {
            const resultsContainer = document.getElementById('toolResults');
            if (!resultsContainer || resultsContainer.children.length === 0) {
                showNotification('Нет данных для экспорта', 'error');
                return;
            }
            
            html2canvas(resultsContainer, {
                scale: 2,
                useCORS: true,
                allowTaint: true
            }).then(canvas => {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                // Add title
                doc.setFontSize(18);
                doc.setFont(undefined, 'bold');
                doc.text('Результаты анализа ключевых слов', 20, 30);
                
                // Add date
                doc.setFontSize(12);
                doc.setFont(undefined, 'normal');
                doc.text(`Дата анализа: ${new Date().toLocaleDateString('ru-RU')}`, 20, 45);
                
                // Add the canvas image
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 170;
                const pageHeight = 295;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;
                let position = 60;
                
                doc.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                
                // Save the PDF
                doc.save('keyword-analysis-results.pdf');
                showNotification('Анализ экспортирован в PDF!', 'success');
            }).catch(error => {
                console.error('Ошибка при создании PDF:', error);
                showNotification('Ошибка при создании PDF', 'error');
            });
        } catch (error) {
            console.error('Ошибка при экспорте:', error);
            showNotification('Ошибка при экспорте', 'error');
        }
    }, 1500);
}

// Subscribe to newsletter function
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail');
    if (!email.value) {
        showNotification('Пожалуйста, введите email', 'error');
        return;
    }
    
    showNotification('Вы успешно подписались на рассылку!', 'success');
    email.value = '';
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .loading-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--text-muted);
    }
    
    .loading-state i {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }
    
    .analysis-results {
        width: 100%;
    }
    
    .results-header {
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .results-header h3 {
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .results-header p {
        color: var(--text-secondary);
        margin-bottom: 0;
    }
    
    .keyword-result {
        background-color: var(--surface-color);
        border-radius: var(--border-radius);
        padding: 1.5rem;
        margin-bottom: 1rem;
    }
    
    .keyword-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .keyword-header h4 {
        margin-bottom: 0;
        color: var(--text-primary);
    }
    
    .trend {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: var(--border-radius);
        font-size: 0.875rem;
    }
    
    .trend.up {
        background-color: rgba(16, 185, 129, 0.1);
        color: #10b981;
    }
    
    .trend.down {
        background-color: rgba(239, 68, 68, 0.1);
        color: #ef4444;
    }
    
    .keyword-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .keyword-recommendation {
        padding: 0.75rem;
        background-color: white;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--primary-color);
    }
    
    .results-actions {
        text-align: center;
        margin-top: 2rem;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet); 