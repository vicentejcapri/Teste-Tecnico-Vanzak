# 🏆 Desafio Front-End - Atlética Los Bravos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Bem-vindo ao repositório do meu teste técnico para a vaga de estágio em desenvolvimento front-end. Este projeto consiste em um carrossel interativo de produtos vitais (Vitamina D, Ferro e Ômega 3), construído com foco em **fidelidade visual (Pixel Perfect)**, **manipulação dinâmica de DOM** e **estruturas de layout responsivas e estáveis**.

🔗 **[Visualizar Projeto Online (Live Preview)](https://vicentejcapri.github.io/Teste-Vanzak/)**

---

## 🎯 O Desafio

O objetivo deste projeto foi transformar um design do Figma em uma interface web totalmente funcional e dinâmica, utilizando apenas tecnologias nativas (Vanilla) para demonstrar domínio absoluto dos fundamentos do Front-end, sem depender de frameworks externos.

### ✨ Principais Funcionalidades Implementadas

* **Renderização Dinâmica (Vanilla JS):** Toda a troca de conteúdo (títulos, temas de cores, imagens, SVGs e benefícios) é gerenciada por um único objeto de dados no JavaScript, garantindo um código limpo (DRY) e escalável.
* **Blindagem de Layout com CSS Grid:** Utilização de `grid-template-columns: minmax(0, 1fr)` para travar a estrutura do carrossel, impedindo que textos de tamanhos diferentes (ex: "VITAMINA D" vs "FERRO") causem "pulos" indesejados no layout.
* **Manipulação Avançada de SVGs:** Correção de conflitos de opacidade, máscaras e cores de preenchimento (`fill` e `stroke`) diretamente no código SVG in-line, permitindo que os ícones mudem de cor dinamicamente com base no card ativo.
* **Animações Lottie:** Integração de animações `.json` (Lottie) centralizadas perfeitamente sobre os elementos do layout usando posicionamento absoluto matemático.
* **Efeitos Visuais CSS:** Simulação de bordas externas nítidas em tipografia gigante usando múltiplas camadas de `text-shadow`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Semântica e estruturação lógica de componentes.
* **CSS3:** Variáveis nativas para temas dinâmicos, Flexbox, CSS Grid avançado, animações e transições suaves.
* **JavaScript (ES6+):** Lógica de renderização, injeção de HTML e manipulação de atributos em tempo real.
* **LottieFiles:** Animações vetorizadas leves em JSON.

---

## 🚀 Como executar o projeto localmente

1. Faça o clone deste repositório:
   \`\`\`bash
   git clone https://github.com/vicentejcapri/Teste-Vanzak.git
   \`\`\`
2. Navegue até a pasta do projeto:
   \`\`\`bash
   cd [Teste-Vanzak]
   \`\`\`
3. Abra o arquivo \`index.html\` no seu navegador, ou utilize a extensão **Live Server** do VS Code para uma melhor experiência.

---

## 👨‍💻 Autor

Desenvolvido com ☕ e dedicação por Vicente Capri.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vicentejcapri/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vicentejcapri)