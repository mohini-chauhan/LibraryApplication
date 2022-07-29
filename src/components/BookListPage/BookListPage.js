import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BookListPage.module.scss";
import BookTemplate from "../BookTemplate/BookTemplate";
import "antd/dist/antd.min.css";
import { Input } from "antd";
const { Search } = Input;

const BookListPage = ({
  booklist,
  setCartCount,
  cartItems,
  setCartItems,
  quantity,
  setQuantity,
}) => {
  const [searchedBook, setSearchedBook] = useState([]);
  const [searchOn, setsearchOn] = useState(false);
  //function for searchinga book
  const onSearch = (searchedQuery) => {
    if (searchedQuery?.length > 0) {
      let searchedResult = booklist.filter((value) => {
        if (
          value.book.toLowerCase().indexOf(searchedQuery.toLowerCase()) !== -1
        ) {
          return true;
        }
        return false;
      });
      setSearchedBook(searchedResult);
      setsearchOn(true);
    } else {
      setSearchedBook([]);
      setsearchOn(false);
    }
  };
  return (
    <div className={styles.BookListPage}>
      <div className={styles.BookListPage__center}>
        <h2>Book List</h2>
        <Search
          placeholder="Search by title"
          onSearch={onSearch}
          enterButton
          className={styles.BookList__searchBar}
          className={styles.BookListPage__center__search}
        />
        <div className={styles.BookListPage__center__booksGrid}>
          {!searchOn
            ? booklist.map((book, index) => (
                <BookTemplate
                  key={index}
                  item={book}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setCartCount={setCartCount}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              ))
            : searchedBook.map((book, index) => (
                <BookTemplate
                  key={index}
                  item={book}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setCartCount={setCartCount}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

BookListPage.propTypes = {};

BookListPage.defaultProps = {};

export default BookListPage;
