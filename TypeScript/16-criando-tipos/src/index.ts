type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let homePlanet: Planet
homePlanet = "Terra"

let milkyWay: Planet[]

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra")
  }
}


type GreetingCallback = (name: string) => void

function greet(callback: GreetingCallback) {
  const name = prompt("Qual é o seu nome?")

  callback(name)
}

greet((name) => {
  alert(`Olá, ${name}! Essa é uma saudação executada como callback!`)
})