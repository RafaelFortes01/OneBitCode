import { Spaceship } from './export.ts'

interface AttackSpaceship extends Spaceship {
  weapons: number
}

let xwing: AttackSpaceship = {
  name: 'X-Wing',
  pilot: 'Luke Skywalker',
  speed: 50,
  weapons: 4
}