import React, { Component } from 'react';
import { Card, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';



class UserCard extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { userData, loading } = this.props
    console.log(this.props)
    return (
      <Card>
        <Dimmer.Dimmable as={Segment} dimmed={loading}>
          <Dimmer active={loading} inverted>
            <Loader>Loading</Loader>
          </Dimmer>
          <Card.Content>
            <Image floated='right' size='tiny' src={`https://ddragon.leagueoflegends.com/cdn/8.8.2/img/profileicon/${userData.profileIconId}.png`} />
            <Card.Header>
              {userData.name}
            </Card.Header>
            <Card.Meta>
              Level: {userData.summonerLevel}
            </Card.Meta>
          </Card.Content>
        </Dimmer.Dimmable>
      </Card>
    )
  }
}

export default UserCard;