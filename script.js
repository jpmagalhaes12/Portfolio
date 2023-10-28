document.addEventListener("DOMContentLoaded", function () {
    const botao_sobre = document.getElementById("sobre");
    const botao_projeto = document.getElementById("projetos");
    const botao_contato = document.getElementById("contato");
    const conteudo = document.getElementById("conteudo");
    let estaElemento = false;
    let listaBloqueioEfeito = '.close, .nome, .topicos, .web,.projetos,.web,.crud,.cronometro,.calc,.sist,.mais,.contato,.linkedin,.github,.insta,.modal,.curriculo';

    const modal1 = document.getElementById("myModal1");
    const modal2 = document.getElementById("myModal2");
    const modal3 = document.getElementById("myModal3");
    const modal4 = document.getElementById("myModal4");
    const modal5 = document.getElementById("myModal5");
    const modalAviso = document.getElementById("modal-aviso");

    const nome = document.querySelector('.nome');
    const i_sobre = document.getElementById('i-sobre');
    const i_projetos = document.getElementById('i-projetos');
    const i_contato = document.getElementById('i-contato');

    function createRipple(event) {
        disableRippleOnSpecificElements();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = '15px'; // Tamanho da ondulação
        ripple.style.left = event.clientX - 30 + 'px';
        ripple.style.top = event.clientY - 30 + 'px';
        if(estaElemento == false){
            ripple.remove()
            document.body.appendChild(ripple);
        } else{
            ripple.remove();
        }
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
    
    function disableRippleOnSpecificElements() {
        let elementsToDisable = document.querySelectorAll(listaBloqueioEfeito);
        elementsToDisable.forEach(element => {
            element.addEventListener('mouseenter', () => {
                estaElemento = true;
            });
    
            element.addEventListener('mouseleave', () => {
                estaElemento = false;
            });
        });
    }
    
    document.body.addEventListener('mousemove', createRipple);

    nome.addEventListener('click',function(){
        conteudo.innerHTML = '';
        i_contato.style.color = 'white';
        i_sobre.style.color = 'white';
        i_projetos.style.color = 'white';
    })

    botao_sobre.addEventListener("click", function () {
        i_contato.style.color = 'white';
        i_sobre.style.color = '#1414b8';
        i_projetos.style.color = 'white';
        conteudo.innerHTML = "<p class='texto_sobre'>Sou um desenvolvedor backend nascido no Brasil. Atualmente curso Ciência da computação no Centro Universitário Cesuca, localizado no Rio Grande do Sul. Estou comprometido com o aprendizado contínuo e a construção de soluções tecnológicas inovadoras, eu constantemente busco desafios que me permitam crescer profissionalmente e contribuir para o mundo da tecnologia. Me sinto ansioso para construir projetos significativos e expandir meu conhecimento na área de desenvolvimento de software. Se desejar, entre em contato para discutir sobre algum projeto ou colaboração.</p>";
    });
    botao_projeto.addEventListener("click", function () {
        i_contato.style.color = 'white';
        i_sobre.style.color = 'white';
        i_projetos.style.color = '#1414b8';
        conteudo.innerHTML = "<ul class='projetos'><li class='web'><i class='fa-solid fa-circle-plus'></i>Site Barbearia</li><li class='crud'><i class='fa-solid fa-circle-plus'></i>CRUD</li><li class='cronometro'><i class='fa-solid fa-circle-plus'></i>Cronômetro</li><li class='calc'><i class='fa-solid fa-circle-plus'></i>Calculadora</li><li class='sist'><i class='fa-solid fa-circle-plus'></i>Sistema de login</li><li class='mais'><i class='fa-solid fa-circle-plus'></i>...</li></ul>";
    });
    botao_contato.addEventListener("click", function () {
        i_contato.style.color = '#1414b8';
        i_sobre.style.color = 'white';
        i_projetos.style.color = 'white';
        conteudo.innerHTML = "<span class='link'><a class='linkedin' href='http://www.linkedin.com/in/jpmagalhaes12'><i class='fa-brands fa-linkedin fa-2x'></i>Linkedin</a></span><span class='git'><a class='github' href='https://github.com/jpmagalhaes12'><i class='fa-brands fa-github fa-2x'></i>Github</a></span><span class='instagram'><a class='insta' href='https://www.instagram.com/joaoo.sm/'><i class='fa-brands fa-instagram fa-2x'></i>Instagram</a></span>";
       
    });

    document.addEventListener("click", function(event) {
        var elementoClicado = event.target;
    
        if (elementoClicado.className === "web") {
            modal1.style.display = "block";
        } else if (elementoClicado.className === "crud"){
            modal2.style.display = "block";
        } else if (elementoClicado.className === "cronometro"){
            modal3.style.display = "block";
        } else if (elementoClicado.className === "calc"){
            modal4.style.display = "block";
        } else if (elementoClicado.className === "sist"){
            modal5.style.display = "block";
        } else if (elementoClicado.className === 'close'){
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
            modal4.style.display = "none";
            modal5.style.display = "none";
            modalAviso.style.display = "none";
        } 
        
    })
});

    

