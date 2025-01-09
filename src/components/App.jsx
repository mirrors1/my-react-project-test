// src/App.jsx
import './App.css';
import Product from './Product';
import Mailbox from './Mailbox';
import BookList from './Booklist';
import Card from './Card';
import Alert from './Alert';
import UserMenu from './UserMenu';
import LoginButton from './LoginButton';
import FollowButton from './FollowButton';

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
      </Card>

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <Mailbox username="Ivan" />
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      /> */}
      <UserMenu name="Ivan" />
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <LoginButton />
      <UserMenu name="Dmitro" />
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <FollowButton />
      <UserMenu name="Denis" />
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </div>
  );
}
