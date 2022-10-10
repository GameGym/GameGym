import React from 'react';
import styled from 'styled-components';
import InputBox from '../../molecules/LoginBox/InputBox';
import Button from '../../atoms/Button/Button';
import Title from '../../atoms/Title/Title';

interface props {
  onInput_id: () => void;
  onInput_pw: () => void;
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
  width: 100%;
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

const LoginPanel = ({ onInput_id, onInput_pw }: props) => {
  return (
    <LoginPanelStyle>
      <Title label='Welcome to GG' />
      <LoginFormStyle>
        <InputBoxStyle>
          <InputBox
            htmlFor='username'
            text='Username'
            id='username'
            placeholder='아이디를 입력해주세요.'
            type='text'
            onInput={onInput_id}
          />
        </InputBoxStyle>
        <InputBoxStyle>
          <InputBox
            htmlFor='password'
            text='Password'
            id='password'
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            onInput={onInput_pw}
          />
        </InputBoxStyle>
        <Button label='Sign in' bgColor='black' textColor='white' large />
      </LoginFormStyle>
      <JoinTextWrap>
        <JoinExplainText>{"Don't have an account?"}</JoinExplainText>
        <JoinText href={'#'}>{'Join'}</JoinText>
      </JoinTextWrap>
    </LoginPanelStyle>
  );
};
export default LoginPanel;
