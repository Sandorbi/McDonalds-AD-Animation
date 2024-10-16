const delayIncrement = 12; 
let iteration = 0;

// Select all elements that have animations
const animatedElements = document.querySelectorAll(
    '.wrapper, .chicken_menu_icon, .pricetag, .footer, .end_text, .price, .paprika_text, ' +
    '.double_cheese_menu, .double_cheese_text, .fish_burger_menu, .fish_burger_text, ' +
    '.end_big_bang, .button, .stripes_container, .red_stripe, .blue_stripe, ' +
    '.yellow_stripe, .green_stripe'
);

// Function to apply increasing delay to animations
function updateAnimationDelays() {
    animatedElements.forEach((element) => {
        const initialDelay = parseFloat(getComputedStyle(element).animationDelay) || 0;
        const newDelay = initialDelay + (iteration * delayIncrement);
        element.style.animationDelay = `${newDelay}s`; 
    });
    iteration++;
}

// Function to restart the animations
function restartAnimations() {
    animatedElements.forEach((element) => {
        element.style.animation = 'none';
        void element.offsetHeight; 
        element.style.animation = '';
    });
}

// Infinite loop to run the animation
function infiniteAnimationLoop() {
    updateAnimationDelays();
    restartAnimations();
    setTimeout(infiniteAnimationLoop, (delayIncrement * 1000) + 200);
}

setTimeout(infiniteAnimationLoop, 200); // Start loop after 200ms delay
