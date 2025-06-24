import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    if (this.props.robots.length === 0) {
      return (
        <div className="loading-container">
          <p
            style={{
              marginTop: "30px",
              fontSize: "22px",
              lineHeight: "2rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Oops! No robots found with this name. <br /> Please try another.
          </p>
        </div>
      );
    }

    return (
      <div>
        {this.props.robots.map((robot, i) => (
          <Card
            key={i}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          ></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
