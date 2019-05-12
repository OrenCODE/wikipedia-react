import React from "react"

const SearchForm = ({getResults, handleShow}) => (
    <form className="searchForm" onSubmit={getResults}>
        <input className="form-control" type="text" name="textSearch" placeholder="Type your search here..."/>
        <button className="btn btn-primary" type="submit">Search</button>
        <button className="btn btn-primary favorites" onClick={handleShow} type="button">Show Favorites</button>
    </form>);

export default SearchForm


// class SearchForm extends Component {
//
//     render() {
//         const {getResults} = this.props;
//
//         return (
//             <div>
//                 <form onSubmit={getResults}>
//                     <input type="text" name="textSearch" placeholder='your search'/>
//                     <button type="submit">Search</button>
//                     <button type="button">Show Favorites</button>
//                 </form>
//             </div>
//         )
//     }
// }
//
// export default SearchForm