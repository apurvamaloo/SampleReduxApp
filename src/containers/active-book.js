import React,{Component} from 'react';
import {connect} from 'react-redux';

class ActiveBook extends Component{
    render ()
    {
        if(! this.props.activeBook)
        {
            return (<div>Currently No book is selected..Please select a book to proceed further...........</div>)
        }

        return <div  className="col-md-4" >BookDeatils{this.props.activeBook.title}</div>
    }
}
function mapStateToProps(state)
{
    return{
        activeBook:state.activeBook
    }
}

export default connect(mapStateToProps)(ActiveBook);