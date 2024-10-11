



// import React, { useState, useEffect } from 'react';
// import './FoodMenu.css';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
// import FoodMenuCard from './FoodMenuCard';

// const searches = ['Fried Chicken', 'Hassan Mathar', 'Caesar Salad', 'Pasta Primavera', 'Vegetable Biriyani', 'Chicken Noodles', 'Beef Tacos', 'Greek Salad'];
// const foodItems = [
    
// {
//   id: 1,
//   name: 'Margherita Pizza',
//   description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
//   image: require('../../assets/pizza.jpg'),
// },
// {
//   id: 2,
//   name: 'Caesar Salad',
//   description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.',
//   image: require('../../assets/Ceasersalad.jpg'),
// },
// {
//   id: 3,
//   name: 'Cheeseburger',
//   description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato on a brioche bun.',
//   image: require('../../assets/cheeseburger'),
// },
// {
//   id: 4,
//   name: 'Pasta Primavera',
//   description: 'Pasta with seasonal vegetables and a light garlic sauce.',
//   image: require('../../assets/pastaprimavera.jpg'),
// },
// {
//   id: 5,
//   name: 'Chicken Pasta Primavera',
//   description: 'Rich chocolate cake with a velvety chocolate ganache.',
//   image: require('../../assets/chickenpasta.jpg'),
// },
// {
//         id: 6,
//         name: 'Vegetable Biriyani',
//         description: 'Basmati rice, mix veggies, herbs & biryani spices.',
//         image: require('../../assets/vegbiriyani.jpg'),
//       },
//       {
//         id: 7,
//         name: 'Chicken Biriyani',
//         description: 'Fluffy basmati rice layered over tender & succulent pieces of meat.',
//         image: require('../../assets/chickenbiriyani.jpg'),
//       },
//       {
//         id: 8,
//         name: 'Beef Biriyani',
//         description: 'Fluffy, fragrant basmati rice and a delicious saucy beef.',
//         image: require('../../assets/beefbiriyani.webp'),
//       },
//       {
//         id: 9,
//         name: 'Lamb Biriyani',
//         description: 'Juicy, tender, flavourful mutton, fragrant rice and layers of flavour.',
//         image: require('../../assets/muttonbiriyani.jpg'),
//       },
//       {
//         id: 10,
//         name: 'Hyderabadi Chicken Biriyani',
//         description: 'Marinated chicken gets cooked in an abundance of oil mixed with ghee.',
//         image: require('../../assets/hyderabadichicken.jpg'),
//       },
//       {
//         id: 11,
//         name: 'Yemeni Chicken Mandhi',
//         description: 'Spiced succulent chicken with perfectly seasoned yellow rice.',
//         image: require('../../assets/arabicchicken.jpg'),
//       },
//       {
//         id: 12,
//         name: 'Chicken Noodles',
//         description: 'Stir-fried noodles mingling with onions, celery, cabbage, and succulent chicken.',
//         image: require('../../assets/chickennoodles.jfif'),
//       },
//       {
//         id: 13,
//         name: 'Vegetable Fried Rice',
//         description: 'Hearty mix of fresh vegetables, green onions, seasonings and spices.',
//         image: require('../../assets/vegfriedrice'),
//       },
//       {
//         id: 14,
//         name: 'Vegetable Stir Fry',
//         description: 'Mixed vegetables sautéed in a savory sauce served with rice.',
//         image: require('../../assets/vegstirfry'),
//       },
//       {
//         id: 15,
//         name: 'Fish and Chips',
//         description: 'Crispy battered fish served with fries and tartar sauce.',
//         image: require('../../assets/fishchips'),
//       },
//       {
//         id: 16,
//         name: 'Beef Tacos',
//         description: 'Spicy beef tacos topped with salsa and avocado.',
//         image: require('../../assets/beeftacos'),
//       },
//       {
//         id: 17,
//         name: 'Greek Salad',
//         description: 'Cucumber, tomato, olives, and feta cheese drizzled with olive oil.',
//         image: require('../../assets/greeksalad'),
//       },
//       {
//         id: 18,
//         name: 'Hassan Mathar',
//         description: 'Perfect blend of traditional shawarma and the comfort of a cheesy grilled sandwich.',
//         image: require('../../assets/hassanmathar'),
//       },
//       {
//         id: 19,
//         name: 'Chicken Club Sandwich',
//         description: 'Sandwich of toasted bread, sliced crumb fried chicken, crisp lettuce, avocado, cheese, fries and honey mustard sauce.',
//         image: require('../../assets/chickensandwich'),
//       },
//       {
//         id: 20,
//         name: 'Fried Chicken',
//         description: 'Fried chicken with a crunchy coating on the outside and juicy, tender chicken inside.',
//         image: require('../../assets/broast.avif'),
//       },
// ];

