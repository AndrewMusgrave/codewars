var wireCode;
Object.keys(this).forEach(v => {
    if (v.includes('boom')) wireCode = this[v];
  })
Bomb.CutTheWire(wireCode);
