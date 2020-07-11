import React from "react";
import style from './Setting.module.sass';
import Clip from "../../common/video/Clip";

import styled, {css} from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #06A4FF;
  color: #06A4FF;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #06A4FF;
    color: white;
  `}
`;


const Setting = (props) => {
   return (
      <div className={style.wrapperContent}>
         <Clip/>
         <h3>Sorry! Page in development.</h3>
         <Button primary>Styled Component</Button>
      </div>

   )
}

export default Setting;