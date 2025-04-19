document.addEventListener('DOMContentLoaded', () => {
    // Aba de Detalhes do Projeto
    const projetos = document.querySelectorAll('.projetos-projeto');
    const abaDetalhes = document.getElementById('aba-detalhes-projeto');
    const abaTitulo = document.getElementById('aba-titulo');
    const abaDescricao = document.getElementById('aba-descricao');
    const abaCarrossel = document.getElementById('aba-carrossel');
    const abaProjetoLink = document.getElementById('aba-projeto-link');
    const abaRepositorioLink = document.getElementById('aba-repositorio-link');
    const fecharAba = document.querySelector('.aba-detalhes-fechar');

    const detalhesProjetos = {
        flashcards: {
            titulo: 'FlashCards App',
            descricao: 'Este projeto consiste em uma aplicação web para a criação e estudo de flashcards. A principal funcionalidade é a integração com a IA do Gemini para gerar automaticamente as respostas dos flashcards a partir dos tópicos e do nível de detalhe fornecidos pelo usuário. O frontend é construído com HTML, CSS e JavaScript, enquanto o backend utiliza Node.js com o framework Express para a gestão das rotas e da lógica da aplicação. O armazenamento dos dados (usuários e flashcards) é realizado através do MongoDB, utilizando o Mongoose para a modelagem e interação com o banco de dados.',
            imagens: ['icons/flashapp1.png', 'icons/flashapp2.png', 'icons/flashapp3.png', 'icons/flashapp4.png'],
            projetoLink: 'https://apiflashcards.vercel.app/',
            repositorioLink: 'https://github.com/Wendel-Costa/FlashcardsApp'
        },
        studyapp: {
            titulo: 'StudyApp',
            descricao: 'Um site de estudos com funcionalidades de temporizador para sessões focadas, sistema de gerenciamento de tarefas e organização por temas de estudo. Desenvolvido com HTML, CSS e JavaScript, a aplicação permite aos usuários planejar suas sessões de estudo, marcar tarefas como concluídas e acompanhar o tempo dedicado a cada tema. O projeto é totalmente responsivo e utiliza o localStorage para persistência de dados.',
            imagens: ['icons/studyapp1.png', 'icons/studyapp2.png', 'icons/studyapp3.png'],
            projetoLink: 'https://studyapp-two.vercel.app/',
            repositorioLink: 'https://github.com/Wendel-Costa/StudyApp'
        },
        landing: {
            titulo: 'Landing Page',
            descricao: 'Uma landing page feita durante um hackaton e que tem o objetivo de resolver o problema de comunicação que as estações tech do maranhão tinha para divulgar seus projetos para novas pessoas. Construída com HTML, CSS e JavaScript. O design é responsivo e otimizado.',
            imagens: ['icons/ProjetoEstacaoTech.png', 'icons/Estacaotech2.png', 'icons/Estacaotech3.png'],
            projetoLink: 'https://conexao-estacao-tech.vercel.app/',
            repositorioLink: 'https://github.com/Wendel-Costa/Conexao-Estacao-Tech'
        },
        todo: {
            titulo: 'Notas ToDo',
            descricao: 'Um aplicativo de tarefas e notas, permitindo aos usuários gerenciar suas atividades diárias. Desenvolvido com javascript.',
            imagens: ['icons/ProjetoNotasToDo.png', 'icons/ProjetoNotasToDo.png', 'icons/ProjetoNotasToDo.png'],
            projetoLink: 'https://notas-to-do.vercel.app/',
            repositorioLink: 'https://github.com/Wendel-Costa/NotasToDo'
        }
    };

    projetos.forEach(projeto => {
        projeto.addEventListener('click', (e) => {
            if (e.target.closest('.projetos-projeto-detalhes-navegacao')) return;
            const projetoId = projeto.getAttribute('data-projeto');
            const detalhes = detalhesProjetos[projetoId];

            abaTitulo.textContent = detalhes.titulo;
            abaDescricao.textContent = detalhes.descricao;
            abaCarrossel.innerHTML = detalhes.imagens.map((src, index) => `
                <img src="${src}" alt="${detalhes.titulo} ${index + 1}" class="carrossel-imagem" style="display: ${index === 0 ? 'block' : 'none'};">
            `).join('');
            abaProjetoLink.href = detalhes.projetoLink;
            abaRepositorioLink.href = detalhes.repositorioLink;

            abaDetalhes.style.display = 'block';
            inicializarCarrossel(abaCarrossel);
        });
    });

    fecharAba.addEventListener('click', () => {
        abaDetalhes.style.display = 'none';
    });

    // Funcionalidade do Carrossel
    function inicializarCarrossel(carrossel) {
        const imagens = carrossel.querySelectorAll('.carrossel-imagem');
        const botaoAnterior = carrossel.parentElement.querySelector('.carrossel-anterior');
        const botaoProximo = carrossel.parentElement.querySelector('.carrossel-proximo');
        let indiceAtual = 0;

        const mostrarImagem = (indice) => {
            imagens.forEach((img, i) => {
                img.style.display = i === indice ? 'block' : 'none';
            });
        };

        botaoAnterior.addEventListener('click', () => {
            indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
            mostrarImagem(indiceAtual);
        });

        botaoProximo.addEventListener('click', () => {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            mostrarImagem(indiceAtual);
        });

        mostrarImagem(indiceAtual);
    }
});