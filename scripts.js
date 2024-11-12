// You can add some homepage interactivity or leave it empty
console.log("Welcome to the Surgery Compare homepage!");
function searchHospitals() {
    // Get user input
    const surgeryType = document.getElementById('surgery-type').value;
    const location = document.getElementById('location').value;

    if (!surgeryType || !location) {
        alert('Please fill out both fields!');
        return;
    }

    // Clear the current hospital list
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = '';

    // Mock data for demonstration
    const hospitals = [
        { name: 'City Hospital', cost: 12000, rating: 4, location: 'New York', id: 1 },
        { name: 'HealthCare Center', cost: 15000, rating: 5, location: 'New York', id: 2 },
        { name: 'Regional Clinic', cost: 10000, rating: 3, location: 'New York', id: 3 },
    ];

    // Filter hospitals based on user search
    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(surgeryType.toLowerCase()) &&
        hospital.location.toLowerCase().includes(location.toLowerCase())
    );

    // Create hospital cards for each filtered result
    filteredHospitals.forEach(hospital => {
        const card = document.createElement('div');
        card.classList.add('hospital-card');
        card.innerHTML = `
            <h3>${hospital.name}</h3>
            <p>Location: ${hospital.location}</p>
            <p>Rating: ${hospital.rating} Stars</p>
            <p class="price">$${hospital.cost}</p>
            <button onclick="viewDetails(${hospital.id})">View Details</button>
        `;
        hospitalList.appendChild(card);
    });
}

function viewDetails(id) {
    alert('View details for hospital ID: ' + id);
}