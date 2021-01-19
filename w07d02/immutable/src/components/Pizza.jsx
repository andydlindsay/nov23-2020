import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed'
  });

  // axios.post('/pizza', pizza);

  const updateCrust = (crustType) => {
    setPizza((prevPizza) => {
      return {...prevPizza, crust: crustType};
    });
  };

  const addTopping = () => {
    // insert the newTopping into the toppings array
    // toppings.push(newTopping) // don't do this
    // const newToppingArray = [...toppings, newTopping];
    // setToppings(newToppingArray);

    // setToppings((prevToppings) => {
    //   return [...prevToppings, newTopping];
    // });

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      };
    });

    // clear the value of newTopping
    setNewTopping('');
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h3>Crust type: {pizza.crust}</h3>
        <input 
          value={pizza.crust}
          onChange={(event) => updateCrust(event.target.value)}
        />
      </div>

      <input
        type="text"
        value={newTopping}
        onChange={(event) => { setNewTopping(event.target.value) }}
      />
      <button onClick={addTopping}>Add Topping</button>

      <h3>Toppings:</h3>
      { pizza.toppings.map((topping, index) => {
        return <h4 key={index}>{topping}</h4>;
      }) }
    </div>
  );
};

export default Pizza;
