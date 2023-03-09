import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  width: 250px;
  padding: 20px;
`;

const ListContent = styled.li`
  padding: 5px;
`;
function Details({ height, mass, hair_color, skin_color, birth_year, gender }) {
  return (
    <div>
      <ListContainer>
        <ListContent>Height: {height}</ListContent>
        <ListContent>Mass: {mass}</ListContent>
        <ListContent>Hair Color:{hair_color}</ListContent>
        <ListContent>Skin Color:{skin_color}</ListContent>
        <ListContent>Birth Year:{birth_year}</ListContent>
        <ListContent>Gender:{gender}</ListContent>
      </ListContainer>
    </div>
  );
}

export default Details;
