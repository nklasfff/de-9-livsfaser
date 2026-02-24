/* ============================================================
   ARC NAV — Curved bottom navigation (ported from preview)
   ============================================================ */

const ArcNav = {
  currentActive: -1,
  visible: false,

  // Arc math constants
  _x1: 15,
  _x2: 360,
  _sagitta: 32,
  _chordY: 125.7,
  _equalGap: 11,
  _ACTIVE_R: 19,
  _DEFAULT_R: 15,

  items: [
    { name: 'Hjem',       screen: 'forside',    fillC: 'rgba(108,130,169,0.10)', strokeC: 'rgba(108,130,169,0.14)', textC: '#b8b2a8' },
    { name: 'Vinduer',    screen: 'vinduer',    fillC: 'rgba(107,95,123,0.10)',  strokeC: 'rgba(107,95,123,0.16)',  textC: '#a89bb3' },
    { name: 'Cyklusser',  screen: 'cyklusser',  fillC: 'rgba(108,130,169,0.10)', strokeC: 'rgba(108,130,169,0.14)', textC: '#b8b2a8' },
    { name: 'Relationer', screen: 'relationer', fillC: 'rgba(123,122,158,0.10)', strokeC: 'rgba(123,122,158,0.16)', textC: '#b8b2a8' },
    { name: 'Praksis',    screen: 'praksis',    fillC: 'rgba(122,144,139,0.10)', strokeC: 'rgba(122,144,139,0.16)', textC: '#b8b2a8' },
    { name: 'Rejse',      screen: 'rejse',      fillC: 'rgba(138,150,169,0.10)', strokeC: 'rgba(138,150,169,0.16)', textC: '#b8b2a8' },
  ],

  // SVG icon drawing functions
  _iconFns: [
    // Hjem — house
    function(g, c, ns) {
      var p = document.createElementNS(ns, 'path');
      p.setAttribute('d', 'M0,-5.5 L5.5,0 V4.5 H2 V1 H-2 V4.5 H-5.5 V0 Z');
      p.setAttribute('fill', 'none'); p.setAttribute('stroke', c);
      p.setAttribute('stroke-width', '0.9'); p.setAttribute('stroke-linejoin', 'round');
      g.appendChild(p);
    },
    // Vinduer — window grid
    function(g, c, ns) {
      var r = document.createElementNS(ns, 'rect');
      r.setAttribute('x', '-5'); r.setAttribute('y', '-5');
      r.setAttribute('width', '10'); r.setAttribute('height', '10');
      r.setAttribute('rx', '1.2'); r.setAttribute('fill', 'none');
      r.setAttribute('stroke', c); r.setAttribute('stroke-width', '0.8');
      g.appendChild(r);
      var l1 = document.createElementNS(ns, 'line');
      l1.setAttribute('x1', '0'); l1.setAttribute('y1', '-5');
      l1.setAttribute('x2', '0'); l1.setAttribute('y2', '5');
      l1.setAttribute('stroke', c); l1.setAttribute('stroke-width', '0.5');
      g.appendChild(l1);
      var l2 = document.createElementNS(ns, 'line');
      l2.setAttribute('x1', '-5'); l2.setAttribute('y1', '0');
      l2.setAttribute('x2', '5'); l2.setAttribute('y2', '0');
      l2.setAttribute('stroke', c); l2.setAttribute('stroke-width', '0.5');
      g.appendChild(l2);
    },
    // Cyklusser — concentric circles
    function(g, c, ns) {
      var c1 = document.createElementNS(ns, 'circle');
      c1.setAttribute('r', '6'); c1.setAttribute('fill', 'none');
      c1.setAttribute('stroke', c); c1.setAttribute('stroke-width', '1.1');
      g.appendChild(c1);
      var c2 = document.createElementNS(ns, 'circle');
      c2.setAttribute('r', '2.8'); c2.setAttribute('fill', 'none');
      c2.setAttribute('stroke', c); c2.setAttribute('stroke-width', '0.9');
      g.appendChild(c2);
      var c3 = document.createElementNS(ns, 'circle');
      c3.setAttribute('r', '0.8'); c3.setAttribute('fill', c);
      g.appendChild(c3);
    },
    // Relationer — heart
    function(g, c, ns) {
      var p = document.createElementNS(ns, 'path');
      p.setAttribute('d', 'M0,4.5 C0,4.5 -5.5,0.5 -5.5,-1.5 C-5.5,-3.5 -3.5,-5.5 -1.5,-4 L0,-2.5 L1.5,-4 C3.5,-5.5 5.5,-3.5 5.5,-1.5 C5.5,0.5 0,4.5 0,4.5 Z');
      p.setAttribute('fill', 'none'); p.setAttribute('stroke', c);
      p.setAttribute('stroke-width', '0.8');
      g.appendChild(p);
    },
    // Praksis — clock
    function(g, c, ns) {
      var ci = document.createElementNS(ns, 'circle');
      ci.setAttribute('r', '5'); ci.setAttribute('fill', 'none');
      ci.setAttribute('stroke', c); ci.setAttribute('stroke-width', '0.8');
      g.appendChild(ci);
      var p = document.createElementNS(ns, 'path');
      p.setAttribute('d', 'M0,-2.5 V0.5 L2,2.5');
      p.setAttribute('fill', 'none'); p.setAttribute('stroke', c);
      p.setAttribute('stroke-width', '0.8'); p.setAttribute('stroke-linecap', 'round');
      g.appendChild(p);
    },
    // Rejse — compass
    function(g, c, ns) {
      var ci = document.createElementNS(ns, 'circle');
      ci.setAttribute('r', '5'); ci.setAttribute('fill', 'none');
      ci.setAttribute('stroke', c); ci.setAttribute('stroke-width', '0.8');
      g.appendChild(ci);
      var p1 = document.createElementNS(ns, 'path');
      p1.setAttribute('d', 'M0,-5 V-3.5 M0,3.5 V5 M-5,0 H-3.5 M3.5,0 H5');
      p1.setAttribute('stroke', c); p1.setAttribute('stroke-width', '0.5');
      g.appendChild(p1);
      var p2 = document.createElementNS(ns, 'path');
      p2.setAttribute('d', 'M0,-2 L1.2,0.8 L-1.2,0.8 Z');
      p2.setAttribute('fill', c);
      g.appendChild(p2);
    }
  ],

  init() {
    this.render(-1);
    // Add click handlers via SVG overlay
    this._addClickHandlers();
  },

  setActive(index) {
    if (index === this.currentActive) return;
    this.currentActive = index;
    this.render(index);
  },

  toggle(show) {
    const el = document.getElementById('arc-nav');
    if (!el) return;
    this.visible = show;
    el.classList.toggle('hidden', !show);
  },

  render(activeIndex) {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.getElementById('arc-svg');
    if (!svg) return;

    // Clear
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const N = this.items.length;
    const chord = this._x2 - this._x1;
    const R = (chord * chord) / (8 * this._sagitta) + this._sagitta / 2;
    const midX = (this._x1 + this._x2) / 2;
    const halfChord = chord / 2;
    const dVal = Math.sqrt(R * R - halfChord * halfChord);
    const cxVal = midX;
    const cyVal = this._chordY + dVal;

    const angleStart = Math.atan2(this._chordY - cyVal, this._x1 - cxVal);
    const angleEnd = Math.atan2(this._chordY - cyVal, this._x2 - cxVal);

    const R_border = R + this._DEFAULT_R + this._equalGap;

    // Compute positions
    const positions = [];
    for (let i = 0; i < N; i++) {
      const isActive = (i === activeIndex);
      const r = isActive ? this._ACTIVE_R : this._DEFAULT_R;
      const t = (i + 0.5) / N;
      const angle = angleStart + t * (angleEnd - angleStart);
      const R_i = R_border - this._equalGap - r;
      positions.push({
        x: cxVal + R_i * Math.cos(angle),
        y: cyVal + R_i * Math.sin(angle),
        r: r,
        angle: angle,
        active: isActive
      });
    }

    // Edge-to-edge border arc
    const edgeDy = Math.sqrt(R_border * R_border - cxVal * cxVal);
    const edgeY = cyVal - edgeDy;

    // 1. Background fill
    const bgPath = `M 0,${edgeY.toFixed(1)} A ${R_border.toFixed(1)},${R_border.toFixed(1)} 0 0,1 375,${edgeY.toFixed(1)} L 375,160 L 0,160 Z`;
    const bgEl = document.createElementNS(svgNS, 'path');
    bgEl.setAttribute('d', bgPath);
    bgEl.setAttribute('fill', '#FDFCFB');
    svg.appendChild(bgEl);

    // 2. Border line
    const borderPath = `M 0,${edgeY.toFixed(1)} A ${R_border.toFixed(1)},${R_border.toFixed(1)} 0 0,1 375,${edgeY.toFixed(1)}`;
    const borderEl = document.createElementNS(svgNS, 'path');
    borderEl.setAttribute('d', borderPath);
    borderEl.setAttribute('fill', 'none');
    borderEl.setAttribute('stroke', 'rgba(108,130,169,0.18)');
    borderEl.setAttribute('stroke-width', '0.7');
    svg.appendChild(borderEl);

    // 3. Circles + icons + click areas
    for (let i = 0; i < N; i++) {
      const pos = positions[i];
      const item = this.items[i];
      const isActive = pos.active;

      // Circle
      const circ = document.createElementNS(svgNS, 'circle');
      circ.setAttribute('cx', pos.x.toFixed(1));
      circ.setAttribute('cy', pos.y.toFixed(1));
      circ.setAttribute('r', pos.r);
      circ.setAttribute('fill', isActive ? 'rgba(108,130,169,0.18)' : item.fillC);
      circ.setAttribute('stroke', isActive ? 'rgba(108,130,169,0.30)' : item.strokeC);
      circ.setAttribute('stroke-width', isActive ? '1' : '0.7');
      svg.appendChild(circ);

      // Icon
      const iconColor = isActive ? '#6c82a9' : 'rgba(108,130,169,0.40)';
      const g = document.createElementNS(svgNS, 'g');
      g.setAttribute('transform', `translate(${pos.x.toFixed(1)},${pos.y.toFixed(1)})`);
      this._iconFns[i](g, iconColor, svgNS);
      svg.appendChild(g);

      // Invisible click target (larger)
      const clickTarget = document.createElementNS(svgNS, 'circle');
      clickTarget.setAttribute('cx', pos.x.toFixed(1));
      clickTarget.setAttribute('cy', pos.y.toFixed(1));
      clickTarget.setAttribute('r', (pos.r + 8).toString());
      clickTarget.setAttribute('fill', 'transparent');
      clickTarget.setAttribute('cursor', 'pointer');
      clickTarget.setAttribute('data-screen', item.screen);
      clickTarget.addEventListener('click', (e) => {
        const screen = e.currentTarget.getAttribute('data-screen');
        if (screen && typeof Router !== 'undefined') {
          Router.navigate(screen, { direction: 'fade' });
        }
      });
      svg.appendChild(clickTarget);
    }

    // 4. Active dot
    if (activeIndex >= 0 && activeIndex < N) {
      const ai = positions[activeIndex];
      const actDot = document.createElementNS(svgNS, 'circle');
      actDot.setAttribute('cx', ai.x.toFixed(1));
      actDot.setAttribute('cy', (ai.y + ai.r + 4).toFixed(1));
      actDot.setAttribute('r', '2.5');
      actDot.setAttribute('fill', '#6c82a9');
      actDot.setAttribute('opacity', '0.45');
      svg.appendChild(actDot);
    }

    // 5. Text labels
    for (let i = 0; i < N; i++) {
      const pos = positions[i];
      const item = this.items[i];
      const isActive = pos.active;
      const tx = pos.x;
      const ty = pos.y + pos.r + 10;
      const tangentDeg = (pos.angle + Math.PI / 2) * 180 / Math.PI * 0.55;

      const txt = document.createElementNS(svgNS, 'text');
      txt.setAttribute('x', tx.toFixed(1));
      txt.setAttribute('y', ty.toFixed(1));
      txt.setAttribute('text-anchor', 'middle');
      txt.setAttribute('font-family', "'DM Sans',sans-serif");
      txt.setAttribute('font-size', isActive ? '10.5' : '10');
      txt.setAttribute('font-weight', isActive ? '500' : '300');
      txt.setAttribute('fill', isActive ? '#6c82a9' : item.textC);
      if (Math.abs(tangentDeg) > 0.5) {
        txt.setAttribute('transform', `rotate(${tangentDeg.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)})`);
      }
      txt.textContent = item.name;
      svg.appendChild(txt);
    }

    this.currentActive = activeIndex;
  },

  _addClickHandlers() {
    // Click handlers are added inline during render via SVG click targets
  }
};

window.ArcNav = ArcNav;
