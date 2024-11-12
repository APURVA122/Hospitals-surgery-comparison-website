// Sample data for hospitals and surgeries
const hospitalsData = [
    {
        name: "Indraprastha Apollo Hospital",
        location: "New Delhi",
        surgeryType: "Heart Surgery",
        cost: "₹3,50,000",
        doctor: "Dr. R. Sharma",
        doctorReputation: "4.7/5",
        doctorExperience: "20 Years",
        details: "Coronary Bypass Surgery, Recovery Time 5 weeks."
    },
    {
        name: "Manipal Hospitals",
        location: "Dwarka, Delhi",
        surgeryType: "Heart Surgery",
        cost: "₹2,80,000",
        doctor: "Dr. S. Kumar",
        doctorReputation: "4.8/5",
        doctorExperience: "18 Years",
        details: "Open Heart Surgery, Full Recovery in 4 weeks."
    },
    {
        name: "Fortis Hospital",
        location: "Vasant Kunj, Delhi",
        surgeryType: "Heart Surgery",
        cost: "₹3,00,000",
        doctor: "Dr. P. Verma",
        doctorReputation: "4.9/5",
        doctorExperience: "18 Years",
        details: "Minimally Invasive Heart Surgery, Recovery Time 3 weeks."
    },
    {
        name: "IBS Institute of Brain and Spine",
        location: "New Delhi",
        surgeryType: "Brain Surgery",
        cost: "₹5,00,000",
        doctor: "Dr. A. Gupta",
        doctorReputation: "4.6/5",
        doctorExperience: "22 Years",
        details: "Brain Tumor Surgery, Full Recovery in 6 weeks."
    },
    {
        name: "Sir Ganga Ram Hospital",
        location: "Delhi",
        surgeryType: "Heart Surgery",
        cost: "₹3,20,000",
        doctor: "Dr. A. Mehta",
        doctorReputation: "4.8/5",
        doctorExperience: "15 Years",
        details: "Aortic Valve Replacement, Recovery in 4 weeks."
    },
    {
        name: "AIIMS (All India Institute of Medical Sciences)",
        location: "Delhi",
        surgeryType: "Heart Surgery",
        cost: "₹2,50,000",
        doctor: "Dr. V. Kumar",
        doctorReputation: "5/5",
        doctorExperience: "25 Years",
        details: "CABG (Coronary Artery Bypass Grafting), Full Recovery in 5 weeks."
    },
    {
        name: "Rajeev Gandhi Super Specialty Hospital",
        location: "Delhi",
        surgeryType: "Orthopedic Surgery",
        cost: "₹1,50,000",
        doctor: "Dr. R. Bhatnagar",
        doctorReputation: "4.7/5",
        doctorExperience: "18 Years",
        details: "Total Hip Replacement Surgery, Recovery in 6 weeks."
    },
    {
        name: "Medanta - The Medicity",
        location: "Gurugram",
        surgeryType: "Kidney Transplant",
        cost: "₹12,00,000",
        doctor: "Dr. M. Jain",
        doctorReputation: "4.9/5",
        doctorExperience: "30 Years",
        details: "Living Donor Kidney Transplant, Recovery in 4 weeks."
    },
    {
        name: "Max Super Specialty Hospital",
        location: "Saket, Delhi",
        surgeryType: "Cancer Surgery",
        cost: "₹4,00,000",
        doctor: "Dr. K. Nair",
        doctorReputation: "4.6/5",
        doctorExperience: "20 Years",
        details: "Lung Cancer Surgery, Post Surgery Care 6 weeks."
    },
    {
        name: "BLK Super Specialty Hospital",
        location: "Pusa Road, Delhi",
        surgeryType: "Spine Surgery",
        cost: "₹2,50,000",
        doctor: "Dr. R. Kapoor",
        doctorReputation: "4.8/5",
        doctorExperience: "22 Years",
        details: "Spinal Fusion Surgery, Full Recovery in 3 months."
    },
    {
        name: "Apollo Spectra Hospital",
        location: "Delhi",
        surgeryType: "Orthopedic Surgery",
        cost: "₹1,80,000",
        doctor: "Dr. S. Patel",
        doctorReputation: "4.7/5",
        doctorExperience: "16 Years",
        details: "Knee Replacement Surgery, Recovery in 4 weeks."
    },
    {
        name: "Lilavati Hospital",
        location: "Mumbai",
        surgeryType: "Eye Surgery",
        cost: "₹80,000",
        doctor: "Dr. R. Luthra",
        doctorReputation: "4.9/5",
        doctorExperience: "25 Years",
        details: "Cataract Surgery, Recovery in 1 week."
    },
    {
        name: "Kokilaben Dhirubhai Ambani Hospital",
        location: "Mumbai",
        surgeryType: "Bariatric Surgery",
        cost: "₹3,00,000",
        doctor: "Dr. P. Shah",
        doctorReputation: "4.7/5",
        doctorExperience: "18 Years",
        details: "Weight Loss Surgery, Recovery in 2 weeks."
    }
];

// Function to search and filter the hospitals based on surgery type
function searchSurgery() {
    const surgeryType = document.getElementById("surgery-type").value.toLowerCase();
    const filteredHospitals = hospitalsData.filter(hospital => hospital.surgeryType.toLowerCase().includes(surgeryType));

    // Clear the existing hospital list
    const hospitalListContainer = document.getElementById("hospital-list");
    hospitalListContainer.innerHTML = '';

    // If no hospitals found, show a message
    if (filteredHospitals.length === 0) {
        hospitalListContainer.innerHTML = '<p>No hospitals found for the searched surgery type.</p>';
    } else {
        // Display filtered hospitals
        filteredHospitals.forEach(hospital => {
            const hospitalDiv = document.createElement("div");
            hospitalDiv.classList.add("hospital");

            hospitalDiv.innerHTML = `
                <h3>${hospital.name}</h3>
                <p><strong>Location:</strong> ${hospital.location}</p>
                <p><strong>Surgery Type:</strong> ${hospital.surgeryType}</p>
                <p><strong>Cost:</strong> ${hospital.cost}</p>
                <p><strong>Doctor:</strong> ${hospital.doctor}</p>
                <p><strong>Doctor Reputation:</strong> ${hospital.doctorReputation}</p>
                <p><strong>Doctor Experience:</strong> ${hospital.doctorExperience}</p>
                <p><strong>Details:</strong> ${hospital.details}</p>
            `;

            hospitalListContainer.appendChild(hospitalDiv);
        });
    }
}