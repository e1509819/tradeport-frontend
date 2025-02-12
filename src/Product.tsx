import { useForm } from 'react-hook-form';  
//import { useNavigate } from 'react-router-dom';
import { Product,SavedPost } from './posts/types';
import { useNavigate } from 'react-router-dom';
import { savePost } from './posts/savePost';
import { ValidationError } from './posts/ValidationError';


export function ProductMaster() {
  const {register, handleSubmit,formState:{errors}} = useForm<Product>();

  const navigate = useNavigate();

  

  const onSubmit = async (product: Product): Promise<void> => {
    console.log('Submitted details:', product);
    try{
      const body: SavedPost = await savePost(product);
      console.log('response:', body);
      //assertIsSavedPost(body);
      navigate(`thank-you`) 
    } catch (error) {
      console.error('Error saving post:', error);
      //navigate(`thank-you`);
    }
  };
  /*
  function assertIsSavedPost(post:SavedPost): asserts post is SavedPost {
    if (!('id' in post)) {
      throw new Error("The response doesn't contain product code");
    }
    
    if (post.Message !== 'Product created successfully') {
      throw new Error('Product is not Created');
    }
  }*/
  
  return (

    <div className="flex justify-center items-center min-h-screen bg-blue-400 overflow-auto">
      <div className="bg-white p-6 md:p-20 rounded-lg shadow-2xl w-full max-w-lg">
        <div className="flex flex-col justify-center space-y-5">
          <h2 className="font-serif text-xl font-medium text-center text-black">Product Master</h2>
          <p className="font-serif text-black-500 text-center">Add New Products</p>
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="text"
              id="productName"
              placeholder="Product Name"
              className="p-2 px-4 text-center border-2 border-gray-300 rounded-lg placeholder:text-xs md:placeholder:text-sm"
              {...register('productName', { required: 'You must enter Product Name' })}
            />
             </div>
            <ValidationError fieldError={errors.productName} />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <textarea
              id="description"
              className="p-2 border-2 border-gray-300 rounded-lg text-sm"
              placeholder="Description"
              {...register('description', { required: 'You must enter Description' })}
              
            ></textarea>
            </div>
          <ValidationError fieldError={errors.description} />
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <select
              id="category"
              className="p-2 border-2 border-gray-300 rounded-lg"
              {...register('category', { required: 'You must select a category' })}
            >
              <option value="">Select Category</option>
              <option value="1001">Electronics</option>
              <option value="1002">Fashion</option>
              <option value="1003">Home</option>
              <option value="1004">Beauty</option>
              <option value="1005">Sports</option>
            </select>
            </div>
            <ValidationError fieldError={errors.category} />
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input
                id="retailPrice"
                type="number"
                className="p-2 border-2 border-gray-300 rounded-lg"
                placeholder="Retail Price"
                {...register('retailPrice', { required: 'You must enter Retail Price' })}
              />
              </div>
              <ValidationError fieldError={errors.retailPrice} />
              
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <select
                id="retailcurrency"
                className="p-2 border-2 border-gray-300 rounded-lg"
                {...register('retailCurrency', { required: 'You must select a currency' })}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
              </div>
              <ValidationError fieldError={errors.retailCurrency} />
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="number"
                id="wholesaleprice"
                className="p-2 border-2 border-gray-300 rounded-lg"
                placeholder="Wholesale Price"
                {...register('wholesalePrice', { required: 'You must enter Wholesale Price' })}
              />
              </div>
              <ValidationError fieldError={errors.wholesalePrice} />
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <select
                id="wholesalecurrency"
                className="p-2 border-2 border-gray-300 rounded-lg"
                {...register('wholeSaleCurrency', { required: 'You must select a currency' })}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
              </div>
              <ValidationError fieldError={errors.wholeSaleCurrency} />
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="number"
              id="stock"
              className="p-2 border-2 border-gray-300 rounded-lg"
              placeholder="Stock"
              {...register('quantity', { required: 'You must enter Stock' })}
            />
            
            </div>
            <ValidationError fieldError={errors.quantity} />
            <div className="flex flex-col  md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <button type="submit" className="px-5 py-3 text-xs md:text-sm bg-blue-500 text-white border-gray-300 rounded-md">
              Create Product
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
}

