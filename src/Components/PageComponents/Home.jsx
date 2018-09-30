import React, {Component} from 'react';
import Button from '../FormComponents/Button';
import {Link} from 'react-router-dom';


class HomePage extends Component{
  render(){
    return(
      <div className='container'>
        <h1>Welcome</h1>
        <p>
          Every year in the United States more than 4.7 million people are bitten by dogs. Now you can protect yourself and your best friend with a <span className='title-name'>Canine Liability Insurance</span> Policy.
        </p>
        <Link to='/Quote'>
          <Button title={"Let's Get Started"} type={'primary'}></Button>
        </Link>
      </div>
    );
  }
};

export default HomePage;
