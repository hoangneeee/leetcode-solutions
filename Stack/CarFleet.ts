function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: [number, number][] = [];
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]);
  let fleets = 0;
  let arrivalTime = 0;

  for (const [pos, spd] of cars) {
    const timeToReachTarget: number = (target - pos) / spd;
    if (timeToReachTarget > arrivalTime) {
      fleets++;
      arrivalTime = timeToReachTarget;
    }
  }

  return fleets;
}

console.log('result ', carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
