import { useState } from "react";
import { Card, Icon, Btn,} from "./Item.styled";
import sprite from "../../img/olympus.svg";

const Item = (prop) => {
    const [isOpen, setIsOpen] = useState(false)

    const cardToggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
      <Card isOpen={isOpen}>
        <Btn isOpen={isOpen} onClick={cardToggleOpen}>
          <Icon>
            <use href={sprite + "#icon-plus"}></use>
          </Icon>
        </Btn>
        {prop.children}
      </Card>
    );
}

export default Item;