import styled, { css } from 'react-emotion'
import { Link } from 'react-router-dom'

const Button = styled.button`
  /* height: 48px; */
  padding: 0.5em 1em;
  font-size: 1rem;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-self: flex-start;
  border: 0;
  outline: 0;
  background: rgb(28,36,128);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: .2s all ease-out;

  &:hover {
    background: rgb(20, 28, 102);
  }

 ${props => props.fillWhite ? css`
    background: rgb(255, 255, 255);
    color: rgb(26, 36, 128);
    &:hover {
      background: rgb(220, 220, 220);
    }` :
    null
  };

  border: ${props => props.border ? '1px solid white' : null};

  height: ${props => props.withHeight ? '48px' : null};

  margin-top: ${props => props.withHeight ? '2em' : null};

  width: ${props => props.full ? '100%' : 'auto'};
`

const ButtonFill = Button

// const ButtonLink = Button.withComponent(Link)

export { Button, ButtonFill }
