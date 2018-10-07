import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
        email:'',
        dogsName:'',
        age:'',
        weight:'',
        color:'',
        bathroom:'',
        breed:'',
        state:'',
        children:'',
        abuse:'',
        doesBreed:'',
        area:'',
        sleep:'',
        dogsInHome:'',
        adopted:'',
        deployed:'',
        animalInjury:'',
        animalServices:'',
        humanInjury:'',
        dogParks:'',
        integral:'',
        training:'',
        reproductive:'',
        gender:'',
        vaccinations:'',
        veterinarian:'',
        work:''
      },
      stateOptions:States,
      breedOptions:Breeds,
      ynOptions:['Yes', 'No']
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({newUser:{...prevState.newUser,[name]:value}
    }));
  }

  render(){
    return(
      <div className='container'>
        <form>
          <div className='row'>

            <div className='col-sm-3'></div>

            <div className='col-sm-9'>

              <Input type={'text'} title={'Your Email:'} name={'email'} value={this.state.newUser.email} placeholder={'Enter your Email Address'} handleChange={this.handleInput} />

              <Input type={'text'} title={"Dog's Name:"} name={'dogsName'} value={this.state.newUser.dogsName} placeholder={"Enter your dog's name"} handleChange={this.handleInput} />

              <Input type={'number'} title={'What age is this dog:'} name={'age'} value={this.state.newUser.age} placeholder={"Enter dog's age"} handleChange={this.handleInput} />

              <div className='form-group'>
                <label className='form-control-label'>What is the weight of this dog:</label>
                <div className='input-group'>
                  <input type='number' className='form-control' name='weight' value={this.state.newUser.weight} placeholder={"Enter dog's weight"} aria-label='Dogs Weight' aira-describeby='basic' onChange={this.handleInput} />
                  <div className='input-group-append'>
                    <span className='input-group-text' id='basic'>LBs</span>
                  </div>
                </div>
              </div>

              <Input type={'text'} title={'What color is this dog:'} name={'color'} value={this.state.newUser.color} placeholder={"Enter the dog's color"} handleChange={this.handleInput} />

              <Select title={'Choose a state:'} name={'state'} options={this.state.stateOptions} placeholder={"Select a state"} value={this.state.newUser.state} handleChange={this.handleInput} />

              <Select title={'Choose a breed:'} name={'breed'} options={this.state.breedOptions} placeholder={'Select a breed'} value={this.state.newUser.breed} handleChange={this.handleInput} />

              <Select title={'Where does your dog go for relief/potty most of the time'} name={'bathroom'} options={['Inside a completely fenced yard or kennel', 'Underground electric dog containment system', 'Outside loose in unfenced yard', 'Permanently tied/tethered outside','On tie line for 1 hour or less at a time', 'Leash Walked']} value={this.state.newUser.bathroom} placeholder={"Please Choose..."} handleChange={this.handleInput} />

              <Select title={'Are there children, under the age of 16 living with you the majority of the time:'} name={'children'} options={['Yes', 'No', 'Daycare or babysitting service in the home', 'Foster children in the home']} value={this.state.newUser.children} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Have any residents of your household been convicted of animal or domestic abuse in the last 5 years:'} name={'abuse'} options={this.state.ynOptions} value={this.state.newUser.abuse} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Do you breed this dog:'} name={'doesBreed'} options={['No', 'Stud only', '1 litter annually', '2 litters annually']} value={this.state.newUser.doesBreed} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Where does this dog sleep:'} name={'sleep'} options={['Inside home', 'Garage', 'Outside loose in fenced yard', 'Outside without any restraints', 'Permanent outside kennel', 'Tied out']} value={this.state.newUser.sleep} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'What type of area do you live in:'} name={'area'} options={['Country and/or your dog travels with you', 'City, Town, Suburb, Campus']} value={this.state.newUser.area} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Total number of dogs in your home:'} name={'dogsInHome'} options={['1', '2 to 4', '5 or more']} value={this.state.newUser.dogsInHome} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'How often do you take this dog to a veterinarian:'} name={'veterinarian'} options={['Annually and would treat for illness or injury', 'Only as required by law', 'Never']} value={this.state.newUser.veterinarian} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Is this dog current on licenses, vaccinations and other such requirements in your area:'} name={'vaccinations'} options={this.state.ynOptions} value={this.state.newUser.vaccinations} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Gender:'} name={'gender'} options={['Male', 'Female']} value={this.state.newUser.gender} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Reproductive Status:'} name={'reproductive'} options={['Intact', 'Neutered - Male', 'Spayed - Female']} value={this.state.newUser.reproductive} placeholder={'Please Choose'} handleChange={this.handleInput} />

              <Select title={'What type of training or work does this dog have:'} name={'training'} options={['None or basic', 'Intermediate', 'Advanced', 'Therapy Dog', 'Hunting, Gun, Sporting off leash, Farm, Hearding', 'Sled dog racing, Musing for hire, Freighting', 'War or Police service dog, Professionally trained Personal Protection or Professionally Trained Guard Dog']} value={this.state.newUser.training} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Do you take this dog to work regularly:'} name={'work'} options={this.state.ynOptions} value={this.state.newUser.work} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Is this dog involved or integral in your work as a Therapist, Teacher, Counselor, or other similary:'} name={'integral'} options={this.state.ynOptions} value={this.state.newUser.integral} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Do you take this dog to off leash dog parks:'} name={'dogParks'} options={this.state.ynOptions} value={this.state.newUser.dogParks} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Human Injury:'} name={'humanInjury'} options={['None', 'Injured a child - leaving minor bruising, scratch but no broken skin - one time', 'Injured an adult - leaving minor bruising, scratch but no broken skin - one time', 'Injured a child - breaking skin, no permanent scarring', 'Injured an adult - breaking skin, no permanent scarring', 'Injured a child - requiring medical attention and/or stitches', 'Injured an adult - requiring medical attention and/or stitches', 'Injured a child more than once', 'Injured an adult more than once']} value={this.state.newUser.humanInjury} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Has this dog ever injured another animal:'} name={'animalInjury'} options={['None', 'Injured another animal', 'Killed another animal', 'Injured more than one animal', 'Killed more than one animal']} value={this.state.newUser.animalInjury} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Has this dog ever been involved with animal services:'} name={'animalServices'} options={['Never', 'Once for breaking the law - no injuries', 'Confiscated and/or fines were issued', 'Been labled dangerous or vicious']} value={this.state.newUser.animalServices} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Is this dog in a foster arrangement where the owner has been deployed:'} name={'deployed'} options={this.state.ynOptions} value={this.state.newUser.deployed} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Select title={'Is this dog in your home with the intent that he/she will be adopted:'} name={'adopted'} options={this.state.ynOptions} value={this.state.newUser.adopted} placeholder={'Please Choose...'} handleChange={this.handleInput} />

              <Link to={'/Rater'}>
                <Button type={'primary'} title={'Continue'}></Button>
              </Link>

            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default FormPage;
