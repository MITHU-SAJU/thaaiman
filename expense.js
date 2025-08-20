const ctx = document.getElementById('expenseChart');
if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Ingredients', 'Suppliers', 'Maintenance', 'Others'],
            datasets: [{
                data: [40000, 25000, 12000, 8000],
                backgroundColor: ['#f1c40f', '#3498db', '#2ecc71', '#e74c3c'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } }
        }
    });
}