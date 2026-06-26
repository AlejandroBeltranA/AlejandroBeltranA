// ============================================================================
//  cv-data.js — THE ONLY FILE YOU EDIT TO UPDATE THE SITE.
//  Bio, the featured paper, project cards, publications and links all live here.
//  Edit the text between the quotes, save, refresh the page. No build step.
//
//  ▸ ADD A PROJECT CARD → add one { ... } block to the `projects` array.
//  ▸ ADD A PAPER        → add one { ... } block to the `publications` array.
//  ▸ The big card at the top of the page is the single `featured` object.
//
//  PROJECT template (copy, edit, paste into `projects`):
//    { name: 'Project name', kind: 'Paper · Venue', glyph: '◆',
//      desc: 'One line shown on the card.',
//      detail: 'Longer text shown when the card is expanded.',
//      tags: ['Topic one', 'Topic two'],
//      href: 'https://link', cta: 'Read the paper',
//      repo: 'https://github.com/...' },   // repo is an optional 2nd link
//
//  PUBLICATION template (copy, edit, paste into `publications`):
//    { group: 'Working paper',   // Forthcoming | Peer-reviewed | Working paper | Book | Dissertation
//      authors: 'Beltran, A., Coauthor, B.', year: '2025',
//      title: 'Full paper title', venue: 'Journal or series',
//      links: [['Paper', 'https://...'], ['Code', 'https://...']],
//      highlight: true },        // highlight is optional — tints/features the row
// ============================================================================
window.CV = {
  name: 'Alejandro Beltran',
  role: 'AI & Public Institutions Researcher',
  org: 'The Alan Turing Institute',
  bio: "I'm a researcher who studies how AI behaves once it's inside real institutions, and builds tools to hold it accountable, currently a Postdoctoral Research Associate at the Alan Turing Institute. On secondment to the UK Ministry of Justice I audited the modelling behind a national forecasting pipeline. My research argues that the most consequential AI failures in government are mundane rather than dramatic, and that meaningful human oversight is hardest exactly where a tool looks like a harmless productivity aid. I've also worked with the Inter-American Development Bank on research across Latin America. Before London I did my PhD at the University of Arizona, and before that I studied at the Universidad Autónoma de Sinaloa in Culiacán, México.",
  bioLong: 'Researcher working at the seam of machine learning and public institutions. PhD, University of Arizona. Previously Universidad Autónoma de Sinaloa, Culiacán, México.',
  social: {
    x: 'https://x.com/beltranalexj',
    linkedin: 'https://linkedin.com/in/beltranalejandro',
    github: 'https://github.com/alejandrobeltrana',
    email: 'mailto:alex.beltran91@gmail.com',
    scholar: 'https://scholar.google.com/citations?user=w-5RBX8AAAAJ',
    cv: 'https://drive.google.com/file/d/1-h1dLKXxjEtdbhhRewUF8GCCqO7yZyu_/view',
  },
  // the launch driver — the paper this whole revamp is for
  featured: {
    tag: 'New · 2026',
    venue: 'European Political Science Review',
    oa: 'Open Access',
    title: 'Paying the Piper: Government Advertising and Media Bias',
    authors: 'Beltran · Guariso · Guerrero',
    blurb: 'When the Mexican government over-pays a newspaper for advertising, that paper\u2019s opinion columns turn measurably less negative about the president — and more negative about his main rival. We turn an open secret into evidence.',
    cta: 'Read the interactive paper',
    href: 'papers/paying-the-piper.html',
    doi: 'https://doi.org/10.1017/S175577392610054X',
    stats: [
      ['200k+', 'opinion articles'],
      ['8', 'newspapers'],
      ['2013–18', 'period studied'],
    ],
    affil: 'Alan Turing Institute · CMCC Foundation · University of Helsinki',
  },
  metrics: [
    ['6', 'publications'],
    ['200+', 'citations'],
    ['6', 'open-source projects'],
  ],
  projects: [
    { name: 'Democracy Bench', kind: '🏆 GovHack 2026 · Challenge 3 winner', desc: 'An evaluation that tests whether AI deployed in government reflects the public’s democratic values — and whether we can keep it aligned as those values change.', detail: 'Built for GovHack 2026 (Challenge 3: sovereign AI) and won. Six frontier models answer real British Social Attitudes survey questions, scored against the UK public. The live demo lands three findings: off-the-shelf models miss the public on contested policy; their rights-floor safeguards are shallow, reacting to the word “AI” rather than the harm itself; and you cannot prompt a public’s values in from the outside — the case for sovereign evaluation. Fail-closed, option-order debiased, with confidence intervals throughout.', tags: ['AI governance', 'Evaluation', 'Sovereign AI', 'Public values'], href: 'democracy-bench/', cta: 'Open the live demo', marquee: true, widget: 'democracy', glyph: '🏆' },
    { name: 'Scenario Planning Digital Twin', kind: 'Interactive paper · Mesa-Geo', desc: 'A multilevel agent-based model that tracks every dwelling and resident in a city, hour by hour, to test who benefits from energy retrofit policy.', detail: 'Built with Mesa-Geo. 97,714 dwellings matched to UPRNs at a 99.5% rate, driven by ERA5 + Climate-DT forcing across 2020–39. Calibrated against SERL smart-meter profiles, validated against DESNZ totals (MAPE < 5%). The interactive paper walks through climate inputs, synthetic population, agent logic, calibration, and two heat-pump policy scenarios.', tags: ['Agent-based modelling', 'Mesa-Geo', 'Energy policy', 'Climate'], href: 'https://alejandrobeltrana.github.io/spdt_abm/abm_demo.html', cta: 'Open interactive paper', marquee: true, widget: 'demand', glyph: '◉', repo: 'https://github.com/AlejandroBeltranA/spdt_abm' },
    { name: 'Local Threshold Evaluation', kind: 'Paper + code · LTE', desc: 'A pre-deployment harness that catches when an LLM stops being operationally reliable — before it produces a visible hallucination.', detail: 'LTE detects reliability precursors — expansion drift, latency cliffs, context decay, repetition, persistent contract failure — and maps them to intervention states (continue, retry, repair, escalate, abort). Across seven models it surfaced a divergence between static-probe performance and rolling-stress reliability, and emits a structured audit artifact: a record of what a deploying organisation had reason to know before going live.', tags: ['Agentic AI', 'Evaluation', 'Governance', 'LLM'], href: 'papers/when-to-stop.html', cta: 'Explore the project', marquee: true, widget: 'threshold', glyph: '◫', repo: 'https://github.com/AlejandroBeltranA/local_threshold_evaluation' },
    { name: 'Subnational Fiscal Data for Latin America', kind: 'Interactive maps · Inter-American Development Bank', desc: 'Thirteen live maps of subnational public finance across nine Latin American countries, built for the IDB.', detail: 'As a data-science consultant to the IDB\u2019s Fiscal Management Division, I homogenised and processed subnational fiscal data across ten Latin American countries, built the interactive Leaflet maps, and co-authored the outputs that grew out of it — a sector framework on decentralisation and a study of the property tax in Mexico. The page collects all thirteen maps behind a country switcher.', tags: ['Public finance', 'Data viz', 'Leaflet', 'Latin America'], href: 'papers/idb-subnational.html', cta: 'Explore the maps', marquee: true, widget: 'maps', glyph: '\u25C8' },
    { name: 'Local-RAG-App', kind: 'Tool · Python', desc: 'A fully offline LLM that runs on any personal computer through Docker.', detail: 'A self-contained retrieval-augmented generation stack packaged in Docker — no cloud, no API keys, no data leaving the machine. Built for researchers and institutions that need to query sensitive document collections privately.', tags: ['LLM', 'RAG', 'Docker', 'Privacy'], href: 'papers/local-rag-app.html', cta: 'Open the guide', repo: 'https://github.com/AlejandroBeltranA/Local-RAG-App', glyph: '◍' },
    { name: 'Sinaloa Audits', kind: 'Paper + code · Data & Policy', desc: 'Extracting structured fiscal data from government audit reports with NLP.', detail: 'A pipeline that turns unstructured Mexican state audit reports into structured fiscal data, enabling systematic analysis of public spending and irregularities. Published in Data & Policy (2023).', tags: ['NLP', 'Information extraction', 'Public finance'], href: 'https://doi.org/10.1017/dap.2023.4', cta: 'Read the paper', glyph: '▤', repo: 'https://github.com/AlejandroBeltranA/Sinaloa-Audits' },
    { name: 'OCVED-ML', kind: 'Paper + models · IJCNN', desc: 'Detecting criminal organisations in Mexico with machine learning and NLP.', detail: 'Scripts and models behind Osorio & Beltran (2020), IJCNN — using ML and NLP over event data to identify and track organised-crime networks.', tags: ['ML', 'NLP', 'Event data'], href: 'https://ieeexplore.ieee.org/abstract/document/9207039', cta: 'Read the paper', glyph: '◆', repo: 'https://github.com/AlejandroBeltranA/OCVED-ML' },
  ],
  // Empty for now — render as tasteful empty states until Alejandro sends content.
  talks: [],
  writing: [],
  publications: [
    { group: 'Forthcoming', authors: 'Beltran, A., Tipuric, M., Malleson, N., Wagg, D., Arribas-Bel, D., Yue, K.', year: '2026', title: 'A multilevel agent-based model for household energy: a scenario planning digital twin', venue: 'In preparation', links: [['Interactive demo', 'https://alejandrobeltrana.github.io/spdt_abm/abm_demo.html'], ['Code', 'https://github.com/AlejandroBeltranA/spdt_abm']] },
    { group: 'Peer-reviewed', authors: 'Beltran, A., Guariso, D., Guerrero, O.', year: '2026', title: 'Paying the piper: government advertising and media bias', venue: 'European Political Science Review · Open Access', links: [['Interactive paper', 'papers/paying-the-piper.html'], ['DOI', 'https://doi.org/10.1017/S175577392610054X']], highlight: true },
    { group: 'Peer-reviewed', authors: 'Beltran, A.', year: '2023', title: 'Fiscal data in text: information extraction from audit reports using NLP', venue: 'Data & Policy, 5, E7', links: [['Paper', 'https://doi.org/10.1017/dap.2023.4'], ['Code', 'https://github.com/AlejandroBeltranA/Sinaloa-Audits']] },
    { group: 'Peer-reviewed', authors: 'Osorio, J., Beltran, A.', year: '2020', title: 'Enhancing the detection of criminal organizations in Mexico using ML and NLP', venue: 'IJCNN 2020, IEEE', links: [['Paper', 'https://ieeexplore.ieee.org/abstract/document/9207039']] },
    { group: 'Peer-reviewed', authors: 'Osorio, J., Reyes, A., Beltrán, A., Ahmadzai, A.', year: '2020', title: 'Supervised event coding from text written in Arabic: introducing hadath', venue: 'AESPEN 2020', links: [['Paper', 'https://aclanthology.org/2020.aespen-1.9/']] },
    { group: 'Working paper', authors: 'Beltran, A.', year: '2026', title: 'When to stop: operational reliability and enforceable accountability for agentic AI in government deployment', venue: 'Working paper · under review', links: [['Paper', 'papers/when-to-stop.pdf'], ['Code', 'https://github.com/AlejandroBeltranA/local_threshold_evaluation']] },
    { group: 'Working paper', authors: 'Beltran, A., Martinez-Vazquez, J., Muñoz, A., Slack, E.', year: '2025', title: 'The performance of the property tax in Mexico: asymmetric assignment of cadastral management and the role of local capacity', venue: 'ICEPP Working Paper 2513, Georgia State University', links: [['PDF', 'http://ayspsrd.gsu.edu/ays/ispwps/paper2513.pdf'], ['RePEc', 'https://ideas.repec.org/p/ays/ispwps/paper2513.html']] },
    { group: 'Book', authors: 'Verdugo López, M., Beltran, A.', year: '2017', title: 'Ciudades, Desarrollo Urbano y Autonomía Financiera: Dilemas para la Gobernanza Local en México', venue: 'Juan Pablos Editor, Culiacán · in Spanish', links: [['Book', 'https://editorial.uas.edu.mx/VerLibro.php?id=275']] },
    { group: 'Dissertation', authors: 'Beltran, A.', year: '2021', title: 'Accounting for corruption: evaluating state audit agencies in Mexico', venue: 'University of Arizona', links: [['Dissertation', 'https://www.proquest.com/openview/1dfca4cb7fff20c5bf100fb7735ac4d0/1?pq-origsite=gscholar&cbl=18750&diss=y']] },
  ],
};
