// Header scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
});

// Calculator functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('timeSlider');
    const inputValue = document.getElementById('inputValue');
    const resultValue = document.getElementById('resultValue');
    const sliderValue = document.getElementById('sliderValue');
    
    if (!slider || !inputValue || !resultValue || !sliderValue) return;
    
    function updateCalculation() {
        const minutes = parseInt(slider.value);
        const savedMinutes = minutes * 20;
        const percentage = ((minutes - slider.min) / (slider.max - slider.min)) * 100;
        
        inputValue.textContent = minutes;
        resultValue.textContent = savedMinutes;
        sliderValue.textContent = minutes;
        
        // Dynamic font size based on slider value
        function adjustFontSize(element, number, baseFontSize) {
            let fontSize = baseFontSize;
            
            if (number < 50) {
                fontSize = baseFontSize; // 128px for values under 50
            } else if (number >= 50 && number < 75) {
                fontSize = baseFontSize * 0.85; // ~109px for 50-74
            } else if (number >= 75 && number < 90) {
                fontSize = baseFontSize * 0.85; // ~96px for 75-89
            } else {
                fontSize = baseFontSize * 0.75; // ~83px for 90-100
            }
            
            element.style.setProperty('font-size', fontSize + 'px', 'important');
        }
        
        // Debug: check if elements are found
        console.log('inputValue element:', inputValue);
        console.log('minutes:', minutes, 'length:', minutes.toString().length);
        
        // Adjust font sizes
        adjustFontSize(inputValue, minutes, 128);
        adjustFontSize(resultValue, minutes, 128); // Use minutes (inputValue) for resultValue scaling too
        adjustFontSize(sliderValue, minutes, 14);
        
        // Calculate exact position for the slider value (number above thumb)
        const sliderRect = slider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const thumbWidth = 16; // Width of the thumb from CSS
        
        // Calculate position accounting for thumb width
        // At 0% - thumb center is at thumbWidth/2
        // At 100% - thumb center is at sliderWidth - thumbWidth/2
        const availableWidth = sliderWidth - thumbWidth;
        const thumbPosition = (thumbWidth / 2) + (percentage / 100) * availableWidth;
        
        // Position the number exactly above the thumb center
        sliderValue.style.left = thumbPosition + 'px';
        
        // Update CSS custom property for ::before width
        document.documentElement.style.setProperty('--slider-progress', percentage + '%');
    }
    
    // Update on slider change
    slider.addEventListener('input', updateCalculation);
    
    // Update on window resize to recalculate positions
    window.addEventListener('resize', updateCalculation);
    
    // Initialize calculation
    updateCalculation();
});
