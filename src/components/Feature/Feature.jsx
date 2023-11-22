
import PropTypes from 'prop-types';
import { AiFillCaretRight } from "react-icons/ai";

const Feature = ({ feature }) => {

    return (
       
            <p className='flex items-center'> <AiFillCaretRight className='bg-green-500 mr-2'></AiFillCaretRight> {feature}</p>
            
        
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}


export default Feature;