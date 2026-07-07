let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  // Update the current index based on button clicked
  currentIndex += direction;

  // Loop back to start/end if boundaries are hit
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Shift the slider by multiplying index by -25% (since each of the 4 slides takes 25% of the 400% width)
  const offset = currentIndex * -25;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 4000);

$("#mybtn").click(function () {
    // This smoothly slides the nav down if hidden, and slides it up if visible
    $("#mynav").slideToggle("slow"); 
});


// Listen for when the user clicks the search button
document.getElementById('searchBtn').addEventListener('click', navigateToPage);

// Also listen for the "Enter" key inside the input box
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        navigateToPage();
    }
});

function navigateToPage() {
    // 1. Get what the user typed and make it lowercase
    let query = document.getElementById('searchInput').value.toLowerCase().trim();

    // 2. Decide where to send them based on keywords
    if (query.includes('ring')) {
        window.location.href = "earrings.html";
    } 
    else if (query.includes('bracelet') || query.includes('chain')) {
        window.location.href = "bracelets.html";
    } 
    else if (query.includes('earring')) {
        window.location.href = "earrings.html";
    } 
    else if (query.includes('gold') || query.includes('all')) {
        window.location.href = "all-products.html";
    } 
    else {
        // If they type something you don't have, alert them or send them to a 404/home page
        alert("Sorry, we couldn't find any results for '" + query + "'. Try searching for 'rings' or 'necklaces'.");
    }
}

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  
  // Save the preference: 'true' if dark mode is on, 'false' if off
  localStorage.setItem('darkModeEnabled', isDarkMode);

  
}



// 1. Grab the scrollable container and all the dots
const track = document.getElementById('base2categoriesdiv');
const dots = document.querySelectorAll('.dot');

// 2. Listen for the scroll event on the container
track.addEventListener('scroll', () => {
    // Get the width of one single slide
    const slideWidth = track.clientWidth;
    
    // Calculate which slide is currently on screen based on scroll position
    const currentSlide = Math.round(track.scrollLeft / slideWidth);

    // 3. Loop through all dots and highlight only the active one
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active'); // Turn it dark
        } else {
            dot.classList.remove('active'); // Turn it light grey
        }
    });
});