import * as THREE from "three";

/**
 * Fondo 3D: un grafo de arquitectura (servicios conectados) rodeado de
 * objetos de ingeniería de software que flotan — bases de datos, servidores,
 * contenedores y poliedros — con parallax de mouse y scroll.
 */
export const startScene = (canvas: HTMLCanvasElement, reduced: boolean) => {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.set(0, 0, 14);

  const isLight = () => document.documentElement.classList.contains("light");
  const palette = () =>
    isLight()
      ? { a: new THREE.Color("#6d28d9"), b: new THREE.Color("#2563eb"), line: 0.22, fill: 0.05 }
      : { a: new THREE.Color("#a78bfa"), b: new THREE.Color("#60a5fa"), line: 0.45, fill: 0.06 };

  const lineMats: THREE.LineBasicMaterial[] = [];
  const fillMats: THREE.MeshBasicMaterial[] = [];
  const pointMats: THREE.PointsMaterial[] = [];

  // Objeto con aristas brillantes y relleno de vidrio muy tenue
  const wire = (geometry: THREE.BufferGeometry, color: "a" | "b") => {
    const group = new THREE.Group();
    const lm = new THREE.LineBasicMaterial({ transparent: true });
    lm.userData.tone = color;
    lineMats.push(lm);
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 20), lm));
    const fm = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false });
    fm.userData.tone = color;
    fillMats.push(fm);
    group.add(new THREE.Mesh(geometry, fm));
    return group;
  };

  // --- Objetos de ingeniería ---
  const database = () => {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const disk = wire(new THREE.CylinderGeometry(0.9, 0.9, 0.38, 24), "b");
      disk.position.y = i * 0.48 - 0.48;
      g.add(disk);
    }
    return g;
  };

  const server = () => {
    const g = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const unit = wire(new THREE.BoxGeometry(1.8, 0.32, 1.1), "a");
      unit.position.y = i * 0.42 - 0.63;
      g.add(unit);
    }
    return g;
  };

  const container = () => {
    const g = wire(new THREE.BoxGeometry(1.3, 1.3, 1.3), "a");
    const inner = wire(new THREE.BoxGeometry(0.6, 0.6, 0.6), "b");
    g.add(inner);
    g.userData.inner = inner;
    return g;
  };

  const brackets = () => {
    // Símbolo </> en dos capas para que tenga volumen
    const shape = (points: [number, number][]) =>
      new THREE.BufferGeometry().setFromPoints(points.map(([x, y]) => new THREE.Vector3(x, y, 0)));
    const g = new THREE.Group();
    const lm = new THREE.LineBasicMaterial({ transparent: true });
    lm.userData.tone = "a";
    lineMats.push(lm);
    for (const z of [-0.15, 0.15]) {
      [
        shape([[-0.4, 0.6], [-1, 0], [-0.4, -0.6]]),
        shape([[0.4, 0.6], [1, 0], [0.4, -0.6]]),
        shape([[0.2, 0.8], [-0.2, -0.8]]),
      ].forEach((geo) => {
        const line = new THREE.Line(geo, lm);
        line.position.z = z;
        g.add(line);
      });
    }
    return g;
  };

  const objects: { mesh: THREE.Object3D; base: THREE.Vector3; speed: number; spin: THREE.Vector3; phase: number }[] = [];
  const place = (mesh: THREE.Object3D, x: number, y: number, z: number, scale = 1) => {
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    scene.add(mesh);
    objects.push({
      mesh,
      base: mesh.position.clone(),
      speed: 0.4 + Math.random() * 0.5,
      spin: new THREE.Vector3(Math.random() * 0.3, 0.2 + Math.random() * 0.4, Math.random() * 0.2),
      phase: Math.random() * Math.PI * 2,
    });
  };

  place(database(), -7.5, 2.8, -2, 1);
  place(server(), 7.8, -2.2, -3, 1);
  place(container(), 6.5, 3.6, -1, 0.9);
  place(brackets(), -6.8, -3.2, 0, 0.9);
  place(wire(new THREE.IcosahedronGeometry(0.9, 0), "b"), -2.5, 5, -5, 1);
  place(wire(new THREE.OctahedronGeometry(0.8, 0), "a"), 2.8, -5, -4, 1);
  place(wire(new THREE.TorusGeometry(0.7, 0.18, 10, 32), "b"), 9.5, 1.2, -6, 1);
  place(container(), -9.5, -0.5, -6, 0.7);

  // --- Grafo de servicios conectados ---
  const nodeCount = 34;
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < nodeCount; i++) {
    nodes.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 13,
        -6 - Math.random() * 8
      )
    );
  }
  const graph = new THREE.Group();
  const pm = new THREE.PointsMaterial({ size: 0.12, transparent: true, sizeAttenuation: true });
  pm.userData.tone = "a";
  pointMats.push(pm);
  graph.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(nodes), pm));
  const edges: THREE.Vector3[] = [];
  nodes.forEach((a, i) =>
    nodes.slice(i + 1).forEach((b) => {
      if (a.distanceTo(b) < 4.2) edges.push(a, b);
    })
  );
  const em = new THREE.LineBasicMaterial({ transparent: true });
  em.userData.tone = "b";
  em.userData.soft = true;
  lineMats.push(em);
  graph.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(edges), em));
  scene.add(graph);

  // Paquetes de datos que viajan por las conexiones
  const packetMat = new THREE.MeshBasicMaterial({ transparent: true });
  const edgeCount = edges.length / 2;
  const packets = Array.from({ length: Math.min(14, edgeCount) }, () => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), packetMat);
    graph.add(mesh);
    return { mesh, edge: (Math.random() * edgeCount) | 0, t: Math.random() };
  });

  const applyColors = () => {
    const p = palette();
    lineMats.forEach((m) => {
      m.color.copy(m.userData.tone === "a" ? p.a : p.b);
      m.opacity = m.userData.soft ? p.line * 0.45 : p.line;
    });
    fillMats.forEach((m) => {
      m.color.copy(m.userData.tone === "a" ? p.a : p.b);
      m.opacity = p.fill;
    });
    pointMats.forEach((m) => {
      m.color.copy(p.a);
      m.opacity = p.line + 0.2;
    });
    packetMat.color.copy(p.b);
    packetMat.opacity = 0.9;
  };
  applyColors();
  new MutationObserver(() => {
    applyColors();
    if (reduced) renderer.render(scene, camera);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  const resize = () => {
    const w = innerWidth;
    const h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // En pantallas angostas alejo la cámara para que los objetos queden a los lados
    camera.position.z = w < 768 ? 19 : 14;
    camera.updateProjectionMatrix();
    if (reduced) renderer.render(scene, camera);
  };
  resize();
  addEventListener("resize", resize);

  const pointer = { x: 0, y: 0 };
  addEventListener(
    "pointermove",
    (e) => {
      pointer.x = e.clientX / innerWidth - 0.5;
      pointer.y = e.clientY / innerHeight - 0.5;
    },
    { passive: true }
  );

  const clock = new THREE.Clock();
  const frame = () => {
    const t = clock.getElapsedTime();
    const scroll = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);

    objects.forEach(({ mesh, base, speed, spin, phase }) => {
      mesh.position.y = base.y + Math.sin(t * speed + phase) * 0.45 + scroll * 3;
      mesh.rotation.set(t * spin.x, t * spin.y, t * spin.z);
      const inner = mesh.userData.inner as THREE.Object3D | undefined;
      if (inner) inner.rotation.set(-t * 0.8, -t * 0.6, 0);
    });

    graph.rotation.y = Math.sin(t * 0.05) * 0.25;
    graph.position.y = scroll * 2;
    packets.forEach((p) => {
      p.t += 0.006;
      if (p.t > 1) {
        p.t = 0;
        p.edge = (Math.random() * edgeCount) | 0;
      }
      p.mesh.position.lerpVectors(edges[p.edge * 2], edges[p.edge * 2 + 1], p.t);
    });

    camera.position.x += (pointer.x * 2.2 - camera.position.x) * 0.04;
    camera.position.y += (-pointer.y * 1.4 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, -4);

    renderer.render(scene, camera);
    if (!reduced) requestAnimationFrame(frame);
  };
  frame();
  canvas.style.opacity = "1";
};
