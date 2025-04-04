function showReview() {
    const studentName = document.getElementById('studentName').value;
    const studentDOB = document.getElementById('studentDOB').value;
    const studentGender = document.getElementById('studentGender').value;
    const fatherName = document.getElementById('fatherName').value;
    const motherName = document.getElementById('motherName').value;
    const parentEmail = document.getElementById('parentEmail').value;
    const parentPhone = document.getElementById('parentPhone').value;
    const addressLine1 = document.getElementById('addressLine1').value;
    const addressLine2 = document.getElementById('addressLine2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postalCode').value;

    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = `
        <div class="review-item"><span class="review-label">Student Name:</span> ${studentName}</div>
        <div class="review-item"><span class="review-label">Date of Birth:</span> ${studentDOB}</div>
        <div class="review-item"><span class="review-label">Gender:</span> ${studentGender}</div>
        <div class="review-item"><span class="review-label">Father's Name:</span> ${fatherName}</div>
        <div class="review-item"><span class="review-label">Mother's Name:</span> ${motherName}</div>
        <div class="review-item"><span class="review-label">Parent's Email:</span> ${parentEmail}</div>
        <div class="review-item"><span class="review-label">Parent's Phone:</span> ${parentPhone}</div>
        <div class="review-item"><span class="review-label">Address Line 1:</span> ${addressLine1}</div>
        <div class="review-item"><span class="review-label">Address Line 2:</span> ${addressLine2}</div>
        <div class="review-item"><span class="review-label">City:</span> ${city}</div>
        <div class="review-item"><span class="review-label">State/Province:</span> ${state}</div>
        <div class="review-item"><span class="review-label">Postal Code:</span> ${postalCode}</div>
    `;

    // Show the review section and the submit button
    document.getElementById('reviewDetails').style.display = 'block';
    document.querySelector('button[type="submit"]').style.display = 'block';
}

// Initially hide the review section
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reviewDetails').style.display = 'none';
});