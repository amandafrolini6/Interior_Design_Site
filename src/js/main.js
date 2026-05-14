(function () {
  "use strict";

  const STRINGS = {
    pt: {
      nav_home: "Home",
      nav_studio: "O Studio",
      nav_portfolio: "Portfólio",
      nav_contact: "Contato",
      nav_cta: "Agendar consultoria",
      hero_eyebrow: "São Paulo",
      hero_title_1: "Espaços que narram sua",
      hero_title_2: "essência.",
      hero_lead:
        "Projetos residenciais e comerciais com curadoria editorial, materiais nobres e luz tratada como matéria-prima.",
      hero_cta: "Conheça nosso trabalho",
      method_eyebrow: "Metodologia",
      method_title: "O caminho para a excelência",
      method_lead:
        "Um processo contínuo entre escuta, desenho técnico e curadoria final. Cada etapa existe para que o resultado seja coerente com quem vive o espaço.",
      step1_title: "Imersão e conceito",
      step1_text:
        "Levantamento de rotina, referências e clima desejado. Moodboard e direção visual alinhados ao briefing.",
      step2_title: "Detalhamento técnico",
      step2_text: "Plantas executivas, especificações e compatibilização com obra e fornecedores.",
      step3_title: "Curadoria final",
      step3_text: "Acabamentos, mobiliário, arte e iluminação em camadas para um ambiente acolhedor e preciso.",
      folio_eyebrow: "Portfólio selecionado",
      folio_title: "Projetos recentes",
      tag_res: "Residencial",
      tag_com: "Comercial",
      about_eyebrow: "A fundadora",
      about_p1:
        "Marina conduz cada projeto como um ensaio entre luz, textura e memória afetiva. O estúdio evita fórmulas prontas: o ponto de partida é sempre o habitar real, com cronogramas claros e decisões visuais sustentadas por desenho técnico.",
      about_p2:
        "Acreditamos em design consciente, com materiais honestos e soluções que envelhecem bem. O resultado é um ambiente silencioso no melhor sentido: calmo, funcional e profundamente pessoal.",
      stat_projects_label: "Projetos concluídos",
      stat_projects: "projetos",
      stat_years_label: "Anos de experiência",
      stat_years: "anos de experiência",
      testi_eyebrow: "Prova social",
      testi_title: "O que dizem nossos clientes",
      quote1:
        "A Marina traduziu referências dispersas em um apartamento coeso. A obra fluiu porque o pacote técnico estava impecável.",
      quote2:
        "Sentimos que cada canto foi pensado para o nosso dia a dia. A iluminação mudou completamente a percepção de tamanho do living.",
      quote3:
        "Profissionalismo raro: agenda realista, fornecedores alinhados e um olhar estético consistente do mood ao último interruptor.",
      contact_eyebrow: "Conversão",
      contact_title: "Vamos criar algo extraordinário?",
      contact_intro:
        "Conte em poucas linhas o tipo de imóvel, prazo desejado e o que precisa mudar no dia a dia. Retornamos com orientação inicial e agenda de videoconferência.",
      contact_address: "Alameda Santos, 700 — São Paulo, SP",
      contact_whatsapp: "Fale com um especialista",
      field_name: "Nome",
      field_email: "E-mail",
      field_type: "Tipo de projeto",
      field_type_ph: "Selecione",
      opt_res: "Residencial",
      opt_com: "Comercial",
      opt_cons: "Consultoria pontual",
      field_msg: "Mensagem",
      field_hint: "Inclua metragem aproximada e janela de obra, se souber.",
      field_submit: "Enviar mensagem",
      form_success: "Mensagem registrada. Em instantes você recebe a confirmação por e-mail.",
      footer_copy: "© 2026 Studio Aura. Todos os direitos reservados.",
      footer_privacy: "Política de privacidade",
      aria_wa: "WhatsApp",
      err_required: "Preencha este campo.",
      err_email: "Informe um e-mail válido.",
      err_submit: "Não foi possível enviar agora. Tente novamente em instantes.",
      form_mailto:
        "Abrindo seu e-mail com a mensagem pronta. Se nada abrir, envie manualmente para studioaura@gmail.com",
    },
    en: {
      nav_home: "Home",
      nav_studio: "The Studio",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      nav_cta: "Book a consultation",
      hero_eyebrow: "São Paulo",
      hero_title_1: "Spaces that tell your",
      hero_title_2: "essence.",
      hero_lead:
        "Residential and commercial work with editorial curation, noble materials, and light treated as a primary material.",
      hero_cta: "See our work",
      method_eyebrow: "Method",
      method_title: "The path to excellence",
      method_lead:
        "A continuous loop of listening, technical drawing, and final curation so the outcome matches the people who live in the space.",
      step1_title: "Immersion and concept",
      step1_text: "Routine, references, and desired atmosphere. Moodboard and visual direction aligned to the brief.",
      step2_title: "Technical detailing",
      step2_text: "Executive plans, specifications, and coordination with site teams and suppliers.",
      step3_title: "Final curation",
      step3_text: "Finishes, furniture, art, and layered lighting for a precise, welcoming environment.",
      folio_eyebrow: "Selected portfolio",
      folio_title: "Recent projects",
      tag_res: "Residential",
      tag_com: "Commercial",
      about_eyebrow: "Founder",
      about_p1:
        "Marina treats each project as a study of light, texture, and emotional memory. The studio avoids ready-made formulas: the starting point is always real living, with clear schedules and visually grounded technical decisions.",
      about_p2:
        "We believe in conscious design, honest materials, and solutions that age gracefully. The result is silence in the best sense: calm, functional, and deeply personal.",
      stat_projects_label: "Completed projects",
      stat_projects: "projects",
      stat_years_label: "Years of experience",
      stat_years: "years of experience",
      testi_eyebrow: "Social proof",
      testi_title: "What our clients say",
      quote1:
        "Marina turned scattered references into a coherent apartment. The build moved smoothly because the technical package was flawless.",
      quote2:
        "We felt every corner was designed for our daily life. Lighting completely changed how large the living room feels.",
      quote3:
        "Rare professionalism: a realistic schedule, aligned suppliers, and a consistent aesthetic eye from moodboard to the last switch.",
      contact_eyebrow: "Next step",
      contact_title: "Shall we create something extraordinary?",
      contact_intro:
        "Share property type, desired timeline, and what needs to change day-to-day. We reply with initial guidance and a video call slot.",
      contact_address: "Alameda Santos, 700 — São Paulo, SP",
      contact_whatsapp: "Talk to a specialist",
      field_name: "Name",
      field_email: "Email",
      field_type: "Project type",
      field_type_ph: "Select",
      opt_res: "Residential",
      opt_com: "Commercial",
      opt_cons: "On-demand consulting",
      field_msg: "Message",
      field_hint: "Include approximate square meters and construction window, if known.",
      field_submit: "Send message",
      form_success: "Message received. You will get a confirmation email shortly.",
      footer_copy: "© 2026 Studio Aura. All rights reserved.",
      footer_privacy: "Privacy policy",
      aria_wa: "WhatsApp",
      err_required: "This field is required.",
      err_email: "Enter a valid email address.",
      err_submit: "We could not send right now. Please try again shortly.",
      form_mailto:
        "Opening your email app with the message ready. If nothing opens, send manually to studioaura@gmail.com",
    },
  };

  let currentLang = "pt";

  function applyStrings(lang) {
    const table = STRINGS[lang];
    if (!table) return;

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (key && table[key] != null) {
        if (el.tagName === "OPTION" && el.value === "") {
          el.textContent = table[key];
        } else if (el.classList.contains("hero__accent")) {
          el.textContent = table[key];
        } else {
          el.textContent = table[key];
        }
      }
    });

    const waFab = document.querySelector(".fab-wa");
    if (waFab && table.aria_wa) {
      waFab.setAttribute("aria-label", table.aria_wa);
    }

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function initLang() {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const next = btn.getAttribute("data-lang");
        if (!next || next === currentLang) return;
        currentLang = next;
        applyStrings(currentLang);
        try {
          localStorage.setItem("studio-aura-lang", currentLang);
        } catch (e) {
          /* ignore */
        }
      });
    });

    var stored = null;
    try {
      stored = localStorage.getItem("studio-aura-lang");
    } catch (e) {
      stored = null;
    }
    if (stored === "en" || stored === "pt") {
      currentLang = stored;
    }
    applyStrings(currentLang);
  }

  function initNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-site-nav]");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-nav-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function initVideo() {
    const wrap = document.querySelector(".video-frame");
    if (!wrap) return;
    const video = wrap.querySelector("video");
    const btn = wrap.querySelector("[data-video-play]");
    if (!video || !btn) return;

    btn.addEventListener("click", function () {
      video.muted = false;
      var p = video.play();
      if (p && typeof p.then === "function") {
        p.then(function () {
          wrap.classList.add("is-playing");
        }).catch(function () {
          video.muted = true;
          return video.play().then(function () {
            wrap.classList.add("is-playing");
          });
        });
      } else {
        wrap.classList.add("is-playing");
      }
    });

    video.addEventListener("pause", function () {
      if (video.currentTime > 0 && video.paused) {
        wrap.classList.remove("is-playing");
      }
    });
  }

  function initForm() {
    const form = document.getElementById("form");
    const tipoSelect = document.getElementById("tipo");
    const campoOutro = document.getElementById("outro");

    if (!form || !tipoSelect || !campoOutro) return;

    function getErrorElement(input) {
      let error = input.nextElementSibling;
      if (error && error.classList.contains("field-error")) {
        return error;
      }
      error = document.createElement("p");
      error.className = "field-error";
      error.setAttribute("aria-live", "polite");
      input.parentNode.insertBefore(error, input.nextSibling);
      return error;
    }

    function clearError(input) {
      const error = input.nextElementSibling;
      if (error && error.classList.contains("field-error")) {
        error.textContent = "";
      }
    }

    function showError(input, message) {
      const error = getErrorElement(input);
      error.textContent = message;
    }

    function setSelectState() {
      tipoSelect.classList.toggle("has-value", tipoSelect.value !== "");
    }

    function validateInput(input) {
      const value = String(input.value || "").trim();
      const isOutros = input === campoOutro;
      if (isOutros && campoOutro.style.display === "none") {
        clearError(input);
        return true;
      }
      clearError(input);
      if (value === "") {
        showError(input, STRINGS[currentLang].err_required);
        return false;
      }
      if (input.type === "email" && input.validity.typeMismatch) {
        showError(input, STRINGS[currentLang].err_email);
        return false;
      }
      return true;
    }

    function syncSelectValue() {
      setSelectState();
    }

    tipoSelect.addEventListener("change", function () {
      syncSelectValue();
      if (tipoSelect.value === "outro") {
        campoOutro.style.display = "block";
        campoOutro.required = true;
      } else {
        campoOutro.style.display = "none";
        campoOutro.required = false;
        campoOutro.value = "";
        clearError(campoOutro);
      }
    });

    form.addEventListener("input", function (event) {
      const target = event.target;
      if (!target || !(target.tagName === "INPUT" || target.tagName === "SELECT" || target.tagName === "TEXTAREA")) {
        return;
      }
      if (target.id === "tipo") {
        syncSelectValue();
      }
      clearError(target);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = form.querySelector("button[type='submit']");
      const fields = [
        document.getElementById("nome"),
        document.getElementById("email"),
        tipoSelect,
        campoOutro,
        document.getElementById("mensagem"),
      ];

      let valid = true;
      let firstInvalid = null;
      fields.forEach(function (field) {
        if (!field) return;
        const isValid = validateInput(field);
        if (!isValid && !firstInvalid) {
          firstInvalid = field;
        }
        if (field === campoOutro && campoOutro.style.display === "none") {
          return;
        }
        if (!isValid) {
          valid = false;
        }
      });

      if (!valid) {
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      if (!button) return;
      button.innerText = "Enviando...";
      button.disabled = true;

      setTimeout(() => {
        button.innerText = "Enviado ✅";
        form.reset();
        campoOutro.style.display = "none";
        syncSelectValue();

        setTimeout(() => {
          button.innerText = "Enviar";
          button.disabled = false;
        }, 2000);
      }, 1500);
    });

    syncSelectValue();
  }

  function initHeaderShadow() {
    const header = document.getElementById("topo");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupHeader() {
    initNav();
    initHeaderShadow();
  }

  function clamp01(v) {
    if (v < 0) return 0;
    if (v > 1) return 1;
    return v;
  }

  function setupBuildSequence() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }

    var section = document.querySelector("[data-build-sequence]");
    var stage = document.querySelector("[data-build-stage]");
    var video = document.querySelector("[data-build-video]");
    if (!section || !stage || !video) {
      return;
    }

    var blocks = gsap.utils.toArray("[data-build-block]");
    if (blocks.length !== 3) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    var existing = ScrollTrigger.getById("build-sequence-st");
    if (existing) {
      existing.kill();
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(blocks, { autoAlpha: 1, x: 0, yPercent: -50 });
      video.addEventListener(
        "loadedmetadata",
        function () {
          try {
            video.pause();
            video.currentTime = 0;
          } catch (e) {
            /* ignore */
          }
        },
        { once: true }
      );
      return;
    }

    function scrollEndDistance() {
      return Math.max(1100, Math.round(window.innerHeight * 1.65));
    }

    function safeVideoTime(dur, progress) {
      var p = clamp01(progress);
      var t = dur * (1 - p);
      if (t <= 0) {
        return 0;
      }
      if (t >= dur) {
        return Math.max(0, dur - 0.001);
      }
      return t;
    }

    function applyVideoProgress(progress) {
      var dur = video.duration;
      if (!dur || !isFinite(dur)) {
        return;
      }
      var t = safeVideoTime(dur, progress);
      try {
        if (Math.abs(video.currentTime - t) > 0.012) {
          video.currentTime = t;
        }
      } catch (e) {
        /* ignore */
      }
    }

    function snapVideoForProgress(progress) {
      var dur = video.duration;
      if (!dur || !isFinite(dur)) {
        return;
      }
      var t = safeVideoTime(dur, progress);
      try {
        video.currentTime = t;
      } catch (e) {
        /* ignore */
      }
    }

    function syncFromScrollTrigger() {
      var st = ScrollTrigger.getById("build-sequence-st");
      if (st && video.duration && isFinite(video.duration)) {
        applyVideoProgress(st.progress);
      }
    }

    gsap.set(blocks, { autoAlpha: 0, yPercent: -50 });

    var b0 = blocks[0];
    var b1 = blocks[1];
    var b2 = blocks[2];

    var tl = gsap.timeline({
      scrollTrigger: {
        id: "build-sequence-st",
        trigger: section,
        start: "center center",
        end: function () {
          return "+=" + scrollEndDistance();
        },
        pin: stage,
        scrub: 0.45,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (self) {
          applyVideoProgress(self.progress);
        },
        onLeave: function () {
          snapVideoForProgress(1);
        },
        onLeaveBack: function () {
          snapVideoForProgress(0);
        },
        onEnter: function (self) {
          snapVideoForProgress(self.progress);
        },
        onEnterBack: function (self) {
          snapVideoForProgress(self.progress);
        },
      },
    });

    tl.fromTo(b0, { autoAlpha: 0, x: -56 }, { autoAlpha: 1, x: 0, ease: "power2.out", duration: 0.22 }, 0);
    tl.to(b0, { autoAlpha: 0, x: -36, ease: "power2.in", duration: 0.16 }, 0.24);

    tl.fromTo(b1, { autoAlpha: 0, x: 56 }, { autoAlpha: 1, x: 0, ease: "power2.out", duration: 0.22 }, 0.34);
    tl.to(b1, { autoAlpha: 0, x: 40, ease: "power2.in", duration: 0.16 }, 0.5);

    tl.fromTo(b2, { autoAlpha: 0, x: -56 }, { autoAlpha: 1, x: 0, ease: "power2.out", duration: 0.22 }, 0.56);
    tl.to(b2, { autoAlpha: 0, x: -38, ease: "power2.in", duration: 0.18 }, 0.74);

    ScrollTrigger.addEventListener("refresh", syncFromScrollTrigger);

    window.addEventListener("load", function () {
      ScrollTrigger.refresh();
      window.requestAnimationFrame(syncFromScrollTrigger);
    });

    window.addEventListener("pageshow", function () {
      ScrollTrigger.refresh(true);
      window.requestAnimationFrame(syncFromScrollTrigger);
    });

    var resizeT = null;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeT);
      resizeT = window.setTimeout(function () {
        ScrollTrigger.refresh();
      }, 120);
    });

    var metaAttempts = 0;
    function bootstrapVideoTiming() {
      metaAttempts += 1;
      if (video.duration && isFinite(video.duration) && video.duration > 0) {
        try {
          video.pause();
        } catch (e) {
          /* ignore */
        }
        ScrollTrigger.refresh();
        window.requestAnimationFrame(syncFromScrollTrigger);
        return;
      }
      if (metaAttempts < 90) {
        window.setTimeout(bootstrapVideoTiming, 100);
      } else {
        ScrollTrigger.refresh();
      }
    }

    video.addEventListener("loadedmetadata", bootstrapVideoTiming, { once: true });
    video.addEventListener("loadeddata", bootstrapVideoTiming, { once: true });
    bootstrapVideoTiming();
  }

  initLang();
  initVideo();
  initForm();
  setupHeader();
  setupBuildSequence();
})();
