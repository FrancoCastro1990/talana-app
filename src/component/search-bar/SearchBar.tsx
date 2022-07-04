import { TextField } from '@mui/material';
import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext';

export const SearchBar = () => {

  const { findProductByWord } = useContext(ProductsContext);

  return (
    <div
      style={{
        width: 400,
        marginRight: 16
      }}
    >
      <TextField placeholder='Buscador de Producto y Categorias'
        size='small'
        fullWidth={true}
        onChange={(e) => {
          findProductByWord(e.target?.value);
        }}
      />
    </div>
  )
}
