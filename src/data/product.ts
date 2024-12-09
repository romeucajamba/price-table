import { CreateProduct } from "../interface/product";

let products = [
  { id: 9881, name: "HgzAGHHz", price: 57.03 },
  { id: 4342, name: "OrEEYKFb", price: 43.27 },
  { id: 9336, name: "CszEQfkc", price: 49.31 },
  { id: 8499, name: "irZRvaaH", price: 23.4 },
  { id: 9770, name: "bznFaxWo", price: 57.3 },
  { id: 5316, name: "wzBmOlzr", price: 51.43 },
  { id: 5359, name: "YlQGHfsu", price: 67.68 },
  { id: 9147, name: "dikzyeWv", price: 33.24 },
  { id: 9045, name: "iaqUMlON", price: 33.03 },
  { id: 4294, name: "CSSAXTze", price: 27.49 },
  { id: 5753, name: "zbFsfFOa", price: 29.21 },
  { id: 5114, name: "EhwnwIFK", price: 67.52 },
  { id: 3673, name: "ybsiQvID", price: 54.11 },
  { id: 6317, name: "zUclZxdW", price: 35.0 },
  { id: 8218, name: "KkTUodiy", price: 60.85 },
  { id: 6518, name: "OmNgTQPf", price: 51.42 },
  { id: 2012, name: "xCwSYfzr", price: 37.64 },
  { id: 2239, name: "tDqdpDCT", price: 63.25 },
  { id: 4009, name: "sZdxpuSW", price: 67.61 },
  { id: 4247, name: "uICcSRGT", price: 51.08 },
];

export async function getProducts() {
    //delay de 1 seg
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return products
}

export async function addProduct(newProduct: CreateProduct) {
  // Simula um delay de 1 segundo
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Adiciona um novo produto à lista local
  const productWithId = { ...newProduct, id: Math.floor(Math.random() * 10000) };
  products = [...products, productWithId];

  return productWithId;
}
