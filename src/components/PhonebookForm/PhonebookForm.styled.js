import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  border-style: solid;
  border-color: black;
  padding: 10px;
`;
export const ErrMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;
