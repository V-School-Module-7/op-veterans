import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import SponsorshipSelection from './SponsorshipSelection/SponsorshipSelection'
import {UserContext} from '../../context/UserProvider'
import {VendorContext} from '../../context/VendorProvider'
import {BoothSelection} from '../../pages/VendorView/BoothSelection'
import {Map} from '../../pages/VendorView/BoothSelection/Sections/Map'
import { BoothCreation } from './BoothCreation.js'

const VendorPageContainer = styled.div`
    box-sizing: border-box;
   width: 100%;
    height: 100%;
    //margin: auto;
    //position: relative;
    // border: 2px solid dodgerblue;
`

export default function Vendor() {
    const {user} = useContext(UserContext)
    const {vendor, matchVendor} = useContext(VendorContext)
    const [state, setState] = useState("register")
  
    const states = {
        REGISTER: "register",
        SPONSOR: "sponsor",
        SELECT: "select",
        FINALIZE: "finalize",
    }
    
    const changeState = newState=> {
        if (newState){
            setState(newState)
        }
        else {
            throw new Error(`${newState} is not a valid state`)
        }
    }
    return (
        <VendorPageContainer>
            <Header  />
            {state == states.REGISTER ?
                <RegistrationForm changeState={changeState} states={states} /> :
            state == states.SPONSOR ?
                <SponsorshipSelection changeState={changeState} states={states}/> :
            state == states.SELECT ?
               <BoothSelection />:
            null}
        </VendorPageContainer>
    )
}
