document.addEventListener('DOMContentLoaded', function() {
    // Sample data for spending analysis
    const labels = ['Food', 'Clothing', 'Entertainment', 'Transportation', 'Utilities'];
    const data = [200, 150, 100, 120, 80]; // Sample spending amounts for each category
    
    // Get canvas element for chart
    const ctx = document.getElementById('spending-chart').getContext('2d');
    
    // Create and configure the chart
    const myChart = new Chart(ctx, {
        type: 'bar', // Use bar chart type
        data: {
            labels: labels,
            datasets: [{
                label: 'Spending Analysis',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Red
                    'rgba(54, 162, 235, 0.2)', // Blue
                    'rgba(255, 206, 86, 0.2)', // Yellow
                    'rgba(75, 192, 192, 0.2)', // Green
                    'rgba(153, 102, 255, 0.2)', // Purple
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start y-axis at zero
                }
            }
        }
    });
});
