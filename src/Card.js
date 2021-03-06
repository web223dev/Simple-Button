import React, { Component } from "react";
import sc, { css } from "styled-components";
import image_button1 from './images/tribunal-7610.png';
import image_button2 from './images/user_alien.png';
import image_button3 from './images/users_men_women.png';

const ButtonContainer = sc.div`
  padding: 60px 30px;
`;
const ButtonWrapper = sc.button`
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;

  ${(props) =>
      css`
          pointer-events: ${props.disabled ? "none" : "inherit"};
          color: ${props.disabled ? "white" : "white"};
          background: ${props.disabled && "gray"};
      `};

  &:hover {
    background: #fff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000;
  }

  &:not(:last-child){
    margin-right: 20px;
  }

  img{
    display: flex;
  }
  & img.size24 {
    width: 24px;
    height: 24px;
  }
`;

const TextButtonWrapper = sc(ButtonWrapper)`
  padding: 8px 12px;
`;

const ImageButtonWrapper = sc(ButtonWrapper)`
  padding: 0 0;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
`;

const Button = (props) => {
    console.log(typeof props.children);
    if (typeof props.children === "string")
        return (
            <TextButtonWrapper {...props}>{props.children}</TextButtonWrapper>
        );
    else if (props.children.type === "img")
        return (
            <ImageButtonWrapper {...props}>{props.children}</ImageButtonWrapper>
        );
    else throw new Error("error");
};

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPasswordVisible: false,
        };

        this.revealPassword = this.revealPassword.bind(this);
    }

    revealPassword() {
        this.setState({
            isPasswordVisible: !this.state.isPasswordVisible,
        });
    }

    render() {
        return (
            <ButtonContainer>
                <Button type="button">Enabled</Button>
                <Button disabled type="button">
                    Disabled
                </Button>

                <Button type="button">
                    <img
                        src={image_button1}
                        alt="32image_button"
                    />
                </Button>
                <Button type="button">
                    <img
                        className="size24"
                        src={image_button1}
                        alt="24image_button"
                    />
                </Button>
                <Button type="button">
                    <img
                        src={image_button2}
                        alt="32image_button"
                    />
                </Button>
                <Button type="button">
                    <img
                        className="size24"
                        src={image_button2}
                        alt="24image_button"
                    />
                </Button>
                <Button type="button">
                    <img
                        src={image_button3}
                        alt="32image_button"
                    />
                </Button>
                <Button type="button">
                    <img
                        className="size24"
                        src={image_button3}
                        alt="24image_button"
                    />
                </Button>
            </ButtonContainer>
        );
    }
}

export default Card;
