document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#myButton');
    
    button.addEventListener('click', function(event) {
        console.log('Button clicked!');
        console.log('Event type:', event.type);
        console.log('Target element:', event.target);
        console.log('Client coordinates:', event.clientX, event.clientY);
    });
});