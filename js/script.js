document.addEventListener("DOMContentLoaded", () => {
  /* ── Dark Mode ── */
  const html = document.documentElement;
  const btnDark = document.getElementById("btnDarkMode");
  const ikon = btnDark.querySelector("i");

  function aplicarTema(modo) {
    html.setAttribute("data-bs-theme", modo);
    ikon.className = modo === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
    localStorage.setItem("tema", modo);
  }

  const salvo = localStorage.getItem("tema");
  if (salvo) {
    aplicarTema(salvo);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    aplicarTema("dark");
  }

  btnDark.addEventListener("click", () => {
    const atual = html.getAttribute("data-bs-theme");
    aplicarTema(atual === "dark" ? "light" : "dark");
  });

  /* ── Idioma (PT/EN) ── */
  const traducoes = {
    pt: {
      nav_inicio: "Início", nav_sobre: "Sobre Mim", nav_conhecimentos: "Conhecimentos",
      nav_projetos: "Projetos", nav_hobbies: "Hobbies", nav_contato: "Contato",
      hero_ola: "Olá, eu sou",
      hero_desc: "Editor de vídeo apaixonado por transformar ideias em histórias que prendem a atenção do primeiro ao último segundo.",
      hero_btn_projetos: "Ver Projetos", hero_btn_contato: "Fale Comigo",
      sobre_titulo: "Apresentação Pessoal", sobre_sub: "Quem é Big Sean além da linha do tempo?",
      sobre_cargo: "Editor de vídeo",
      sobre_desc1: "Editor com mais de dois anos de experiência criando vídeos tanto em formato longo quanto formato curto.",
      sobre_desc2: "Trabalho com cortes dinâmicos, color grading, motion graphics e sound design, sempre respeitando o prazo e o estilo de cada cliente.",
      stat_anos: "Anos de experiência", stat_projetos: "Projetos entregues",
      btn_cv: "Baixar CV",
      conh_titulo: "Conhecimentos e Competências", conh_sub: "Ferramentas que domino e habilidades que desenvolvi",
      conh_ferramentas: "Ferramentas", conh_competencias: "Competências",
      davinci_desc: "Edição, color grading, SFX e finalização profissional.", nivel: "Nível",
      comp_edicao: "Edição Criativa", comp_edicao_desc: "Cortes dinâmicos e ritmados que seguram a atenção.",
      comp_motion_desc: "Animações, legendas estilizadas e transições suaves.",
      comp_color_desc: "Tratamento de cor que valoriza cada cena.",
      comp_sound_desc: "Mixagem, trilha e efeitos sonoros imersivos.",
      comp_comunicacao: "Comunicação", comp_comunicacao_desc: "Escuta ativa e alinhamento constante com o cliente.",
      comp_prazos: "Gestão de Prazos", comp_prazos_desc: "Organização e entrega pontual, sempre.",
      proj_titulo: "Projetos Realizados", proj_sub: "Uma seleção dos trabalhos de que mais me orgulho",
      filtro_todos: "Todos", btn_assistir: "Assistir",
      proj1_titulo: "Programa Semanal - O Pior Time é o Seu",
      proj1_desc: "Programa semanal humorístico sobre os momentos mais inusitados das rodadas da NFL. Duração média de 30 minutos, responsável pela edição, thumbnails, roteiro e ocasionalmente apresentador.",
      proj2_titulo: "Reels - Cristian Felipe", proj2_desc: "Conteúdo voltado para o público fã de futebol americano para redes sociais. Vídeos de discussão, opinião e criando expectativa sobre jogadores e times para a temporada de 2026. Responsável pela edição e legendagem.",
      proj3_titulo: "Cortes de Lives - Ponto a Ponto", proj3_desc: "Cortes das lives semanais postados nas redes sociais. Responsável pela edição, decupagem e legendagem.",
      proj4_titulo: "Jogos - On The Clock", proj4_desc: "Vídeos com brincadeiras temáticas com relação com a NFL. Responsável pela produção, edição e legendagem.",
      proj5_titulo: "Gameplay Comentada", proj5_desc: "Série semanal de gameplays com edição acelerada, memes sincronizados e áudio limpo.",
      proj6_titulo: "Shorts — Canal de Receitas", proj6_desc: "Cortes saborosos com close-ups apetitosos, som ASMR e ritmo acelerado.",
      hobbies_titulo: "Hobbies", hobbies_sub: "O que me inspira fora da timeline",
      hobby_musica: "Música", hobby_musica_desc: "Seja jogando, na academia ou até mesmo editando a música está sempre ao meu lado.",
      hobby_futebol: "Futebol Americano",
      hobby_futebol_desc: "Minha vida gira em torno do futebol americano. Assisto todos os jogos que eu consigo, além de jogar e produzir conteúdo sobre NFL. Foi a minha porta de entrada para a edição de vídeo.",
      hobby_games_desc: "Após passar horas editando, nada melhor do que abrir o meu jogo favorito e passar horas jogando antes do próximo vídeo.",
      contato_titulo: "Contato", contato_sub: "Tem um vídeo em mente? Vamos conversar!",
      contato_formas: "Formas de contato", contato_prazo: "Respondo mensagens em até 24 horas, todos os dias.",
      form_nome: "Nome *", form_nome_ph: "Seu nome completo", form_nome_err: "Informe seu nome (mínimo de 3 caracteres).",
      form_email: "E-mail *", form_email_err: "Informe um e-mail válido.",
      form_tipo: "Tipo de projeto",
      form_tipo_op0: "Selecione uma opção (opcional)", form_tipo_op1: "Vídeo para YouTube",
      form_tipo_op2: "Reels / Shorts / TikTok", form_tipo_op3: "Vídeo Institucional", form_tipo_op4: "Outro",
      form_msg: "Mensagem *", form_msg_ph: "Me conte um pouco sobre o seu projeto...",
      form_msg_err: "Escreva uma mensagem com pelo menos 10 caracteres.",
      form_enviar: "Enviar Mensagem", form_sucesso: "Mensagem enviada com sucesso! Retornarei o contato em breve.",
      footer_title: "Editor de Vídeo", footer_direitos: "Todos os direitos reservados.",
      modal_titulo: "Player do Projeto", modal_fechar: "Fechar"
    },
    en: {
      nav_inicio: "Home", nav_sobre: "About Me", nav_conhecimentos: "Skills",
      nav_projetos: "Projects", nav_hobbies: "Hobbies", nav_contato: "Contact",
      hero_ola: "Hi, I'm",
      hero_desc: "Video editor passionate about turning ideas into stories that capture attention from the first to the last second.",
      hero_btn_projetos: "View Projects", hero_btn_contato: "Get in Touch",
      sobre_titulo: "About Me", sobre_sub: "Who is Big Sean beyond the timeline?",
      sobre_cargo: "Video Editor",
      sobre_desc1: "Editor with over two years of experience creating videos in both long and short formats.",
      sobre_desc2: "I work with dynamic cuts, color grading, motion graphics and sound design, always respecting each client's deadline and style.",
      stat_anos: "Years of experience", stat_projetos: "Projects delivered",
      btn_cv: "Download CV",
      conh_titulo: "Skills & Competencies", conh_sub: "Tools I've mastered and skills I've developed",
      conh_ferramentas: "Tools", conh_competencias: "Competencies",
      davinci_desc: "Editing, color grading, SFX and professional finishing.", nivel: "Level",
      comp_edicao: "Creative Editing", comp_edicao_desc: "Dynamic, rhythmic cuts that hold attention.",
      comp_motion_desc: "Animations, styled subtitles and smooth transitions.",
      comp_color_desc: "Color treatment that enhances every scene.",
      comp_sound_desc: "Mixing, soundtrack and immersive sound effects.",
      comp_comunicacao: "Communication", comp_comunicacao_desc: "Active listening and constant alignment with the client.",
      comp_prazos: "Deadline Management", comp_prazos_desc: "Organization and on-time delivery, always.",
      proj_titulo: "Completed Projects", proj_sub: "A selection of the work I'm most proud of",
      filtro_todos: "All", btn_assistir: "Watch",
      proj1_titulo: "Weekly Show - O Pior Time é o Seu",
      proj1_desc: "Weekly humor show about the most unexpected moments in the NFL season. Average duration of 30 minutes, responsible for editing, thumbnails, scripting and occasionally hosting.",
      proj2_titulo: "Reels - Cristian Felipe", proj2_desc: "Content aimed at American football fans for social media. Discussion and opinion videos, creating anticipation about players and teams for the 2026 season. Responsible for editing and subtitling.",
      proj3_titulo: "Live Clips - Ponto a Ponto", proj3_desc: "Clips from weekly livestreams posted on social media. Responsible for editing, logging and subtitling.",
      proj4_titulo: "Games - On The Clock", proj4_desc: "Videos with NFL-themed games and challenges. Responsible for production, editing and subtitling.",
      proj5_titulo: "Commentary Gameplay", proj5_desc: "Weekly gameplay series with accelerated editing, synced memes and clean audio.",
      proj6_titulo: "Shorts — Recipe Channel", proj6_desc: "Delicious cuts with appetizing close-ups, ASMR sound and fast pace.",
      hobbies_titulo: "Hobbies", hobbies_sub: "What inspires me outside the timeline",
      hobby_musica: "Music", hobby_musica_desc: "Whether playing, at the gym or even editing, music is always by my side.",
      hobby_futebol: "American Football",
      hobby_futebol_desc: "My life revolves around American football. I watch every game I can, besides playing and producing content about the NFL. It was my gateway into video editing.",
      hobby_games_desc: "After hours of editing, nothing beats opening my favorite game and playing for hours before the next video.",
      contato_titulo: "Contact", contato_sub: "Have a video in mind? Let's talk!",
      contato_formas: "Contact Info", contato_prazo: "I reply to messages within 24 hours, every day.",
      form_nome: "Name *", form_nome_ph: "Your full name", form_nome_err: "Please enter your name (minimum 3 characters).",
      form_email: "Email *", form_email_err: "Please enter a valid email.",
      form_tipo: "Project Type",
      form_tipo_op0: "Select an option (optional)", form_tipo_op1: "YouTube Video",
      form_tipo_op2: "Reels / Shorts / TikTok", form_tipo_op3: "Corporate Video", form_tipo_op4: "Other",
      form_msg: "Message *", form_msg_ph: "Tell me a little about your project...",
      form_msg_err: "Please write a message with at least 10 characters.",
      form_enviar: "Send Message", form_sucesso: "Message sent successfully! I'll get back to you soon.",
      footer_title: "Video Editor", footer_direitos: "All rights reserved.",
      modal_titulo: "Project Player", modal_fechar: "Close"
    }
  };

  const btnIdioma = document.getElementById("btnIdioma");

  const palavrasPT = ["Editor de Vídeo", "Motion Designer", "Colorista", "Sound Designer"];
  const palavrasEN = ["Video Editor", "Motion Designer", "Colorist", "Sound Designer"];
  let palavrasAtuais = palavrasPT;
  let indicePalavra = 0;
  let indiceCaractere = 0;
  let apagando = false;
  const elemento = document.getElementById("typed");

  function digitar() {
    const palavraAtual = palavrasAtuais[indicePalavra];
    if (!apagando) {
      indiceCaractere++;
      elemento.textContent = palavraAtual.slice(0, indiceCaractere);
      if (indiceCaractere === palavraAtual.length) {
        apagando = true;
        setTimeout(digitar, 1800);
        return;
      }
    } else {
      indiceCaractere--;
      elemento.textContent = palavraAtual.slice(0, indiceCaractere);
      if (indiceCaractere === 0) {
        apagando = false;
        indicePalavra = (indicePalavra + 1) % palavrasAtuais.length;
      }
    }
    setTimeout(digitar, apagando ? 55 : 110);
  }

  digitar();

  function aplicarIdioma(lang) {
    const dict = traducoes[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const chave = el.getAttribute("data-i18n");
      if (dict[chave]) el.textContent = dict[chave];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const chave = el.getAttribute("data-i18n-placeholder");
      if (dict[chave]) el.placeholder = dict[chave];
    });
    html.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    btnIdioma.innerHTML = lang === "pt" ? "\uD83C\uDDE7\uD83C\uDDF7" : "\uD83C\uDDFA\uD83C\uDDF8";
    localStorage.setItem("idioma", lang);
    palavrasAtuais = lang === "en" ? palavrasEN : palavrasPT;
    indicePalavra = 0;
    indiceCaractere = 0;
    apagando = false;
    elemento.textContent = "";
  }

  const idiomaSalvo = localStorage.getItem("idioma");
  if (idiomaSalvo) {
    aplicarIdioma(idiomaSalvo);
  }

  btnIdioma.addEventListener("click", () => {
    const atual = html.getAttribute("lang");
    aplicarIdioma(atual === "en" ? "pt" : "en");
  });

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        const alvo = entrada.target;

        if (alvo.classList.contains("reveal")) {
          alvo.classList.add("visivel");
        }

        if (alvo.id === "stats") {
          animarContadores(alvo);
        }

        if (alvo.classList.contains("reveal") && alvo.querySelector(".progresso")) {
          alvo.querySelectorAll(".progresso").forEach((barra) => {
            barra.style.width = barra.dataset.largura;
          });
        }

        observador.unobserve(alvo);
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal, #stats, #conhecimentos .reveal").forEach((el) => observador.observe(el));

  function animarContadores(container) {
    container.querySelectorAll("[data-contador]").forEach((el) => {
      const destino = parseInt(el.dataset.contador, 10);
      const duracao = 1600;
      const inicio = performance.now();

      function passo(agora) {
        const progresso = Math.min((agora - inicio) / duracao, 1);
        el.textContent = Math.floor(progresso * destino).toLocaleString("pt-BR");
        if (progresso < 1) requestAnimationFrame(passo);
      }

      requestAnimationFrame(passo);
    });
  }

  const botoesFiltro = document.querySelectorAll("#filtros .btn-filter");
  const projetos = document.querySelectorAll("#lista-projetos .projeto");

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesFiltro.forEach((b) => b.classList.remove("active"));
      botao.classList.add("active");

      const filtro = botao.dataset.filtro;

      projetos.forEach((projeto) => {
        const corresponde = filtro === "todos" || projeto.dataset.categoria === filtro;
        projeto.classList.toggle("oculto", !corresponde);
      });
    });
  });

  const form = document.getElementById("formContato");
  const alerta = document.getElementById("alertaSucesso");
  const btnEnviar = document.getElementById("btnEnviar");

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    evento.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    btnEnviar.disabled = true;
    const enviando = html.getAttribute("lang") === "en" ? "Sending..." : "Enviando...";
    btnEnviar.innerHTML =
      `<span class="spinner-border spinner-border-sm me-2"></span>${enviando}`;

    const dados = new FormData(form);

    fetch(form.action, { method: "POST", body: dados, headers: { Accept: "application/json" } })
      .then((resposta) => {
        if (resposta.ok) {
          alerta.classList.remove("d-none");
          form.reset();
          form.classList.remove("was-validated");
          alerta.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => alerta.classList.add("d-none"), 6000);
        } else {
          throw new Error("Falha no envio");
        }
      })
      .catch(() => {
        const mensagemErro =
          html.getAttribute("lang") === "en"
            ? "There was a problem sending your message. Please try again."
            : "Houve um problema ao enviar sua mensagem. Tente novamente.";
        alert(mensagemErro);
      })
      .finally(() => {
        btnEnviar.disabled = false;
        const langAtual = html.getAttribute("lang") === "en" ? "en" : "pt";
        btnEnviar.innerHTML = `<i class="bi bi-send me-2"></i>${traducoes[langAtual].form_enviar}`;
      });
  });

  const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    btnTopo.classList.toggle("visivel", window.scrollY > 400);
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const menu = document.getElementById("navbarNav");

  document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const colapso = bootstrap.Collapse.getInstance(menu);
      if (colapso && window.innerWidth < 992) colapso.hide();
    });
  });
});
