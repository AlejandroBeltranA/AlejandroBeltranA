// Renders one post. The page's folder name is the slug; its metadata lives in
// cv-data.js (window.CV.thoughts) and its body in ./post.md next to this shell.
(function () {
  const D = window.CV;
  const slug = location.pathname.replace(/\/(index\.html)?$/, '').split('/').pop();
  const post = (D.thoughts || []).find((p) => p.slug === slug);
  const $ = (id) => document.getElementById(id);

  if (!post) {
    $('title').textContent = 'Post not found';
    $('body').innerHTML = '<p class="loading">No entry for "' + slug + '" in cv-data.js.</p>';
    return;
  }

  document.title = post.title + ' — Alejandro Beltran';
  const desc = document.querySelector('meta[name=description]');
  if (desc && post.summary) desc.setAttribute('content', post.summary);
  $('title').textContent = post.title;
  $('date').textContent = post.date;
  if (post.note) $('note').textContent = post.note;

  // Markdown footnotes ([^1] ... [^1]: text) are not in marked's core; handle them here.
  function footnotes(md) {
    const defs = {};
    md = md.replace(/^\[\^([^\]]+)\]:\s*(.+)$/gm, (_, id, text) => { defs[id] = text; return ''; });
    const order = [];
    md = md.replace(/\[\^([^\]]+)\]/g, (_, id) => {
      if (!order.includes(id)) order.push(id);
      const n = order.indexOf(id) + 1;
      return `<sup id="fnref-${n}"><a href="#fn-${n}">${n}</a></sup>`;
    });
    if (!order.length) return md;
    const items = order.map((id, i) => `<li id="fn-${i + 1}">${marked.parseInline(defs[id] || '')}<a class="fnback" href="#fnref-${i + 1}">↩</a></li>`).join('');
    return md + `\n\n<div class="footnotes"><ol>${items}</ol></div>`;
  }

  fetch('post.md')
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then((md) => {
      marked.use({ gfm: true });
      $('body').innerHTML = marked.parse(footnotes(md));
      // open external links in a new tab
      $('body').querySelectorAll('a[href^="http"]').forEach((a) => { a.target = '_blank'; a.rel = 'noopener'; });
    })
    .catch((e) => { $('body').innerHTML = '<p class="loading">Could not load post.md (' + e.message + ').</p>'; });
})();
