export interface Passenger{
    _id: string
    name: string
    trips: number
    airline: object
}

export interface airline{
    _id: string
    name: string
    country: string
    logo: string
    slogan: string
    head_quaters: string
    website: string
    established: string
    __v: number
}