export class Electrodomesticos {
  public id: number;
  public Nombre: string;
  public Modelo: string;
  public Precio: number;
  public Consumo: string;
  public Peso: number;

  constructor(id: number,nom: string,mod: string,pre: number,con: string,pe: number) {
    this.id = id;
    this.Nombre = nom;
    this.Modelo = mod;
    this.Precio = pre;
    this.Consumo = con;
    this.Peso = pe;
  }
}