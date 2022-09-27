import React from 'react';
import styled from 'styled-components';
import InputBox from '../../molecules/LoginBox/InputBox';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

interface props {
  //제목
  label_title?: string;
  //아이디 input창
  htmlFor_id: string;
  text_id: string;
  id_id: string;
  placeholder_id: string;
  type_id: 'text' | 'password';
  onInput_id: () => void;
  //비밀번호 input창
  htmlFor_pw: string;
  text_pw: string;
  id_pw: string;
  placeholder_pw: string;
  type_pw: 'text' | 'password';
  onInput_pw: () => void;
  //로그인 버튼
  label_button?: string;
  bgColor: string;
  textColor: string;
  large?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  //회원가입
  label_explain?: string;
  label_join?: string;
  href_join?: string;
}

//전체 화면
const LoginPanelStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

//아이디, 비밀번호, 로그인 버튼 Form
const LoginFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  Button {
    margin-top: 14px;
  }
`;

//input창 크기 조정
const InputBoxStyle = styled.div`
  width: 94%;
  margin-left: -20px;
`;

//회원가입 TextWrap
const JoinTextWrap = styled.div``;

//회원가입 설명 Text
const JoinExplainText = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: #707070;
  margin-right: 3px;
`;

//회원가입 Link
const JoinText = styled.a`
  font-size: 16px;
  line-height: 24px;
  color: #2f66f6;
  margin-left: 3px;
  text-decoration: none;
`;

const LoginPanel = ({
  label_title,
  htmlFor_id,
  text_id,
  id_id,
  placeholder_id,
  type_id,
  onInput_id,
  htmlFor_pw,
  text_pw,
  id_pw,
  placeholder_pw,
  type_pw,
  onInput_pw,
  label_button,
  bgColor,
  textColor,
  large,
  onClick,
  label_explain,
  label_join,
  href_join,
}: props) => {
  return (
    <LoginPanelStyle>
      <Title label={label_title} />
      <LoginFormStyle>
        <InputBoxStyle>
          <InputBox
            htmlFor={htmlFor_id}
            text={text_id}
            id={id_id}
            placeholder={placeholder_id}
            type={type_id}
            onInput={onInput_id}
          />
        </InputBoxStyle>
        <InputBoxStyle>
          <InputBox
            htmlFor={htmlFor_pw}
            text={text_pw}
            id={id_pw}
            placeholder={placeholder_pw}
            type={type_pw}
            onInput={onInput_pw}
          />
        </InputBoxStyle>
        <Button
          label={label_button}
          bgColor={bgColor}
          textColor={textColor}
          large={large}
          onClick={onClick}
        />
      </LoginFormStyle>
      <JoinTextWrap>
        <JoinExplainText>{label_explain}</JoinExplainText>
        <JoinText href={href_join}>{label_join}</JoinText>
      </JoinTextWrap>
    </LoginPanelStyle>
  );
};
export default LoginPanel;
