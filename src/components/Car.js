import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const Car = () => {
  //I am able to use function useParams
  //because I updated react-router-dom to 5.3.0
  //instead of using props.match.params.id
  const { id } = useParams();
  const car = cars.find((c) => c.id === +id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name}</h2>
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
