// Define car makes and models
const carData = {
    Toyota: ["Camry", "Corolla", "Land Cruiser", "RAV4", "Highlander"],
    Nissan: ["Altima", "Sentra", "Maxima", "Rogue", "Pathfinder"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "Fit"],
    // Add more makes and models as needed
};

// Function to populate the model dropdown based on the selected make
function filterModels() {
    // Get selected make
    const makeSelect = document.getElementById("make");
    const selectedMake = makeSelect.value;

    // Get model dropdown
    const modelSelect = document.getElementById("model");

    // Clear existing model options
    modelSelect.innerHTML = "<option value=''>Select Model</option>";

    // Populate models for the selected make
    if (carData[selectedMake]) {
        carData[selectedMake].forEach((model) => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
}

// Call showSlides() every 3 seconds
setInterval(showSlides, 3000);
showSlides();

document.getElementById('make').addEventListener('change', function () {
    const make = this.value;
    const modelDropdown = document.getElementById('model');
    const models = {
      Toyota: ['Corolla', 'Camry', 'RAV4', 'Hilux'],
      Honda: ['Civic', 'Accord', 'CR-V', 'Pilot'],
      Benz: ['C-Class', 'E-Class', 'GLA', 'GLE'],
      Audi: ['A3', 'A4', 'Q5', 'Q7'],
    };
  
    // Clear existing options
    modelDropdown.innerHTML = '<option value="">Select Model</option>';
  
    // Add new options
    if (models[make]) {
      models[make].forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelDropdown.appendChild(option);
      });
    }
  });
  