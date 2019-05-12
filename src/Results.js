import React from "react";

const Results = ({results, numOfResults, addToFavorites}) => {

    return (
        <div>
            <h3 className="numOfResults">{numOfResults}</h3>
            {results.map((result) => {
                return (
                    <div key={result.pageid} className="card">
                        <div className="card-header">
                            <a target="_blank" rel="noopener noreferrer"
                               href={`https://en.wikipedia.org/wiki/${result.title}`}>{result.title}</a>
                            <div className="wordCount">
                                <span className="badge badge-secondary">Words: {result.wordcount}</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="snippet" dangerouslySetInnerHTML={{__html: result.snippet}}/>
                            <button className="btn-sm btn-primary favorite"
                                    onClick={() => addToFavorites(result)}>Add To
                                Favorites
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Results


// const Results = props => (
// return (
//         <div></div>
// );

// class Results extends Component {
//
//     render() {
//         const {results, numOfResults, addToFavorites} = this.props;
//         return (
//             <div>
//                 <h3 className="numOfResults">{numOfResults}</h3>
//                 {results.map((result) => {
//                     return (
//                         <div key={result.pageid} className="card">
//                             <div className="card-header">
//                                 <a target="_blank" rel="noopener noreferrer"
//                                    href={`https://en.wikipedia.org/wiki/${result.title}`}>{result.title}</a>
//                                 <div className="wordCount">
//                                     <span className="badge badge-secondary">Words: {result.wordcount}</span>
//                                 </div>
//                             </div>
//                             <div className="card-body">
//                                 <p className="snippet" dangerouslySetInnerHTML={{__html: result.snippet}} />
//                                 <button className="btn-sm btn-primary favorite"
//                                         onClick={() => addToFavorites(result)}>Add To
//                                     Favorites
//                                 </button>
//                             </div>
//                         </div>
//                     )
//                 })
//                 }
//             </div>
//         )
//     }
// }
//
// export default Results