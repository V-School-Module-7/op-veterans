import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from "../../context/AuthProvider";
import exitIcon from '../../assets/icons/exit-icon.svg'
import logo from '../../assets/images/vetfest-logo.png'
import userIcon from '../../assets/icons/avatar-icon.svg'


const HeaderContainer = styled.div`
    position: relative;
    height: 88px;
    // border: 1px dotted black;

    & > .exit-icon {
        position: absolute;
        top: 32px;
        left: 12px;
        width: 40px;
        // border: 1px dotted blue;
    }

    & > .header-logo {
        position: absolute;
        top: 32px;
        left: calc(50% - 160px/2);
        width: 160px;
        // border: 1px dotted orange;
    }

    & > .avatar-icon {
        position: absolute;
        top: 32px;
        right: 12px;
        width: 40px;
        // border: 1px dotted orange;
    }
`

export default function Header() {
	const { logout } = useContext(AuthContext);

    return (
        <HeaderContainer>
            <img src={exitIcon} alt={'Click to exit.'} className={'exit-icon'} onClick={logout} />
            <img src={logo} alt={'OP Veteran VetFest logo.'} className={'header-logo'} />
            <img src={userIcon} alt={'User is logged in.'} className={'avatar-icon'} />
        </HeaderContainer>
    )
}
