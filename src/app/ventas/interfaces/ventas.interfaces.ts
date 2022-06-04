export enum Color {
    rojo, negro, azul, verde, morado, violeta
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}