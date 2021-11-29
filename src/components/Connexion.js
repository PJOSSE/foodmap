import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react';

// class Connexion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       identifiant: '',
//       password:''
//     };

//     this.handleChangeIdentifiant = this.handleChangeIdentifiant.bind(this);
//     this.handleChangePassword = this.handleChangePassword.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChangeIdentifiant(event) {
//     this.setState({identifiant: event.target.value});
//   }
//   handleChangePassword(event){
//     this.setState({password:event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Le nom a été soumis : ' + this.state.identifiant);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>

//         <h1>PAGE TEST A NE PAS TOUCHER !!</h1>
//         <p> Bonjour vous êtes sur la page de connexion </p>
//         <p> Donnez votre identifiant et votre mot de passe, 
//         on s'occupe du reste ;) </p>
        
//         <label> Identifiant : <input type="identifiant" value={this.state.identifiant} onChange={this.handleChangeIdentifiant} />
//         </label>
//         <label> Mot de passe : <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
//         </label>
//         <input type="submit" value="Envoyer" />
//         <p> Si c'est votre première visite, <a target="_blank" rel="noreferrer" href="/Connexion/Test">cette page-là est la bonne</a></p>
//         <p> Quelque soit votre choix, à bientôt sur notre site :)</p>
//         <img src={logo} alt='Logo' className='bav-logo'/>
//       </form>
//     );
//   }
// }

// export default Connexion;