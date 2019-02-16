import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{

  private PRODUITS: Produit[] = [];

  constructor(){
  }

  public getProduits(): Produit[]{
    return this.PRODUITS;
  }

}
