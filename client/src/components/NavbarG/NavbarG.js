import React,{useState} from 'react';
import './styles.scss';
import Logo from './assets/logo-foody.svg';
import iconAvatar from './assets/img-avatar.svg';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
const NavbarG = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="navbar">
            <Navbar color="light" light expand="md" className="container">
                <NavbarBrand href="/"><img src={Logo} alt="logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Giới Thiệu</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#">Đặt Món</NavLink>
                    </NavItem>  
                    <NavItem>
                    <NavLink href="#">Giỏ Hàng</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Nguyễn Thanh Thiên <img src={iconAvatar} alt="avatar"/> </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarG;