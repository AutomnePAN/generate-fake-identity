import React, {Component} from 'react'
import faker from 'faker'
import './FakeId.css'

class FakeId extends Component{

    constructor(props){
        super(props)
        this.countryList = [
            'America',
            'United Kingdom',
            'France',
            'Italy',
            'Spain',
            'Brezil',
            'Chile',
            'Canada',
            'Singapour',
            'Auastralia',
            'New Zealand',
            'Belge',
            'Poland',
            'Greece',
            'Germany'
        ];

        this.colorList = [
            'red',
            'blue',
            'orange',
            'yellow',
            'green',
            'purple',
            'lemon',
            'pink'
        ];

        this.state = {
            name: faker.name.firstName() + " " + faker.name.lastName(),
            job: faker.name.jobTitle(),
            age: 25 + Math.floor(Math.random() * 15 + 1),
            phone: faker.phone.phoneNumber(),
            birthMonth: faker.date.month(),
            birthDate: Math.floor(Math.random() * 28 + 1),
            country: faker.random.arrayElement(this.countryList),
            avatar: faker.internet.avatar(),
            background_color: faker.random.arrayElement(this.colorList)
        }
        console.log(this.state);
        this.generateFaker = this.generateFaker.bind(this);
    }

    generateFaker(){
        this.setState(
            {
                name: faker.name.firstName() + " " + faker.name.lastName(),
                job: faker.name.jobTitle(),
                age: 25 + Math.floor(Math.random() * 15 + 1),
                phone: faker.phone.phoneNumber(),
                birthMonth: faker.date.month(),
                birthDate: Math.floor(Math.random() * 28 + 1),
                country: faker.random.arrayElement(this.countryList),
                avatar: faker.internet.avatar(),               
                background_color: faker.random.arrayElement(this.colorList)
            }
        )
    }

    render() {
        return (
            <div className={"FakeId " + `FakeId-${this.state.background_color}`}>
                <div className="container">
                    <div> Avatar </div>
                    <img className = "avatar" src = {this.state.avatar}/> 
                    <div> Name</div>
                    <div> {this.state.name}</div>
                    <div> Job </div>
                    <div> {this.state.job}</div>
                    <div> Age </div>
                    <div> {this.state.age}</div>
                    <div> Phone </div>
                    <div> {this.state.phone}</div>
                    <div> Mail </div>
                    <div> {this.state.name.toLowerCase().replace(" ", ".")
                            +"@" + `${ Math.random() > 0.5 ? 'gmail':'yahoo'}` +'.com'
                    }</div>
                    <div> Birth Day </div>
                    <div> {this.state.birthMonth + '-' + this.state.birthDate }</div>
                    <div> Birth Country</div>
                    <div> {this.state.country}</div>
                </div>
                <button onClick = {this.generateFaker}>Get Your Fake Identity!</button>
            </div>
        )
    }
}

export default FakeId