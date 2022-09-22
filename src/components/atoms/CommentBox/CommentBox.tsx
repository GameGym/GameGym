import styled, { css } from 'styled-components';

interface Props {}

const CommentBoxStyle = styled.textarea<Props>`
  resize: none;
  width: 440px;
  height: 120px;
  font-size: 18px;
  padding: 24px;
  border: 2px solid #000000;
  border-radius: 8px;
  font-family: Arial;
`;

const CommentBox = ({ ...props }: Props) => {
  return <CommentBoxStyle placeholder='Comment...' {...props} />;
};

export default CommentBox;
