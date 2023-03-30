import React from "react";
import styled from "styled-components";
import { Button, Space } from "antd";
import { Layout, MainImage } from "../components/common";
import tiger from "/tiger.jpg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_QUESTIONS } from "../api/mbti";

export default function MBTITest() {
  const navigate = useNavigate();
  const { error, data } = useQuery(GET_QUESTIONS);
  console.log("data", data);

  function clickHandler() {
    /** TODO: */
    navigate("/mbti/result");
  }

  if (error) {
    navigate("/404");
  }

  return (
    <Layout title="나의 웹툰 독자 유형 테스트" hasPrevious>
      <MainImage src={tiger} size={75} />
      <BtnContainer direction="vertical">
        <StyledButton onClick={clickHandler}>했어요!</StyledButton>
        <StyledButton onClick={clickHandler}>했어요!</StyledButton>
      </BtnContainer>
    </Layout>
  );
}

const BtnContainer = styled(Space)`
  line-height: 4rem;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 3rem;
`;
