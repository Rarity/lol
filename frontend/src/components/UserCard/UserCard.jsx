import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';



class UserCard extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { userData } = this.props
    console.log(this.props)
    return (
      <Card>
        <Card.Content>
          <Image floated='right' size='tiny' src={`https://ddragon.leagueoflegends.com/cdn/8.8.2/img/profileicon/${userData.profileIconId}.png`} />
          <Card.Header>
            {userData.name}
          </Card.Header>
          <Card.Meta>
            Level: {userData.summonerLevel}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default UserCard;