import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <Button onClick={handleClick}>
        Clickeame!
      </Button>

      <Table>
        <TableHeader>
          <TableRow>
              <TableHead scope="col">Bodega</TableHead>
              <TableHead scope="col">Nombre del Vino</TableHead>
              <TableHead scope="col">Añada</TableHead>
              <TableHead scope="col">Fecha De Actualizacion</TableHead>
              <TableHead scope="col">Imagen Etiqueta</TableHead>
              <TableHead scope="col">Nota De Cata Bodega</TableHead>
              <TableHead scope="col">Precio ARS</TableHead>
              <TableHead scope="col">Puntaje Promedio</TableHead>
              <TableHead scope="col">Varietales</TableHead>
              <TableHead scope="col">Maridaje</TableHead>
              <TableHead scope="col">Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
            <TableCell>10</TableCell>
            <TableCell>11</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default App
