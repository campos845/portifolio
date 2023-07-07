// Obtém a referência do elemento 'portfolio'
const projects = document.getElementById('projects');

// Array de projetos
const projetos = [
  {
    titulo: 'Formulário.js',
    descricao: 'Projeto desenvolvido em sala de alula.',
    tecnologias: 'Tecnologias utilizadas: HTML, CSS, JavaScript.',
    githubLink: 'https://github.com/campos845/formulario-js',
    imagem: 'formulario.avif'
  },
  {
    titulo: 'Calculadora.js',
    descricao: 'Projeto feito para aprimorar o conhecimento em JavaScript.',
    tecnologias: 'Tecnologias utilizadas: HTML, JavaScript.',
    githubLink: 'https://github.com/campos845/calculadora-js',
    imagem: 'calculadora.jpg'
  },
  {
    titulo: 'controle-de-acesso.js',
    descricao: 'Projeto de controle de acesso criado para buscar a otimização do acesso de funcionários, visitantes e prestadores de serviço no ambiente de trabalho.',
    tecnologias: 'Tecnologias utilizadas: HTML, CSS, JavaScript.',
    githubLink: 'https://github.com/campos845/controle-de-acesso',
    imagem: 'acesso.jpeg'
  }
];

// Função para criar os elementos HTML dos projetos
function criarProjetos() {
  projetos.forEach(projeto => {
    const div = document.createElement('div');
    div.className = 'project';

    const h2 = document.createElement('h3');
    h2.textContent = projeto.titulo;

    const p1 = document.createElement('p');
    p1.textContent = projeto.descricao;

    const p2 = document.createElement('p');
    p2.textContent = projeto.tecnologias;
    const icon = document.createElement('i');
    icon.className = 'fab fa-github';

    const link = document.createElement('a');
    link.textContent = 'Ver no ';
    link.href = projeto.githubLink;
    link.className = "project-link"
    link.target = '_blank';
    link.appendChild(icon);

    const img = document.createElement('img');
    img.src = projeto.imagem;
    img.alt = projeto.titulo;

   


    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(link);

    projects.appendChild(div);
  });
}

// Chama a função para criar os projetos
criarProjetos();
