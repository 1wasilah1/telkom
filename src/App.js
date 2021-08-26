import React from 'react';

import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default class ListRepo extends React.Component {
  
  constructor(props){
	  super(props);
	  this.state = {
		ListRepo: [],
		loading:false,
		countRepo:0
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
			let cRepo = 0;
			if(ListRepo.length<1)
				cRepo = 1;
			else
				cRepo =2;
			this.setState({ ListRepo });
			this.setState({ loading:true });
			this.setState({ countRepo:cRepo });
		  }).catch(function(error){
			  alert("Username Github Tidak Ditemukan");
		  })
	  }

  render() {
	const Results = () => (
	  <div id="results" className="search-results">
		{this.state.loading?<ViewResults/>:<NothingResults/>}
	  </div>
	)
	const ViewResults = () => (
		<ul>{ this.state.ListRepo.map(ListRepo => <li>{ListRepo.name}</li>)}</ul>
	)
	const NothingResults = () => (
		<p>Silahkan Melakukan Pencaharian Akun Github</p>
	)
		
	 return (
		<div>
				 <form onSubmit={e => this.handleSubmit(e)}>
					<h3>Cari</h3>
					<div className="form-group">
						<input type="text" name="githubUser" className="form-control" placeholder="Enter Username" />
					</div>
					<button type="submit" className="btn btn-primary btn-block">Cari</button>
				</form>
			 
			 
			 {this.state.countRepo==1?'User ini tidak memiliki repository':<Results/>}
		</div>
	)
  }
}