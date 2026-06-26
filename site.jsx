// site.jsx — Alejandro Beltran · interactive CV hub (Direction C)
const { useState, useEffect } = React;

// ── shared live demand widget (24h household-energy profile) ──
function DemandWidget() {
  const profile = [0.30, 0.26, 0.24, 0.23, 0.25, 0.34, 0.58, 0.86, 0.92, 0.74, 0.62, 0.58, 0.60, 0.57, 0.55, 0.60, 0.74, 0.95, 1.0, 0.93, 0.80, 0.64, 0.48, 0.37];
  const [hour, setHour] = useState(18);
  useEffect(() => {
    const t = setInterval(() => setHour((h) => (h + 1) % 24), 1100);
    return () => clearInterval(t);
  }, []);
  const kwh = (profile[hour] * 3.32).toFixed(2);
  return (
    <div className="widget">
      <div className="widget-head">
        <span className="mono tag dot-row"><span className="dot" /> live · household demand</span>
        <span className="mono" style={{ color: 'var(--faint)', fontSize: 12 }}>{String(hour).padStart(2, '0')}:00</span>
      </div>
      <div className="widget-bars">
        {profile.map((v, i) => (
          <div key={i} className="bar" style={{ height: `${v * 100}%`, background: i === hour ? 'var(--accent)' : 'var(--accent-soft)' }} />
        ))}
      </div>
      <div className="widget-foot">
        <div>
          <div className="widget-num">{kwh}<span> kWh/h</span></div>
          <div className="mono tag" style={{ color: 'var(--faint)', marginTop: 2 }}>this hour · sample dwelling</div>
        </div>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--faint)', textAlign: 'right', lineHeight: 1.5 }}>from the<br />SPDT model</span>
      </div>
    </div>
  );
}

// ── live reliability monitor (LTE intervention states) ──
function ThresholdMonitor() {
  const states = [['continue', '#3f9d63'], ['retry', '#c9a23a'], ['repair', '#c9a23a'], ['escalate', '#d8752f'], ['abort', '#c0331f']];
  const [t, setT] = useState(8);
  useEffect(() => {
    const id = setInterval(() => setT((x) => (x >= 100 ? 0 : x + 2)), 130);
    return () => clearInterval(id);
  }, []);
  const idx = Math.min(4, Math.floor(t / 20));
  const [label, color] = states[idx];
  return (
    <div className="widget">
      <div className="widget-head">
        <span className="mono tag dot-row"><span className="dot" style={{ background: color }} /> live · reliability monitor</span>
        <span className="mono" style={{ color: 'var(--faint)', fontSize: 12 }}>t+{String(Math.round(t * 1.2)).padStart(3, '0')}</span>
      </div>
      <div className="states">
        {states.map(([s, c], i) => (
          <span key={s} className="state" style={i === idx ? { background: c, borderColor: c, color: '#fff' } : {}}>{s}</span>
        ))}
      </div>
      <div className="meter"><div className="meter-fill" style={{ width: `${t}%`, background: color }} /></div>
      <div className="widget-foot">
        <div>
          <div className="widget-num" style={{ color }}>{label}</div>
          <div className="mono tag" style={{ color: 'var(--faint)', marginTop: 2 }}>intervention state</div>
        </div>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--faint)', textAlign: 'right', lineHeight: 1.5 }}>context load {Math.min(99, t)}%<br />drift {idx >= 2 ? 'rising' : 'stable'}</span>
      </div>
    </div>
  );
}

