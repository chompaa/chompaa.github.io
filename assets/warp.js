(() => {
  function warp() {
    const c = document.getElementById("warp");
    if (!c) return;

    const ctx = c.getContext("2d");
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    let cx = w / 2;
    let cy = h / 2;

    const FOV = 300;
    const COUNT = 900;
    let stars = [];

    function resetStar(s) {
      s.x = (Math.random() - 0.5) * w * 2;
      s.y = (Math.random() - 0.5) * h * 2;
      s.z = Math.random() * w;
    }

    for (let i = 0; i < COUNT; i++) {
      let s = {};
      resetStar(s);
      stars.push(s);
    }

    function frame() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.fillRect(0, 0, w, h);

      for (let s of stars) {
        s.z -= 4;
        if (s.z <= 0) resetStar(s);

        const k = FOV / s.z;
        const x = s.x * k + cx;
        const y = s.y * k + cy;

        ctx.fillStyle = "white";
        ctx.fillRect(x, y, 2, 2);
      }

      requestAnimationFrame(frame);
    }

    frame();

    window.addEventListener("resize", () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
    });
  }

  setTimeout(warp, 50);
})();
