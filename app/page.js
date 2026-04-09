'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq]       = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)

    const reveals = document.querySelectorAll('.reveal')
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target) } })
    }, { threshold: 0.07 })
    reveals.forEach(r => ro.observe(r))

    const links = document.querySelectorAll('a[href^="#"]')
    const handleClick = e => {
      const t = document.querySelector(e.currentTarget.getAttribute('href'))
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' }) }
    }
    links.forEach(a => a.addEventListener('click', handleClick))

    return () => { window.removeEventListener('scroll', onScroll); ro.disconnect(); links.forEach(a => a.removeEventListener('click', handleClick)) }
  }, [])

  const pratos = [
    {
      cat: 'Pasta · Clássico',
      name: 'Carbonara',
      desc: 'Fettuccine al dente com guanciale crocante, gema de ovo caipira, Pecorino Romano e pimenta-do-reino moída na hora.',
      price: 'R$32',
      img: '/carbonara.jpg',
    },
    {
      cat: 'Pasta · Clássico',
      name: 'Bolognese',
      desc: 'Tagliatelle artesanal com ragù lento de carne bovina e suína, tomate San Marzano e vinho tinto reduzido por 4 horas.',
      price: 'R$35',
      img: '/bolognese.jpg',
    },
    {
      cat: 'Pasta · Chef\'s Selection',
      name: 'Massa Premium',
      desc: 'Pappardelle negro de tinta de lula com lagostins salteados, manteiga de trufas negras e redução de prosecco.',
      price: 'R$45',
      img: '/premium.jpg',
    },
    {
      cat: 'Pizza · Artesanal',
      name: 'Pizza Artesanal',
      desc: 'Massa de longa fermentação (72h), molho de tomates pelados italianos, fior di latte DOP, manjericão fresco e azeite extravirgem.',
      price: 'R$38',
      img: '/pizza.jpg',
    },
  ]

  const faqs = [
    { q: 'É necessário reservar mesa?', a: 'Recomendamos fortemente a reserva, especialmente às sextas, sábados e feriados. Podemos recebê-lo sem reserva conforme disponibilidade, mas garantimos sua mesa com antecedência.' },
    { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos Pix, cartão de crédito e débito (todas as bandeiras), dinheiro e vale-refeição. Parcelamento em até 3x sem juros no cartão de crédito.' },
    { q: 'Qual o horário de funcionamento?', a: 'Funcionamos de terça a domingo: almoço das 12h às 15h e jantar das 19h às 23h. Às sextas e sábados o jantar vai até meia-noite. Segunda-feira fechado.' },
    { q: 'Posso organizar eventos e jantares privados?', a: 'Sim! Temos salão privativo para grupos de até 30 pessoas. Entre em contato pelo WhatsApp ou Instagram para consultar disponibilidade e personalizar o cardápio.' },
  ]

  return (
    <>
      {/* STICKY */}
      <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa%20no%20Bella%20Massa!" className="sticky-cta" target="_blank" rel="noopener">
        Reservar Mesa
      </a>

      {/* MOBILE MENU */}
      <div className={`mob-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={() => setMobileOpen(false)}>✕ fechar</button>
        <a href="#hero"        onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#pratos"      onClick={() => setMobileOpen(false)}>Cardápio</a>
        <a href="#vinho"       onClick={() => setMobileOpen(false)}>Experiência</a>
        <a href="#faq"         onClick={() => setMobileOpen(false)}>Contato</a>
      </div>

      {/* NAVBAR */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-main">Bella <span>Massa</span></span>
          <span className="nav-logo-sub">Ristorante Italiano</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#pratos">Cardápio</a></li>
          <li><a href="#vinho">Experiência</a></li>
          <li><a href="#ingredientes">Qualidade</a></li>
          <li><a href="#faq">Contato</a></li>
          <li>
            <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="btn-nav-red" target="_blank" rel="noopener">
              Reservar Mesa
            </a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ══ HERO ══ */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-rule" />

        <div className="hero-inner">
          <div className="hero-eyebrow reveal">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Autêntica culinária italiana</span>
          </div>

          <h1 className="hero-title reveal" style={{ transitionDelay: '.1s' }}>
            Sabores Que
            <em>Contam Histórias</em>
          </h1>

          <p className="hero-sub reveal" style={{ transitionDelay: '.2s' }}>
            Massas artesanais preparadas com tradição e ingredientes selecionados diretamente da Itália.
          </p>

          <div className="hero-btns reveal" style={{ transitionDelay: '.3s' }}>
            <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="btn-red" target="_blank" rel="noopener">
              Reservar Mesa
            </a>
            <a href="#pratos" className="btn-outline-cream">
              Ver Cardápio →
            </a>
          </div>
        </div>

        <div className="hero-proof">
          <div className="proof-num">4.9</div>
          <div className="proof-divider" />
          <div className="proof-text">
            <strong>Avaliação dos clientes</strong>
            +2.400 jantares servidos
          </div>
        </div>
      </section>

      {/* ══ PRATOS ══ */}
      <section id="pratos">
        <div className="pratos-inner">
          <div className="pratos-header">
            <div className="sec-eyebrow reveal">
              <span className="sec-eyebrow-line" /><span>Il Menù</span>
            </div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Pratos que<br /><em>Encantam</em>
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.15s' }}>
              Cada prato é uma homenagem às tradições regionais italianas, executado com precisão e ingredientes de excelência.
            </p>
          </div>

          <div className="pratos-grid">
            {pratos.map((p, i) => (
              <div className="prato-card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="prato-img">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="prato-body">
                  <div className="prato-cat">{p.cat}</div>
                  <div className="prato-name">{p.name}</div>
                  <p className="prato-desc">{p.desc}</p>
                  <div className="prato-footer">
                    <div className="prato-price">
                      <small>a partir de</small>
                      {p.price}
                    </div>
                    <a href="https://wa.me/5511999999999" className="btn-pedir" target="_blank" rel="noopener">
                      Reservar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VINHO / EXPERIÊNCIA ══ */}
      <section id="vinho">
        <div className="vinho-inner">
          <div className="vinho-img">
            {/* wine.jpg — vertical image, object-position center top */}
            <img src="/vinho.jpg" alt="Vinhos selecionados" />
          </div>
          <div className="vinho-content">
            <div className="sec-eyebrow reveal">
              <span className="sec-eyebrow-line" /><span>Esperienza</span>
            </div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Uma Experiência<br /><em>Completa</em>
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>
              Uma experiência completa com vinhos selecionados das melhores regiões italianas e ambiente acolhedor que transporta você diretamente para a Toscana.
            </p>
            <div className="vinho-quotes reveal" style={{ transitionDelay: '.25s' }}>
              <div className="vinho-quote">
                <span className="vinho-quote-mark">&ldquo;</span>
                <p className="vinho-quote-text">Brunello di Montalcino, Barolo e Amarone — nossos sommeliers escolhem cada garrafa para complementar perfeitamente cada prato.</p>
              </div>
            </div>
            <div style={{ marginTop: '36px' }} className="reveal" style={{ transitionDelay: '.35s' }}>
              <a href="https://wa.me/5511999999999?text=Quero%20reservar%20uma%20mesa!" className="btn-red" target="_blank" rel="noopener">
                Reservar Mesa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INGREDIENTES ══ */}
      <section id="ingredientes">
        <div className="ingr-inner">
          <div className="ingr-content">
            <div className="sec-eyebrow reveal">
              <span className="sec-eyebrow-line" /><span>Qualità</span>
            </div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s' }}>
              Ingredientes<br /><em>Frescos</em> & Importados
            </h2>
            <p className="sec-sub reveal" style={{ transitionDelay: '.2s' }}>
              Ingredientes frescos, selecionados e importados diretamente da Itália. Farinha tipo 00, tomate San Marzano DOP, trufa negra de Norcia e queijos com certificação de origem garantida.
            </p>
            <div className="ingr-tags reveal" style={{ transitionDelay: '.25s' }}>
              {[
                { label: 'Farinha Tipo 00',   cls: '' },
                { label: 'Tomate San Marzano', cls: 'olive' },
                { label: 'Trufa Negra',        cls: '' },
                { label: 'Pecorino Romano DOP',cls: 'gold' },
                { label: 'Azeite Extravirgem', cls: 'olive' },
                { label: 'Importado da Itália',cls: '' },
              ].map(({ label, cls }) => (
                <span className={`ingr-tag${cls ? ` ${cls}` : ''}`} key={label}>{label}</span>
              ))}
            </div>
          </div>
          <div className="ingr-img">
            {/* ingredients.jpg — top view 1:1, object-fit cover center */}
            <img src="/ingredients.jpg" alt="Ingredientes frescos e selecionados" />
          </div>
        </div>
      </section>

      {/* ══ OFERTA ══ */}
      <section id="oferta">
        <div className="oferta-inner">
          <div className="oferta-badge reveal">Promoção Especial</div>
          <h2 className="oferta-title reveal" style={{ transitionDelay: '.1s' }}>
            <strong>10% de desconto</strong> para<br />
            reservas feitas hoje
          </h2>
          <p className="oferta-sub reveal" style={{ transitionDelay: '.2s' }}>
            Válido para jantar de segunda a quinta · Informe o código <strong style={{ color: 'rgba(184,150,46,.9)' }}>BELLA10</strong> ao reservar
          </p>
          <a
            href="https://wa.me/5511999999999?text=Quero%20reservar%20com%20o%20desconto%20BELLA10!"
            className="btn-cream reveal"
            style={{ transitionDelay: '.3s', display: 'inline-flex' }}
            target="_blank" rel="noopener"
          >
            Reservar Agora
          </a>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ══ */}
      <section id="depoimentos">
        <div className="deps-inner">
          <div className="deps-header">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <span className="sec-eyebrow-line" /><span>Ospiti</span><span className="sec-eyebrow-line" />
            </div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              O que dizem nossos <em>convidados</em>
            </h2>
          </div>
          <div className="deps-grid">
            {[
              { name: 'Marina A.', loc: 'São Paulo, SP', text: 'Melhor italiano da cidade, sem sombra de dúvida. A carbonara é autêntica como na Roma — simplesmente perfeita.' },
              { name: 'Rafael T.', loc: 'Campinas, SP', text: 'Experiência incrível do começo ao fim. Ambiente acolhedor, serviço impecável e a massa premium é inesquecível.' },
              { name: 'Camila R.', loc: 'São Paulo, SP', text: 'Comida impecável em cada detalhe. A pizza artesanal tem a massa mais leve que já provei. Já reservei para voltar.' },
            ].map((dep, i) => (
              <div className="dep-card reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="dep-stars">★★★★★</div>
                <p className="dep-text">&ldquo;{dep.text}&rdquo;</p>
                <div className="dep-sep" />
                <div className="dep-author">
                  <strong>{dep.name}</strong>
                  <span>{dep.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <span className="sec-eyebrow-line" /><span>Domande</span><span className="sec-eyebrow-line" />
            </div>
            <h2 className="sec-title reveal" style={{ transitionDelay: '.1s', textAlign: 'center' }}>
              Perguntas <em>Frequentes</em>
            </h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-ic">+</span>
                </button>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="ft-inner">
          <div>
            <a href="#hero" className="ft-logo">
              <span className="ft-logo-main">Bella <span>Massa</span></span>
            </a>
            <span className="ft-logo-sub">Ristorante Italiano</span>
            <p className="ft-tag">Autêntica culinária italiana preparada com tradição, ingredientes importados e muito amor.</p>
            <a href="https://wa.me/5511999999999" className="ft-link" target="_blank" rel="noopener"><span>💬</span>(11) 99999-9999</a>
            <a href="https://instagram.com/bellamassa" className="ft-link" target="_blank" rel="noopener"><span>📸</span>@bellamassa</a>
            <a href="#" className="ft-link"><span>📍</span>Rua da Itália, 456 — São Paulo</a>
          </div>
          <div>
            <div className="ft-col-title">Navegação</div>
            <ul className="ft-links">
              {[['#hero','Home'],['#pratos','Cardápio'],['#vinho','Experiência'],['#ingredientes','Qualidade'],['#faq','Contato']].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-col-title">Horários</div>
            <ul className="ft-links">
              <li><a href="#">Ter–Sex: 12h–15h / 19h–23h</a></li>
              <li><a href="#">Sáb–Dom: 12h–23h</a></li>
              <li><a href="#">Segunda: fechado</a></li>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener">Reservar Mesa →</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span className="ft-copy">© 2025 Bella Massa. Tutti i diritti riservati.</span>
          <span className="ft-it">la dolce vita</span>
        </div>
      </footer>
    </>
  )
}
