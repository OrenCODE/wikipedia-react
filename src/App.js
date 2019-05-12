import React, {Component} from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import Favorites from './Favorites';
import './App.css';


const URL = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=';
const fields = '&format=json';

class App extends Component {
    constructor(props) {
        super(props);

        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);

        this.state = {
            results: [],
            favorites: [],
            lastSearch: undefined,
            show: false
        };
    }

    componentDidMount() {
        let mySavedFavs = JSON.parse(localStorage.getItem('Favorites'));
        if (mySavedFavs != null) {
            this.setState({
                favorites: mySavedFavs
            })
        }
    }

    getResults = async (e) => {
        e.preventDefault();
        const textSearch = e.target.elements.textSearch.value;
        const api_call = await fetch(`${URL}${textSearch}${fields}`);
        const response = await api_call.json();

        // console.log(response);

        if (!textSearch) {
            this.setState({
                results: [],
                error: 'no response submit yet'
            });

        } else {
            this.setState({
                lastSearch: textSearch,
                numOfResults: 'Results: ' + response.query.search.length,
                results: [...response.query.search],
                error: undefined
            });
        }
    };

    handleShow = () => {
        this.setState({show: true});
    };

    handleClose = () => {
        this.setState({show: false});
    };

    addToFavorites = (Favorite) => {
        let isExist = false;

        if (this.state.favorites === null) {
            this.setState({
                favorites: [...this.state.favorites, Favorite]
            });
        }
        if (this.state.favorites != null) {
            for (let i = 0; i < this.state.favorites.length; i++) {
                if (Favorite.pageid === this.state.favorites[i].pageid) {
                    isExist = true;
                }
            }
            if (isExist === true) {
                return alert('exists')
            } else {
                this.setState({
                    favorites: [...this.state.favorites, Favorite]
                });
            }
        }
        localStorage.setItem('Favorites', JSON.stringify([...this.state.favorites, Favorite]));
    };

    removeFromFavorites = (favId) => {

        for (let i = 0; i < this.state.favorites.length; i++) {
            if (this.state.favorites[i].pageid === favId) {
                this.state.favorites.splice(i, 1);
            }
        }
        let array = [...this.state.favorites];
        this.setState({
            favorites: array
        });

        let temp = JSON.stringify(array);
        localStorage.clear();
        localStorage.setItem('Favorites', temp);
    };


    render() {
        return (
            <div>
                <div className="container search">
                    <h3 className="text-center header">
                        Search Wikipedia
                    </h3>
                    <SearchForm getResults={this.getResults} handleShow={this.handleShow}/>
                </div>
                <div className="container">
                    <Results results={this.state.results} numOfResults={this.state.numOfResults}
                             addToFavorites={this.addToFavorites} lastSearch={this.state.lastSearch}/>
                    <Favorites stateFavorites={this.state.favorites} openModal={this.state.show}
                               handleClose={this.handleClose} removeFromFavorites={this.removeFromFavorites}/>
                </div>
            </div>
        );
    }
}

export default App;
