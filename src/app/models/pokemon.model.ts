export interface Pokemon{
    name : string
    url : string
}

export interface Pokelist {
    count : number
    previous? : string
    next? : string
    results : Pokemon[]
}

export interface PokeDetail{
    url : string
    name : string
    height : number
    weight : number
    sprite1 : string
    sprite2 : string
}
