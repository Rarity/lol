import React, { Component } from 'react';
import { Container, Grid, Header, Input, Button } from 'semantic-ui-react'
import UserCard from '../components/UserCard/UserCard'

import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      userData: {
      "profileIconId": 0,
      "name": "Noname",
      "summonerLevel": 0,
      "accountId": 0,
      "id": 0,
      "revisionDate": 0
      }

    }
  }

  getData = () => {
    const data = {
      "profileIconId": 3024,
      "name": "Boljedor",
      "summonerLevel": 67,
      "accountId": 28908143,
      "id": 24456996,
      "revisionDate": 1524687224000
    }
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    });
    return promise
      .then(
        result => data
      )
  }


  getMasteryData = () => {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    });
    return promise
      .then(
        result => data
      )
  }

  async getUserData() {
    console.log('start request')
    this.setState({loading: true})
    let data = {}
    try {
      data = await this.getData();
    } catch (err) {
      console.error(err)
    }
    this.setState({userData: data, loading: false})
    console.log(this.state)
  }

  clickHandler = () => {
    this.getUserData()
  }

  render() {
    let { userData, loading } = this.state
      return (
      <div className="App">
          <Grid container style ={{padding: '5em 0em'}} columns={3}>
            <Grid.Row>
              <Grid.Column floated="left" width={2}>
                <Header as="h1">Сундуки</Header>
              </Grid.Column>
              <Grid.Column floated="left" width={5}>
                <Input placeholder='Search...' />
                <Button primary onClick={this.clickHandler} disabled={loading}>Check</Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <UserCard userData={userData} loading={loading}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <div> xDD </div>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default App;
