import React from "react";
import styled from "styled-components";
import NewsLetterImg from "../../../assets/svg/book-lover.svg";

const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(148, 147, 247);
  background: linear-gradient(
    217deg,
    rgba(148, 147, 247, 1) 0%,
    rgba(210, 194, 221, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const SideImage = () => {
  return (
    <SideImageContainer>
      <Image>
        <img src="https://i.ibb.co/xfV9svW/grocery.png" alt="" />
      </Image>
    </SideImageContainer>
  );
};

export default SideImage;