// const FoodMenu = ({ setOrders }) => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState(foodItems);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       const filtered = foodItems.filter(item =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredItems(filtered);
//     }, 300); // Debounce time of 300ms

//     return () => clearTimeout(timeoutId);
//   }, [searchQuery]);

//   const handleSelect = (item) => {
//     setOrders((prevOrders) => [...prevOrders, item]);
//     navigate('/order');
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleClearSearch = () => {
//     setSearchQuery('');
//     setFilteredItems(foodItems);
//   };

//   return (
//     <div>
//       <div className='previous-searches section'>
//         <h2>Previous Searches</h2>
//         <div className="previous-searches-container">
//           {searches.map((search, index) => (
//             <div key={index} style={{ animationDelay: index * 0.1 + 's' }} className='search-item'>
//               {search}
//             </div>
//           ))}
//           <div className='search-box'>
//             <input
//               type='text'
//               placeholder='search...'
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button className='btn' onClick={handleClearSearch}>
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//             <button className='btn' onClick={() => {}}>
//               <FontAwesomeIcon icon={faSearch} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className='menu-container'>
//         {filteredItems.map((foodmenu, index) => (
//           <FoodMenuCard key={index} foodmenu={foodmenu} onSelect={() => handleSelect(foodmenu)} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodMenu;




  
import React, { useState, useEffect, useContext } from 'react';
import './FoodMenu.css';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import FoodMenuCard from './FoodMenuCard';
import Modal from 'react-modal';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, addDoc } from 'firebase/firestore';

Modal.setAppElement('#root');

