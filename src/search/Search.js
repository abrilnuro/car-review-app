import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          valueSearched: ""
        }

    }
      
    handleChange = (e) => {
        this.setState({
            valueSearched: e.target.value
        })
        console.log(e.target.value)
    }

    handleClick = () => {
        alert(this.state.valueSearched);
    }
      
    render() {
        return (
            <React.Fragment>
                <div class="container h-100 mt-5" style={{color: "red"}}>
                    <div class="row align-items-center h-100">
                        <div class="col-8 mx-auto mt-5">
                          <div class="jumbotron bg-light form-inline justify-content-center mt-5">
                                <Input type="text" id="filter" placeholder="Search a car" 
                                    className="form-control col-8" 
                                    onChange={this.handleChange}/>

                                <Button variant="contained" color="primary" onClick={this.handleClick}>
                                    <SearchRoundedIcon />
                                </Button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Search;