// ── Democracy Bench (GovHack winner) — closeness-to-the-public leaderboard ──
function DemocracyWidget() {
  const rows = [
    ['🇨🇳 DeepSeek', 0.71], ['🇨🇦 Command R', 0.70], ['🇺🇸 Gemini 2.5 Flash', 0.60],
    ['🇫🇷 Mistral Small', 0.60], ['🇺🇸 GPT-4o-mini', 0.55], ['🇺🇸 Claude 3 Haiku', 0.55],
  ];
  return (
    <div className="widget">
      <div className="widget-head">
        <span className="mono tag dot-row"><span className="dot" /> closeness to the UK public</span>
        <span className="mono" style={{ color: 'var(--faint)', fontSize: 12 }}>6 models</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 14 }}>
        {rows.map(([name, v]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="mono" style={{ flex: '0 0 134px', fontSize: 11.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
            <span style={{ flex: 1, height: 7, background: 'var(--accent-soft)', borderRadius: 4, overflow: 'hidden' }}>
              <span style={{ display: 'block', height: '100%', width: `${v * 100}%`, background: 'var(--accent)', borderRadius: 4 }} />
            </span>
            <span className="mono" style={{ flex: '0 0 auto', fontSize: 11.5, color: 'var(--accent)', fontWeight: 500 }}>{v.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="widget-foot">
        <div>
          <div className="widget-num">0.71<span> / 1.00</span></div>
          <div className="mono tag" style={{ color: 'var(--faint)', marginTop: 2 }}>closest model · still a third off</div>
        </div>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--faint)', textAlign: 'right', lineHeight: 1.5 }}>🏆 Overall winner<br />i.AI × ElevenLabs 2026</span>
      </div>
    </div>
  );
}

// ── Democracy Bench hero — cycling government decisions (from the demo finale) ──
function DecisionWidget() {
  const items = [
    'whether your benefit claim is flagged as fraud',
    'whether your visa is refused, with no reasons given',
    'whether your protest is allowed to go ahead',
    'how your case is triaged by the NHS',
    'whether your street is policed by prediction',
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="decidehero">
      <div className="decidehero-lead"><span className="dot" style={{ background: 'var(--gold-bright)' }} /> Right now, AI could be deciding</div>
      <div className="decidehero-cyc" key={i}>{items[i]}.</div>
      <div className="decidehero-foot">Democracy Bench measures whose values it uses.</div>
    </div>
  );
}

// ── auto-advancing live preview of the IDB maps ──
function MapsCycler() {
  const maps = [
    { c: 'México',   l: 'Municipios',    url: 'https://rawcdn.githack.com/AlejandroBeltranA/mapas/0c0674a71ef4c281e26fa956ce264a96d14d9df4/mex_mun_leaf_v2.html' },
    { c: 'Brasil',   l: 'Municípios',    url: 'https://rawcdn.githack.com/AlejandroBeltranA/mapas/0c0674a71ef4c281e26fa956ce264a96d14d9df4/bra_mun_leaf_v2.html' },
    { c: 'Colombia', l: 'Municipios',    url: 'https://rawcdn.githack.com/AlejandroBeltranA/mapas/0c0674a71ef4c281e26fa956ce264a96d14d9df4/col_mun_leaf_v2.html' },
    { c: 'Perú',     l: 'Departamentos', url: 'https://rawcdn.githack.com/AlejandroBeltranA/mapas/f4d043b7f65009f372b9d97110350e2c3d0cd112/per_dep_leaf_v2.html' },
  ];
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const [armed, setArmed] = useState(false);
  const wrapRef = React.useRef(null);
  const visRef = React.useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      visRef.current = es[0].isIntersecting;
      if (es[0].isIntersecting) setArmed(true);
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!armed) return;
    const t = setInterval(() => {
      if (visRef.current && !document.hidden) {
        setShown(false);
        setI((p) => (p + 1) % maps.length);
      }
    }, 8000);
    return () => clearInterval(t);
  }, [armed]);

  const m = maps[i];
  return (
    <div className="maps-cycler" ref={wrapRef}>
      <div className="mc-frame">
        {armed && (
          <iframe
            key={i}
            className={shown ? 'shown' : ''}
            src={m.url}
            title={`${m.c} — ${m.l}`}
            loading="lazy"
            onLoad={() => setShown(true)}
          />
        )}
        {!shown && <div className="mc-loading"><span className="mc-spin" /></div>}
        <div className="mc-overlay">
          <span className="mc-label"><b>{m.c}</b> · {m.l}</span>
          <span className="mc-dots">{maps.map((_, j) => <span key={j} className={`mc-dot ${j === i ? 'on' : ''}`} />)}</span>
        </div>
      </div>
    </div>
  );
}

// ── striped placeholder (headshot etc.) ──
function Placeholder({ label, className = '', style = {} }) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span className="mono tag" style={{ color: 'var(--faint)' }}>{label}</span>
    </div>
  );
}

