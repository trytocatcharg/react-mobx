import { observer } from 'mobx-react';
import appStore
 from '../../mobx/store';
import ProductCard from './components/ProductCard';
import { Box } from '@mui/material';

 function Products() {

  return (
    <>
    <section style={ { display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <button onClick={() => appStore.addProduct()}>Add Random product</button>
        <button onClick={() => appStore.removeProduct()}>Remove product</button>
    </section>

        <Box
          sx={{
            width: '90vw',
            height: '70vh',
            gap: '15px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
            {
            appStore.products.map(p => 
              <ProductCard key={p.name} {...p}  ></ProductCard>
            )
          }
          </Box>

    </>
  )
}

export default observer(Products);