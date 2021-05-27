import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.primary ? '#1890ff' : 'white')};
  color: ${props => (props.primary ? 'white' : '#1890ff')};
  display: ${props => (props.disabled ? 'none' : 'inline')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #1890ff;
  border-radius: 3px;
`;

export default Button;
