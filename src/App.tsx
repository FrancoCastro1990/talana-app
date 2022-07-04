import { createTheme, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CategoryList } from './component/category/CategoryList';
import { ProductsContext } from './component/context/ProductsContext';
import { ShopCartContext } from './component/context/ShopCartContext';
import { Header } from './component/Header/Header';
import { ProductList } from './component/product/ProductList';
import { ShopCartPopover } from './component/shop-cart/ShopCartPopover';
import { useProducts } from './hooks/useProducts';
import { useShopCart } from './hooks/useShopCart';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(34,34,191)',
    },
    secondary: {
      main: '#57fbdb',
    },
    warning: {
      main: "#fe0a73"
    }

  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': { borderRadius: 24, }
        }
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius: 24,
        }
      }
    }
  }
});

function App() {

  const { products, setfilterProducts, getAllProductsAsync, setAllProducts, findProductByWord } = useProducts();

  const { purchaseList, addtoCart, total, updateQuantity } = useShopCart();

  const [showPopover, setShowPopover] = useState(false);

  const toggleShowPopover = () => {
    setShowPopover(!showPopover);
  }

  useEffect(() => {
    getAllProductsAsync();
  },
    // eslint-disable-next-line
    []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            products: products,
            showAllProducts: setAllProducts,
            showfilterProducts: setfilterProducts,
            findProductByWord: findProductByWord
          }}>
          <ShopCartContext.Provider
            value={{
              purchaseList,
              addtoCart: addtoCart,
              total,
              updateQuantity: updateQuantity
            }}>
            <Header
              toggleShowPopover={toggleShowPopover}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 80,
                height: 'calc(100vh - 80px)',
              }}
            >
              <CategoryList />
              <ProductList products={products} />
            </div>
            <ShopCartPopover
              isOpen={showPopover}
            />
          </ShopCartContext.Provider>
        </ProductsContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
