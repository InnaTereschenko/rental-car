
import { HeaderWrapper, Nav, NavItem } from "./Header.styled";


const Header = () => {
    return (
        <HeaderWrapper>
            <Nav >
                <NavItem to='/home'>Home</NavItem>
                <NavItem to='/catalog'>Catalog</NavItem>
<NavItem to='/favorites'>Favorites</NavItem>

            </Nav>
        </HeaderWrapper>
    )
}
export default Header;