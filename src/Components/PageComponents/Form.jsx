import React, {Component} from 'react';
import Input from '../FormComponents/Input';
import Select from '../FormComponents/Select';
import Button from '../FormComponents/Button';
import States from '../Containers/States';
import Breeds from '../Containers/Breeds';

class FormPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      newUser:{
        name:'',
        age:'',
        gender:'',
        skills:[],
        breed:'',
        about:''
      },
      genderOptions:States,
      breedOptions:Breeds,
      skillOptions:['Programing', 'Sex', 'Stealing']
    }
    this.handleFullName = this.handleFullName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleFullName(e){
    let value = e.target.value;
    this.setState(prevState => ({newUser:
    {...prevState.newUser, name:value}
  }),() => console.log(this.state.newUser));
  }
  handleAge(e){
    let value = e.target.value;
    this.setState(prevState => ({newUser:{...prevState.newUser, age:value}
    }),() => console.log(this.state.newUser));
  }
  handleInput(e){
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser: {...prevState.newUser, [name]:value}
    }),() => console.log(this.state.newUser));
  }
  render(){
    return(
      <div className='container'>
        <form>
          <Input type={'text'} title={'Full Name'} name={'name'} value={this.state.newUser.name} placeholder={'Enter your naem'} handleChange={this.handleInput} />
          <Input type={'number'} title={'Age'} value={this.state.newUser.age} placeholder={'Enter your age'} handleChange={this.handleAge} />
          <Select title={'Gender'} name={'gender'} options={this.state.genderOptions} value={this.state.newUser.gender} placeholder={'Select Gender'} handleChange={this.handleInput} />
          <Select title={'Breed'} name={'breed'} options={this.state.breedOptions} value={this.state.newUser.breed} placeholder={'Select Breed'} handleChange={this.handleInput} />
          <Button type={'secondary'} title={'Continue'}/>
        </form>
      </div>

    )
  }
}

export default FormPage;
