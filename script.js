const meusLinks = [
    {
        titulo: "LinkedIn",
        url: "https://www.linkedin.com/in/leonardo-pires-ferreira-a34a12384",
        description: "Meu perfil profissional",
        icon: "fa-brands fa-linkedin"
    },
    {
        titulo: "Github",
        url: "https://github.com/Leonardo-PiresF",
        description: "Meus projetos e códigos",
        icon: "fa-brands fa-github"
    },
    {
        titulo: "Instagram",
        url: "https://www.instagram.com/leo_piresf?igsh=YWc3ZTNtc3N0OWd5",
        description: "Meu perfil pessoal",
        icon: "fa-brands fa-instagram"
    },

    {
        titulo: "Email",
        url: "mailto:leonardopires.dev@gmail.com",
        description: "leonardopires.dev@gmail.com",
        icon: "fa-solid fa-envelope"
    }
];

function exibirLinks() {
    const container = document.getElementById('links-container');

    meusLinks.forEach(link => {

        const elementoLink = document.createElement('a');
        elementoLink.href = link.url;
        elementoLink.target = "_blank";
        elementoLink.rel = "noopener";


        const elementoIcone = document.createElement('i');
        elementoIcone.className = `link-icon ${link.icon}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'link-content';

        const tituloDiv = document.createElement('div');
        tituloDiv.className = 'link-title';
        tituloDiv.textContent = link.titulo;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'link-description';
        descriptionDiv.textContent = link.description;

        contentDiv.appendChild(tituloDiv);
        contentDiv.appendChild(descriptionDiv);

        elementoLink.appendChild(elementoIcone);
        elementoLink.appendChild(contentDiv);

        container.appendChild(elementoLink);
    });
}
exibirLinks();

function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        container.appendChild(particle);
    }
}

createParticles();