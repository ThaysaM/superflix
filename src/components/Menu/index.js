import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { MenuWrapper } from './style';
import { ButtonLink  } from './style';
import { LogoImage } from './style';
import { Link } from 'react-router-dom';

function Menu (){
    return(
        <MenuWrapper>
            <Link to="/">
                <LogoImage src={Logo} alt="SuperFlix logo"></LogoImage>
            </Link>

            <Link to="/cadastro/video"> 
                <ButtonLink>
                    Novo vídeo
                </ButtonLink>
            </Link>
        </MenuWrapper>
    );
}

export default Menu;