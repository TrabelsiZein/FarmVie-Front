// Product Tag
export type SuivieProjetTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type SuivieProjetColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class SuivieProjet {
  id?: number;
  sol?:string
  idProjet?:number;
  name?: string;
  nameU?: string;
  emailUser?: string;

  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  tags?: SuivieProjetTags[];
  colors?: SuivieProjetColor[];
  nomProjet?: string;
  photoProjet?: string;
  montantMin?: string;
  idUser?:number
  gevernorat?:string
  delegation?:string
  superficieE?:string
  superficieT?:string
  biologique?:string
  etat?:string
  irrigation?:string
  siege?:string
  type?:string
  montantTotal?:number
  montantRecu?:number
  datadeployment?:string
  typeFinance?:string
  ingenieur?:string
  pourcentage?:string
  ip?:string
  constructor(
      photoProjet?: string,
    montantMin?: string,
  idUser?:number,
  gevernorat?:string,
  delegation?:string,
  superficieE?:string,
  superficieT?:string,
  biologique?:string,
  irrigation?:string,
  siege?:string,
  type?:string,
  montantTotal?:number,
  montantRecu?:number,
  datadeployment?:string,
  typeFinance?:string,
  pourcentage?:number,
sol?:string,
    id?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    pictures?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    tags?: SuivieProjetTags[],
    colors?: SuivieProjetColor[],

  ) {
    this.idUser=idUser
this.montantTotal=montantTotal
    this.id = id;
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.tags = tags;
    this.colors = colors;
  }

 }
  // Color Filter
  export interface ColorFilter {
    color?: SuivieProjetColor;
  }
