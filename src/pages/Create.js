import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Wrapper from "../components/PageWrapper";
import Button from "../components/Button";
import api from '../utils/api';

export default function Create() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    makeQuiz();
  }, []);

  const makeQuiz = () => {
    // const quiz = {

    // }
    api.createQuiz().then(res => {
      console.log('res: ', res);
    }).catch(error => console.log('API Error: ', error));
  }

  const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const Header = styled.h3``;

  return (
    <Wrapper>
      <FormContainer>
        <Header>Enter Game Title</Header>
        <Input 
          id='game-title-input'
          name='title'
          placeholder='Title'
          label='Title'
          value={title}
        />
        <Input 
          id='game-question-input'
          placeholder='Question'
          label='Question'
        />
        <Input 
          id='game-answer-input'
          placeholder='Answer'
          label='Answer'
        />
        <Button>Submit</Button>
      </FormContainer>
    </Wrapper>
  );
}
