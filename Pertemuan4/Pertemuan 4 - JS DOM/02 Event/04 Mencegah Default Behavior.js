document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#myForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah refresh halaman
        console.log('Form submitted without refresh!');
        // Lakukan operasi lain seperti validasi atau AJAX
    });
    
    const link = document.querySelector('#myLink');
    
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah navigasi ke href
        console.log('Link clicked but navigation prevented!');
    });
});