// instanz.js – Orbit‑fähige Version

let ORBIT_COUNT = 0;

export function instanz(ID, core) {
  ORBIT_COUNT++;

  return {
    instanzID: `O-${ORBIT_COUNT}`,
    axis: ID.AXIS,
    freq: ID.FREQUENZ,
    geo: ID.GEOMETRIE,
    core: core.ID,
    createdAt: Date.now(),
    orbit: true
  };
}
