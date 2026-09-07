document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#myButton');
    const form = document.querySelector('#myForm');
    const input = document.querySelector('#myInput');
    
    // Click event
    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });
    
    // Submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted!');
    });
    
    // Keydown event
    input.addEventListener('keydown', function() {
        console.log('Key pressed!');
    });
    
    // Mouseover event
    button.addEventListener('mouseover', function() {
        console.log('Mouse over button!');
    });
});