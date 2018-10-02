import React, {Component} from 'react';
import Input from '../FormComponents/Input';
import Select from '../FormComponents/Select';

class FormPage extends Component{
  constructor(props){
    super(props);

    this.state={
      newUser:{
        name:'',
        age:'',
        gender:'',
        skills:[],
        about:''
      },
      genderOptions:['Male', 'Female', 'Others'],
      skillOptions:['something', 'else', 'something']
    }
  }
}
