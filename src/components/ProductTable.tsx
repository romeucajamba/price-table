import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "./ui/table";
import { Product } from "../interface/product"; // Supondo que você tenha o tipo Product em um arquivo types.ts

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="border rounded-lg p-2">
      <Table>
        <TableHeader>
          <TableHead>Id</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Preço</TableHead>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