// ── nav ──
function Nav() {
  const D = window.CV;
  const items = [['Work', '#work'], ['Publications', '#publications'], ['Contact', '#contact']];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" />
          <span className="brand-name">Alejandro Beltran</span>
        </a>
        <nav className="nav-links">
          {items.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
          <a className="btn-cv" href={D.social.cv} target="_blank" rel="noopener">CV ↓</a>
        </nav>
      </div>
    </header>
  );
}

// ── hero ──
function Hero() {
  const D = window.CV;
  const links = [['Scholar', D.social.scholar], ['GitHub', D.social.github], ['LinkedIn', D.social.linkedin], ['Email', D.social.email]];
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="mono tag accent eyebrow">{D.role}</div>
          <h1 className="display greeting">Hi, I'm Alejandro.</h1>
          <p className="lede">{D.bio}</p>
          <div className="chip-row">
            {links.map(([l, h]) => <a key={l} className="chip" href={h} target="_blank" rel="noopener">{l}</a>)}
          </div>
        </div>
        <div className="hero-side">
          <div className="headshot"><img src="assets/ab3.png" alt="Alejandro Beltran" /></div>
        </div>
      </div>
    </section>
  );
}

// ── featured figure (the paper's original chart) ──
function FeaturedFigure() {
  return (
    <figure className="featured-fig">
      <img src="assets/figure-capture.jpg" alt="Degree of negative sentiment versus degree of media capture: as capture rises, coverage of the incumbent turns less negative (green falls) while the challenger turns more negative (red rises); articles about neither stay flat (blue)." />
      <figcaption className="mono">Fig. As media capture rises, the tone diverges — the incumbent softens, the challenger hardens, the placebo stays flat.</figcaption>
    </figure>
  );
}

