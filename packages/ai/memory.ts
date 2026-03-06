const memory = []

export function saveMemory(entry:any){
  memory.push(entry)
}

export function getMemory(){
  return memory
}
