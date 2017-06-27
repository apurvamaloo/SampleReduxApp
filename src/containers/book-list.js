import React,{ Component } from 'react';
import {connect} from 'react-redux'
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{

    renderList()
    {
        var bookList=this.props.books;
        return bookList.map((book) =>
        {
            return (
                <li key={book.title} 
                className="list-group-item"
                onClick={()=>{this.props.selectBook(book)}}>
                {book.title}
                </li>
            )
        })
       
    }
    render()
    {
         return (
           
            <div  className="col-md-4">
                
                <ul>{this.renderList()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    return {
        books:state.books
    }
}

function mapDispatcherToProps(dispatch)
{
    return bindActionCreators({selectBook:selectBook},dispatch);
}
export default connect(mapStateToProps,mapDispatcherToProps)(BookList);