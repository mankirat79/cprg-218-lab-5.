

const sanityCheck = () => {
    console.log('!Sanity check: all good!');
};

const fetchSalonServices = () => {
    fetch('https://api.example.com/salon-services')
        .then(response => response.json())
        .then(data => {
            console.log('Salon services:', data);
        })
        .catch(error => {
            console.error('Error fetching salon services:', error);
        });
};

document.addEventListener('DOMContentLoaded', () => {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const accordionItem = btn.parentElement;
            const panel = accordionItem.querySelector('.panel');
            accordionItem.classList.toggle('active');
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        });
    });
});
