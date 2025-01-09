// src/App.jsx
import './App.css';
import Product from './Product';
import Mailbox from './Mailbox';
import BookList from './Booklist';
import Card from './Card';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

export default function App() {
  return (
    <div>
      {/* <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card> */}

      {/* <h1>Books of the week</h1>
      <BookList books={favouriteBooks} /> */}

      <Mailbox username="Ivan" />
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}
