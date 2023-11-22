import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from "../Link/Link";
import { useState } from 'react';



const NavBer = () => {
    const [open, setOpen] = useState(true);
    
    const routes = [
        {"path": "/home", "name": "Home", "id": 1},
        {"path": "/courses", "name": "Courses", "id": 2},
        {"path": "/profile", "name": "Profile", "id": 3},
        {"path": "/settings", "name": "Settings", "id": 4},
        {"path": "/contact", "name": "Contact", "id": 5}
      ];
      


    return (
        <nav className='bg-yellow-200 p-6'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ?  
                    <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu></AiOutlineMenu>
                }
            
            
            </div>
            <ul className={`md:flex duration-1000 absolute md: static
            ${open ? "top-12": "-top-60"}
             bg-yellow-200 px-6 shadow-lg`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
            
        </nav>
    );
};

export default NavBer;