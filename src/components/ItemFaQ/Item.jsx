import { useState } from "react";
import { Card, Icon, Btn, TitleItem, Descr } from "./Item.styled";
import sprite from "../../img/olympus.svg";

const Item = ({title, descr}) => {
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
        <TitleItem>{title}</TitleItem>
        <Descr isOpen={isOpen}>{descr}</Descr>
      </Card>
    );
}

export default Item;