const searches = ['Fried Chicken', 'Hassan Mathar', 'Caesar Salad', 'Pasta Primavera', 'Vegetable Biriyani', 'Chicken Noodles', 'Beef Tacos', 'Greek Salad'];
const foodItems = [

{
  id: 1,
  name: 'Margherita Pizza',
  description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.',
  image: require('../../assets/pizza.jpg'),
},
{
  id: 2,
  name: 'Caesar Salad',
  description: 'Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.',
  image: require('../../assets/Ceasersalad.jpg'),
},
{
  id: 3,
  name: 'Cheeseburger',
  description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato on a brioche bun.',
  image: require('../../assets/cheeseburger'),
},
{
  id: 4,
  name: 'Pasta Primavera',
  description: 'Pasta with seasonal vegetables and a light garlic sauce.',
  image: require('../../assets/pastaprimavera.jpg'),
},
{
  id: 5,
  name: 'Chicken Pasta Primavera',
  description: 'Rich chocolate cake with a velvety chocolate ganache.',
  image: require('../../assets/chickenpasta.jpg'),
},
{
        id: 6,
        name: 'Vegetable Biriyani',
        description: 'Basmati rice, mix veggies, herbs & biryani spices.',
        image: require('../../assets/vegbiriyani.jpg'),
      },
      {
        id: 7,
        name: 'Chicken Biriyani',
        description: 'Fluffy basmati rice layered over tender & succulent pieces of meat.',
        image: require('../../assets/chickenbiriyani.jpg'),
      },
      {
        id: 8,
        name: 'Beef Biriyani',
        description: 'Fluffy, fragrant basmati rice and a delicious saucy beef.',
        image: require('../../assets/beefbiriyani.webp'),
      },
      {
        id: 9,
        name: 'Lamb Biriyani',
        description: 'Juicy, tender, flavourful mutton, fragrant rice and layers of flavour.',
        image: require('../../assets/muttonbiriyani.jpg'),
      },
      {
        id: 10,
        name: 'Hyderabadi Chicken Biriyani',
        description: 'Marinated chicken gets cooked in an abundance of oil mixed with ghee.',
        image: require('../../assets/hyderabadichicken.jpg'),
      },
      {
        id: 11,
        name: 'Yemeni Chicken Mandhi',
        description: 'Spiced succulent chicken with perfectly seasoned yellow rice.',
        image: require('../../assets/arabicchicken.jpg'),
      },
      {
        id: 12,
        name: 'Chicken Noodles',
        description: 'Stir-fried noodles mingling with onions, celery, cabbage, and succulent chicken.',
        image: require('../../assets/chickennoodles.jfif'),
      },
      {
        id: 13,
        name: 'Vegetable Fried Rice',
        description: 'Hearty mix of fresh vegetables, green onions, seasonings and spices.',
        image: require('../../assets/vegfriedrice'),
      },
      {
        id: 14,
        name: 'Vegetable Stir Fry',
        description: 'Mixed vegetables sautéed in a savory sauce served with rice.',
        image: require('../../assets/vegstirfry'),
      },
      {
        id: 15,
        name: 'Fish and Chips',
        description: 'Crispy battered fish served with fries and tartar sauce.',
        image: require('../../assets/fishchips'),
      },
      {
        id: 16,
        name: 'Beef Tacos',
        description: 'Spicy beef tacos topped with salsa and avocado.',
        image: require('../../assets/beeftacos'),
      },
      {
        id: 17,
        name: 'Greek Salad',
        description: 'Cucumber, tomato, olives, and feta cheese drizzled with olive oil.',
        image: require('../../assets/greeksalad'),
      },
      {
        id: 18,
        name: 'Hassan Mathar',
        description: 'Perfect blend of traditional shawarma and the comfort of a cheesy grilled sandwich.',
        image: require('../../assets/hassanmathar'),
      },
      {
        id: 19,
        name: 'Chicken Club Sandwich',
        description: 'Sandwich of toasted bread, sliced crumb fried chicken, crisp lettuce, avocado, cheese, fries and honey mustard sauce.',
        image: require('../../assets/chickensandwich'),
      },
      {
        id: 20,
        name: 'Fried Chicken',
        description: 'Fried chicken with a crunchy coating on the outside and juicy, tender chicken inside.',
        image: require('../../assets/broast.avif'),
      },
];

  
 



  const FoodMenu = () => {
    const { db, auth } = useContext(FirebaseContext);
    // const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(foodItems);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        const filtered = foodItems.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
      }, 300); // Debounce time of 300ms
  
      return () => clearTimeout(timeoutId);
    }, [searchQuery]);
  
    const handleSelect = (item) => {
      setSelectedOrder(item);
      setShowModal(true);
      setSuccessMessage('');
      setErrorMessage('');
    };
  
    const handleOrderSubmit = async () => {
      if (!auth.currentUser) {
        alert('User not authenticated');
        return;
      }
  
      try {
        await addDoc(collection(db, 'orders'), {
          orders: [selectedOrder],
          user: {
            uid: auth.currentUser.uid,
            name: auth.currentUser.displayName,
          },
          timestamp: new Date(),
        });
        setSuccessMessage('Order placed successfully!');
      } catch (error) {
        console.error('Error adding document: ', error);
        setErrorMessage('Failed to place order: ' + error.message);
      }
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleClearSearch = () => {
      setSearchQuery('');
      setFilteredItems(foodItems);
    };
  
    return (
      <div>
        <div className='previous-searches section'>
          <h2>Previous Searches</h2>
          <div className="previous-searches-container">
            {searches.map((search, index) => (
              <div key={index} style={{ animationDelay: index * 0.1 + 's' }} className='search-item'>
                {search}
              </div>
            ))}
            <div className='search-box'>
              <input
                type='text'
                placeholder='search...'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className='btn' onClick={handleClearSearch}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <button className='btn' onClick={() => {}}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
        <div className='menu-container'>
          {filteredItems.map((foodmenu, index) => (
            <FoodMenuCard key={index} foodmenu={foodmenu} onSelect={() => handleSelect(foodmenu)} />
          ))}
        </div>
  
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          contentLabel="Confirm Your Order"
          className="modal-content"
          
          style={{
            content: {
              backgroundColor: 'white', // Change this to your desired color
              padding: '20px',
              border: 'none',
              borderRadius: '8px',
            },
          }}
        >
          <h2>Confirm Your Order</h2>
          {selectedOrder && !successMessage && (
            <div>
              <strong>{selectedOrder.name}</strong>: {selectedOrder.description}
            </div>
          )}
          {successMessage && (
            <div className='success-message'>{successMessage}</div>
          )}
          <div className='buttons'>
            {!successMessage && (
              <button className="confirm-button" onClick={handleOrderSubmit}>Confirm Order</button>
            )}
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
  
        {errorMessage && (
          <div className='error-message'>{errorMessage}</div>
        )}
      </div>
    );
  };
  
  export default FoodMenu;

  