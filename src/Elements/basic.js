import react from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const LandingContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 0px;
  grid-template-rows: 72px 1fr;
  //justify-content: space-evenly;
  //flex-direction: column;
  //align-items: center;
  //justify-content: space-evenly;
  //padding-top: 32px;
  //padding-bottom: 88px;
  //position: relative;
  // border: 2px solid dodgerblue;
`;
const Logo = styled.img`
  //width: 160px;
  height: auto;
  padding-top: 32;
  margin: auto;
  //position: absolute;
  //margin: 32px auto;

  // border: 1px dotted orange;
`;

const Subheader = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #545454;
`;
const Header = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 36px;
  /* or 133% */

  letter-spacing: 0.02em;

  /* Primary/Black */

  color: #545454;
`;
const HeaderWrapper = styled.div`

`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props=>props.alignment ? props.alignment : "center"};
  padding: ${props=>props.padding ? props.padding : "0px"};
  margin-bottom: 75px;
  overflow: ${props=>!props.showOverflow ? "hidden" : "scroll"};
`
const FormWrapper = styled.form`
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
const Icon = styled(FontAwesomeIcon)``
const Row = styled.div`
display: flex;
width: 100%;
//grid-template-columns: repeat(${props=>props.columns} 1fr)
justify-content: center;
align-items: center;
`
const Label = styled.label`
    margin: 0;
    padding: 0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #545454;
`
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  //grid-template-rows: 1fr 1fr;
  height: ${props=>props.height ? props.height : "100%"};
  width: ${props=>props.width ? props.width : "clamp(300px, 100%, 400px)"};
    margin: auto;
  padding: 0 24px 16px 24px; 
` 
//const Input = styled.input``

export {LandingContainer, Logo, Subheader, Header, HeaderWrapper, ButtonWrapper, Wrapper, FormWrapper, Icon, Row, Label, Container}