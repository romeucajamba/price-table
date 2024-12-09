import { CreateProduct } from "../interface/product";

let products = [
  { id: 9881, name: "Camiseta Nike", price: 57.03 },
  { id: 4342, name: "Tênis Adidas", price: 43.27 },
  { id: 9336, name: "Mochila Levi's", price: 49.31 },
  { id: 8499, name: "Relógio Casio", price: 23.4 },
  { id: 9770, name: "Fone JBL", price: 57.3 },
  { id: 5316, name: "Smartphone Samsung Galaxy", price: 51.43 },
  { id: 5359, name: "Caderno Moleskine", price: 67.68 },
  { id: 9147, name: "Fone Sony", price: 33.24 },
  { id: 9045, name: "Camiseta Lacoste", price: 33.03 },
  { id: 4294, name: "Tênis Puma", price: 27.49 },
  { id: 5753, name: "Bolsa Michael Kors", price: 29.21 },
  { id: 5114, name: "Jaqueta North Face", price: 67.52 },
  { id: 3673, name: "Calça Diesel", price: 54.11 },
  { id: 6317, name: "Óculos Ray-Ban", price: 35.0 },
  { id: 8218, name: "Camiseta Tommy Hilfiger", price: 60.85 },
  { id: 6518, name: "Tênis Converse", price: 51.42 },
  { id: 2012, name: "Casaco Zara", price: 37.64 },
  { id: 2239, name: "Bermuda H&M", price: 63.25 },
  { id: 4009, name: "Botas Timberland", price: 67.61 },
  { id: 4247, name: "Jaqueta Columbia", price: 51.08 }
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
