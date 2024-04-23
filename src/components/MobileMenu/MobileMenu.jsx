import {Menu} from './MobileMenu.styled'

const MobileMenu = (prop) => {
    
    return (
        <Menu>
            {prop.children}
        </Menu>
    )
}

export default MobileMenu;