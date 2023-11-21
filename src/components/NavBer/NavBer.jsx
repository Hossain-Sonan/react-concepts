

const NavBer = () => {
    const routes = [
        {"path": "/home", "name": "Home", "id": 1},
        {"path": "/courses", "name": "Courses", "id": 2},
        {"path": "/profile", "name": "Profile", "id": 3},
        {"path": "/settings", "name": "Settings", "id": 4},
        {"path": "/contact", "name": "Contact", "id": 5}
      ];
      


    return (
        <nav>
            <ul>
            {
                routes.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
            }
            </ul>
            
        </nav>
    );
};

export default NavBer;