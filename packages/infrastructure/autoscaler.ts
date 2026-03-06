export function autoscale(load:number){

  if(load>10000)
    return "scale_up"

  if(load<1000)
    return "scale_down"

  return "stable"

}
