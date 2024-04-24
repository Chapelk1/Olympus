import {Menu} from './MobileMenu.styled'

const MobileMenu = (prop) => {
    
    return (
        <Menu isOpen={prop.isOpen}>
            {prop.children}
        </Menu>
    )
}

export default MobileMenu;