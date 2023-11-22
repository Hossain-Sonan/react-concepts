import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 29.99,
      "features": [
        "Access to cardio equipment",
        "Basic fitness classes",
        "Locker room access"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 49.99,
      "features": [
        "Access to all gym equipment",
        "Full range of fitness classes",
        "Personal trainer consultation",
        "Locker and towel service"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 79.99,
      "features": [
        "Priority access to all facilities",
        "Unlimited personal training sessions",
        "Exclusive fitness classes",
        "Sauna and spa access",
        "Nutritional counseling"
      ]
    }
  ];
  
  
  
  
  
      
    return (
        <div className="m-12">
          <h2 className="text-3xl">Best Prices in the town</h2>
          <div className="grid md:grid-cols-3 gap-6">
          {
            priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
          }
          </div>
            
        </div>
    );
};

export default PriceOptions;