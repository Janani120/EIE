function calculateResults() {
    // Get the input values and check for valid input
    const marks1 = parseFloat(document.getElementById('marks1').value) || 0;
    const marks2 = parseFloat(document.getElementById('marks2').value) || 0;
    const marks3 = parseFloat(document.getElementById('marks3').value) || 0;
    const marks4 = parseFloat(document.getElementById('marks4').value) || 0;
    const marks5 = parseFloat(document.getElementById('marks5').value) || 0;

    // Calculate total and average
    const total = marks1 + marks2 + marks3 + marks4 + marks5;
    const average = total / 5;

    // Determine the letter grade
    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the results
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('average').textContent = average.toFixed(2);
    document.getElementById('grade').textContent = grade;

    // Make the results section visible
    const resultsSection = document.getElementById('results');
    resultsSection.classList.remove('hidden');
    
    // Scroll to the results section
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}
