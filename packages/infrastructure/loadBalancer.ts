export function chooseNode(){

  const nodes = [
    "us-east",
    "eu-central",
    "asia"
  ]

  const i = Math.floor(Math.random()*nodes.length)

  return nodes[i]

}
