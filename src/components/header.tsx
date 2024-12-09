import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

interface FilterFormProps {
  onFilterChange: (filter: { id: string; name: string }) => void;
}

export function Header({ onFilterChange }: FilterFormProps){

    const [filter, setFilter] = useState({ id: '', name: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
        setFilter((prev) => {
        const updatedFilter = { ...prev, [name]: value };
        onFilterChange(updatedFilter); // Passa o filtro atualizado para o componente pai
        return updatedFilter;
      });
    };
      
  return (
    <form className="flex items-center gap-2">
      <Input
        name="id"
        placeholder="ID do pedido"
        className="w-auto"
        value={filter.id}
        onChange={handleChange}
      />
      <Input
        name="name"
        placeholder="Nome do produto"
        className="w-auto"
        value={filter.name}
        onChange={handleChange}
      />
      <Button type="submit" variant="link">
        <Search className="w-4 h-4 mr-2" />
        Filtrar resultados
      </Button>
    </form>
  );
}