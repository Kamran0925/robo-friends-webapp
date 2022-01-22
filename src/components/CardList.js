
import React from 'react'
import Card from './Card';
class CardList extends React.Component {
  
  render(){
    return (
      <div>
        {this.props.robots.map((robot, i) => 
          <Card key={i} id={robot.id} name={robot.name} email={robot.email}></Card>
        )}
      </div>
    );
  }
  
  
}

export default CardList;
