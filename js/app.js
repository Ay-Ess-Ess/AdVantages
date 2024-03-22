let textPosition=1;
function text() {
    for(let i=textPosition; i < textPosition + 39; i++) {
        document.getElementById(`word${i}`).classList.add('show-text');
        document.getElementById(`word${i}`).classList.add('show-text');
    }
    textElement+=38;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry);
            if(entry.target.classList.contains("at-advantages-digital-front")) {
                entry.target.classList.add('show');
                text();
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddentElements = document.querySelectorAll('.hidden');
hiddentElements.forEach((el) => observer.observe(el));

document.querySelector(".pop-up-input").addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        popUp();
    }
});