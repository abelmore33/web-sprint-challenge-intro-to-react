// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterStyle = styled.h2`
   {
    border-style: inset;
    border-color: rgb(253, 171, 47);
    color: #e28924;
    width: 500px;
    font-family: ;
    padding: 25px 0;
    text-shadow: 1px 1px 5px #fffffffa;
    font-size: 30px;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Character({ name }) {
  return (
    <CharacterContainer>
      <CharacterStyle
        onClick={(e) => {
          console.log(e.target.innerHTML);
        }}
      >
        {name}
      </CharacterStyle>
    </CharacterContainer>
  );
}

export default Character;