// ── featured launch (Paying the Piper) — dark band, paper-red accent ──
function Featured() {
  const D = window.CV;
  const f = D.featured;
  return (
    <section className="featured-wrap" id="featured">
      <div className="container">
        <div className="featured win">
          <div className="featured-body">
            <div className="mono tag featured-eyebrow"><span className="dot" />{f.tag}</div>
            <div className="mono featured-venue">{f.event}</div>
            <h2 className="display featured-title">{f.title}</h2>
            <p className="featured-blurb">{f.blurb}</p>
            <div className="featured-stats">
              {f.stats.map(([n, l]) => (
                <div key={l} className="fstat">
                  <span className="display fstat-num">{n}</span>
                  <span className="mono tag" style={{ color: 'rgba(244,243,238,0.5)' }}>{l}</span>
                </div>
              ))}
            </div>
            <div className="featured-cta">
              <a className="btn-primary" href={f.href}>{f.cta} →</a>
            </div>
          </div>
          <div className="featured-vis">
            <DecisionWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── expandable project card ──
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pcard ${open ? 'open' : ''} ${p.widget ? 'wide' : ''}`}>
      <button className="pcard-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="pcard-glyph" aria-hidden="true">{p.glyph}</span>
        <span className="pcard-headtext">
          <span className="pcard-toprow">
            <span className="display pcard-name">{p.name}</span>
            <span className="mono tag accent">{p.kind}</span>
          </span>
          <span className="pcard-desc">{p.desc}</span>
        </span>
        <span className={`chev ${open ? 'up' : ''}`} aria-hidden="true">⌄</span>
      </button>
      <div className="pcard-reveal">
        <div className="pcard-revin">
          <p className="pcard-detail">{p.detail}</p>
          {p.widget && (
            <div className="pcard-demo">
              <DemandWidget />
            </div>
          )}
          <div className="pcard-tags">
            {p.tags.map((t) => <span key={t} className="ptag mono">{t}</span>)}
          </div>
          <div className="pcard-links">
            <a className="btn-ghost" href={p.href} target="_blank" rel="noopener">{p.cta} →</a>
            {p.repo && <a className="btn-ghost subtle" href={p.repo} target="_blank" rel="noopener">Code ↗</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── marquee project (full card with a live widget) ──
function Marquee({ p, flip }) {
  const external = p.href.startsWith('http');
  return (
    <div className={`marquee ${flip ? 'flip' : ''}`}>
      <div className="marquee-text">
        <div className="mono tag accent">{p.kind}</div>
        <h3 className="display marquee-title">{p.name}</h3>
        <p className="marquee-desc">{p.desc}</p>
        <p className="marquee-detail">{p.detail}</p>
        <div className="marquee-tags">
          {p.tags.map((t) => <span key={t} className="ptag mono">{t}</span>)}
        </div>
        <div className="marquee-links">
          <a className="btn-ghost" href={p.href} target={external ? '_blank' : undefined} rel="noopener">{p.cta} →</a>
          {p.repo && <a className="btn-ghost subtle" href={p.repo} target="_blank" rel="noopener">Code ↗</a>}
        </div>
      </div>
      <div className="marquee-vis">
        {p.widget === 'demand' ? <DemandWidget /> : p.widget === 'maps' ? <MapsCycler /> : p.widget === 'democracy' ? <DemocracyWidget /> : p.widget === 'figure' ? <FeaturedFigure /> : <ThresholdMonitor />}
      </div>
    </div>
  );
}

// ── work ──
function Work() {
  const D = window.CV;
  const marquee = D.projects.filter((p) => p.marquee);
  const rest = D.projects.filter((p) => !p.marquee);
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="sec-head">
          <h3 className="display sec-title">Selected work</h3>
          <a className="mono sec-link" href={D.social.github} target="_blank" rel="noopener">all projects on github →</a>
        </div>
        <div className="marquees">
          {marquee.map((p, i) => <Marquee key={p.name} p={p} flip={i % 2 === 1} />)}
        </div>
        <div className="moregrid">
          {rest.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

// ── publications (expandable) ──
function Publications() {
  const D = window.CV;
  const [open, setOpen] = useState(false);
  const groups = ['Forthcoming', 'Peer-reviewed', 'Working paper', 'Book', 'Dissertation'];
  const count = D.publications.length;
  return (
    <section className="section alt" id="publications">
      <div className="container">
        <button className="pub-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          <h3 className="display sec-title">Publications</h3>
          <span className="pub-toggle-meta mono">{open ? 'hide' : `show all ${count}`}<span className={`chev ${open ? 'up' : ''}`} aria-hidden="true">⌄</span></span>
        </button>
        <div className={`pub-reveal ${open ? 'open' : ''}`}>
          <div className="pub-revin">
            {groups.map((g) => {
              const items = D.publications.filter((p) => p.group === g);
              if (!items.length) return null;
              return (
                <div key={g} className="pubgroup">
                  <div className="mono tag pubgroup-label">{g}</div>
                  {items.map((pub, i) => (
                    <div key={i} className={`pub ${pub.highlight ? 'pub-hi' : ''}`}>
                      <div className="pub-year mono">{pub.year}</div>
                      <div className="pub-main">
                        <div className="pub-title">{pub.title}</div>
                        <div className="pub-meta">
                          <span className="pub-authors">{pub.authors}</span>
                          <span className="pub-venue mono"> · {pub.venue}</span>
                        </div>
                        <div className="pub-links">
                          {pub.links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener" className="pub-link mono">{l} ↗</a>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
            <a className="mono sec-link" href={D.social.scholar} target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: 20 }}>full list on google scholar →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── contact ──
function Contact() {
  const D = window.CV;
  const links = [['Email', D.social.email], ['Google Scholar', D.social.scholar], ['GitHub', D.social.github], ['LinkedIn', D.social.linkedin], ['X / Twitter', D.social.x]];
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <h3 className="display contact-title">Let's talk.</h3>
          <p className="lede" style={{ maxWidth: 460 }}>Questions, ideas, collaborations — especially if you work where AI meets public institutions. I'd like to hear from you.</p>
        </div>
        <div className="contact-links">
          {links.map(([l, h]) => (
            <a key={l} className="contact-row" href={h} target="_blank" rel="noopener">
              <span>{l}</span><span className="mono" style={{ color: 'var(--accent)' }}>↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container footer">
        <span className="mono">© 2026 Alejandro Beltran</span>
        <span className="mono" style={{ color: 'var(--faint)' }}>London</span>
      </div>
    </section>
  );
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Work />
        <Publications />
        <Contact />
      </main>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
