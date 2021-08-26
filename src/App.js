import React from 'react';

import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class ListRepo extends React.Component {
  
  constructor(props){
	  super(props);
	  this.state = {
		ListRepo: [],
		loading:false
	  }
	  this.handleSubmit.bind(this);
	  this.callingGithub.bind(this);
  }
  
	async handleSubmit(e) {
           e.preventDefault();
		   this.callingGithub(e.target.githubUser.value);

           
    }
	  async callingGithub(username) {
		axios.get(`https://api.github.com/users/${username}/repos`)
		  .then(res => {
			const ListRepo = res.data;
			this.setState({ ListRepo });
			this.setState({ loading:true });
		  }).catch(function(error){
			  
		  })
		  
	  }

  render() {
	if(this.state.loading){
		return (
		<div>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<h3>Cari</h3>
					<div className="form-group">
						<input type="text" name="githubUser" className="form-control" placeholder="Enter Username" />
					</div>
					<button type="submit" className="btn btn-primary btn-block">Cari</button>
				</form>
			 
			  <ul>{ this.state.ListRepo.map(ListRepo => <li>{ListRepo.name}</li>)}</ul>
		</div>
		)
	}else{
		
	  return (
		<div>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<h3>Cari</h3>
					<div className="form-group">
						<input type="text" name="githubUser" className="form-control" placeholder="Enter Username" />
					</div>
					<button type="submit" className="btn btn-primary btn-block">Cari</button>
				</form>
			 
			 {this.state.ListRepo=''?'':<p>Tidak ada Data</p>}
		</div>
		)

	}
	
  }
}