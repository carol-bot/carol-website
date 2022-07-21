import React from "react";

function Book(props) {
    return (
        <button className="book-btn">{props.val}</button>
    );
}

function NewBook(props) {
    return (
        <button className="book-new-btn" onClick={props.onClick}>{props.val}</button>
    );
}

class BookBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: ["Welcome", "Death of a Salesman"],
            current: 0,
        };
    }

    renderBook(book) {
        return(
            <Book val={book} />
        );
    }

    makeNewBook() {
        this.setState({
            books: this.state.books.concat(["New Book"]),
            current: this.state.current++,
        });
    }

    render() {
        const bookList = this.state.books.map((book, index) => {
            return(
                <div className="book-item">
                    {this.renderBook(book)}
                </div>
            );
        });

        return(
            <div className="col-2 book-bar position-relative">
                <div className="row book-title">
                    <p className="text-center no-space">Books</p>
                </div>
                <div className="row book-item-box" style={{maxHeight: (window.innerHeight * 0.85)}}>
                    {bookList}
                </div>
                <div className="row book-new">
                    <NewBook val="+ New Book" onClick={() => this.makeNewBook()}/>
                </div>
            </div>
        );
    }
}

export default BookBar;
