const headerLinks = document.querySelectorAll(".header-list a");
headerLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname.split('/').pop();
  const locationPath = window.location.pathname.split('/').pop();
  
  if ((locationPath === "" || locationPath === "index.html") && linkPath === "index.html") {
    link.classList.add("active");
  } else if (linkPath === locationPath && linkPath !== "index.html") {
    link.classList.add("active");
  }
});


const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');

if (menuToggle && slideMenu) {
    menuToggle.addEventListener('click', () => {
        slideMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.fade-link[data-link]");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (link.target !== "_blank" && !link.hasAttribute('download') && href && !href.startsWith('#')) {
                e.preventDefault(); 
                document.body.classList.add("page-fade-out");
                setTimeout(() => {
                    window.location.href = href;
                }, 600); 
            }
        });
    });
});


const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

if (contactForm && submitBtn && statusMessage) {
    
  
    const emailjsPublicKey = "YAF5HMO7VeLLT_NlX";    
    const emailjsServiceID = "service_h9lnkxt";    
    const emailjsTemplateID = "template_bxpl6yb";   
   
    emailjs.init(emailjsPublicKey); 

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const templateParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        if (!templateParams.name || !templateParams.email || !templateParams.subject || !templateParams.message) {
            statusMessage.innerText = "Por favor, completa todos los campos.";
            statusMessage.style.color = "red";
            statusMessage.style.display = "block";
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = "Enviando...";
        statusMessage.style.display = "none";

        emailjs.send(emailjsServiceID, emailjsTemplateID, templateParams)
            .then(function(response) {
                console.log('ÉXITO!', response.status, response.text);
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = "Enviar mensaje";
                statusMessage.innerText = "¡Mensaje enviado con éxito! Gracias por contactarme.";
                statusMessage.style.color = "green";
                statusMessage.style.display = "block";

            }, function(error) {
                console.log('FALLÓ...', error);
                submitBtn.disabled = false;
                submitBtn.innerText = "Enviar mensaje";
                statusMessage.innerText = "Error al enviar el mensaje. Inténtalo de nuevo.";
                statusMessage.style.color = "red";
                statusMessage.style.display = "block";
            });
    });
}


const elementsToAnimate = document.querySelectorAll('.fade-in-element');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});

elementsToAnimate.forEach(el => {
    observer.observe(el);
});