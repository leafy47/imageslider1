(() => {
  const e = document.querySelector("#display"),
    t = document.getElementById("1"),
    n = document.createElement("img"),
    c = document.createElement("img"),
    i = document.createElement("img"),
    s = document.createElement("img");
  (n.src = "../images/2.jpg"),
    (c.src = "../images/3.jpg"),
    (i.src = "../images/4.jpg"),
    (s.src = "../images/5.jpg"),
    (n.id = "2"),
    (c.id = "3"),
    (i.id = "4"),
    (s.id = "5");
  const m = [
      document.getElementById("1c"),
      document.getElementById("2c"),
      document.getElementById("3c"),
      document.getElementById("4c"),
      document.getElementById("5c"),
    ],
    d = [t, n, c, i, s];
  m.forEach((t, n) => {
    t.addEventListener("click", () => {
      (e.innerHTML = ""), e.appendChild(d[n]);
      const c = document.querySelector('img[src="../images/filled.png"]');
      c && (c.src = "../images/empty.png"), (t.src = "../images/filled.png");
    });
  });
  const l = document.querySelector(".next"),
    r = document.querySelector(".before");
  let g;
  function o() {
    const t = parseInt(e.firstElementChild.id, 10);
    if (((e.innerHTML = ""), d[t])) {
      e.appendChild(d[t]);
      const n = document.querySelector('img[src="../images/filled.png"]');
      n && (n.src = "../images/empty.png"), (m[t].src = "../images/filled.png");
    } else {
      e.appendChild(d[0]);
      const t = document.querySelector('img[src="../images/filled.png"]');
      t && (t.src = "../images/empty.png"), (m[0].src = "../images/filled.png");
    }
  }
  l.addEventListener("click", () => {
    const t = parseInt(e.firstElementChild.id, 10);
    if (((e.innerHTML = ""), d[t])) {
      e.appendChild(d[t]);
      const n = document.querySelector('img[src="../images/filled.png"]');
      n && (n.src = "../images/empty.png"), (m[t].src = "../images/filled.png");
    } else {
      e.appendChild(d[0]);
      const t = document.querySelector('img[src="../images/filled.png"]');
      t && (t.src = "../images/empty.png"), (m[0].src = "../images/filled.png");
    }
  }),
    r.addEventListener("click", () => {
      const t = parseInt(e.firstElementChild.id, 10) - 2;
      if (((e.innerHTML = ""), d[t])) {
        e.appendChild(d[t]);
        const n = document.querySelector('img[src="../images/filled.png"]');
        n && (n.src = "../images/empty.png"),
          (m[t].src = "../images/filled.png");
      } else {
        e.appendChild(d[4]);
        const t = document.querySelector('img[src="../images/filled.png"]');
        t && (t.src = "../images/empty.png"),
          (m[4].src = "../images/filled.png");
      }
    }),
    (g = setTimeout(o, 5e3)),
    new MutationObserver((e, t) => {
      console.log("DOM changes detected:", e),
        clearTimeout(g),
        (g = setTimeout(o, 5e3));
    }).observe(document, { subtree: !0, attributes: !0 });
})();
