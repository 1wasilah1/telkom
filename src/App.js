import React from 'react';

import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/1wasilah1/repos`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
             <form>
                <h3>Cari</h3>

                <div className="form-group">
              
                    <input type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Cari</button>
               
            </form>
    )
  }
}