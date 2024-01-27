import React,{useState} from 'react'
import Footer from './Footer'
import SellerNavbar from './sellerNavbar'
import SellerProduct from './SellerProduct'
import AddProduct from './AddProduct'
function Seller() {
    const [products, setProducts] = useState(true);
  return (
    <div className='flex flex-col min-h-screen'>
      <SellerNavbar products={products} setProducts={setProducts} />
      <div className="m-auto w-[98%] bg-white p-1 my-2 flex-grow">
        {products ? <SellerProduct /> : <AddProduct />}
      </div>
      <Footer />
    </div>
  );
}

export default Seller