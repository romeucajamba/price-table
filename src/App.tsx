import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "./components/ui/table";
import { Search, PlusCircle } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "./components/ui/dialog";
import { DialogFooter } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { DialogClose } from "./components/ui/dialog";
import { FormEvent, useState } from 'react';

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, addProduct } from "./data/product";

export function App() {
  const queryClient = useQueryClient();

  // Estado para o filtro
  const [filter, setFilter] = useState({ id: '', name: '' });

  // Para buscar produtos
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  // Para adicionar produtos
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']); // Atualiza a lista de produtos
    },
  });

  // Estado local para o formulário
  const [formData, setFormData] = useState({ name: '', price: '' });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({
      name: formData.name,
      price: parseFloat(formData.price), // Certifique-se de que o preço seja numérico
    });
    setFormData({ name: '', price: '' }); // Reseta o formulário
  };

  // Filtra os produtos com base no ID e nome
  const filteredProducts = products?.filter((product) => {
    const idMatches = filter.id ? product.id.toString().includes(filter.id) : true;
    const nameMatches = filter.name ? product.name.toLowerCase().includes(filter.name.toLowerCase()) : true;
    return idMatches && nameMatches;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input
            name="id"
            placeholder="ID do pedido"
            className="w-auto"
            value={filter.id}
            onChange={(e) => setFilter((prev) => ({ ...prev, id: e.target.value }))}
          />
          <Input
            name="name"
            placeholder="Nome do produto"
            className="w-auto"
            value={filter.name}
            onChange={(e) => setFilter((prev) => ({ ...prev, name: e.target.value }))}
          />
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger>
            <Button>
              <PlusCircle className="w-4 h-4 mr-2" />
              Novo produto
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Produtos</DialogTitle>
              <DialogDescription>Adicionar produto no sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input
                  id="name"
                  className="col-span-3"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  className="col-span-3"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, price: e.target.value }))
                  }
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="destructive">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit" disabled={mutation.isLoading}>
                  {mutation.isLoading ? "Salvando..." : "Salvar"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {filteredProducts &&
              filteredProducts.map((product) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price.toLocaleString()}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
