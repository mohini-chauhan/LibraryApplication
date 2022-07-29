import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.lazy";
import LoginPage from "./components/LoginPage/LoginPage.lazy";
import CartPage from "./components/CartPage/CartPage.lazy";
import { useSessionStorage } from "./components/SessionHook";
import "./App.scss";

const booklist = [
  {
    id: 1,
    book: "Micro electronics",
    author: "Jacob Millman",
    edition: "6th",
    price: 890,
  },
  {
    id: 2,
    book: "Network Analysis",
    author: "Sedra Smith",
    edition: "4th",
    price: 800,
  },
  {
    id: 3,
    book: "Control system",
    author: "I.J Nagrath",
    edition: "6th",
    price: 670,
  },
  {
    id: 4,
    book: "Basic electronics",
    author: "J.B Gupta",
    edition: "6th",
    price: 400,
  },
  {
    id: 5,
    book: "Power electronics",
    author: "Md.Rashid",
    edition: "3rd",
    price: 700,
  },
  {
    id: 6,
    book: "Analog Electronics",
    author: "J.B gupta",
    edition: "6th",
    price: 670,
  },
  {
    id: 7,
    book: "Optical network",
    author: "Debashish Dutta",
    edition: "6th",
    price: 400,
  },
  {
    id: 8,
    book: "Mobile Communication",
    author: "Jochen Schiller",
    edition: "2nd",
    price: 700,
  },
  {
    id: 9,
    book: "Electrical Engineering",
    author: "Charles.Gross",
    edition: "6th",
    price: 400,
  },
  {
    id: 10,
    book: "Digital Electronics",
    author: "A.K Maini",
    edition: "3rd",
    price: 700,
  },
];

function App() {
  const [quantity, setQuantity] = useSessionStorage("quantity", {});
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="home"
            element={
              <HomePage
                booklist={booklist}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="cart"
            element={
              <CartPage
                booklist={booklist}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
