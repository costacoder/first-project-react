import styled from "styled-components"; //importando a biblioteca styked-componets

import Background from "../../assets/background-img.svg";
//iniciar componentes com letra maiúscula

export const Container = styled.div`
  //container principal
  background: url("${Background}");
  background-size: cover; //assim a imagem expande para todo espaço

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  gap: 40px;

  height: 100%;
`;

export const Image = styled.img`
  //imagem
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;

  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;

  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;
