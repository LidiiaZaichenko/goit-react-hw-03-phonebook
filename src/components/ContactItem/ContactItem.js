import { StyledBtn, StyledItem } from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <StyledItem>
      {name} : {number}
      <StyledBtn onClick={() => onDelete(id)}>Delete</StyledBtn>
    </StyledItem>
  );
};
