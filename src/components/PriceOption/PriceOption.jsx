import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-500 rounded-md flex flex-col p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='3xl text-center my-4 font-bold'>
                {name}</h4>
                <div className='ml-4 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                </div>
                <button className='bg-green-400 w-full font-bold mt-12 rounded-lg py-2 hover:bg-green-900'>Buy Now</button>
                
            
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;