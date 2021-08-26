import React from 'react';

import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class PersonList extends React.Component {
  
  constructor(props){
	  super(props);
	  this.state = {
		ListRepo: []
	  }
	  this.handleSubmit.bind(this);
  }
  
	async handleSubmit(e) {
           e.preventDefault();
		   console.log(e.target.githubUser.value);
           
    }
  callingGithub() {
    axios.get(`https://api.github.com/users/1wasilah1/repos`)
      .then(res => {
        const ListRepo = res.data;
        this.setState({ ListRepo });
      })
  }

  render() {
    return (
             <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Cari</h3>

                <div className="form-group">
              
                    <input type="text" name="githubUser" className="form-control" placeholder="Enter Username" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Cari</button>
               
            </form>
    )
  }
}