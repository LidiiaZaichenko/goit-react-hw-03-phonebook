import { ContactItem } from 'components/ContactItem/ContactItem';


export const Contacts = ({ listContacts, onDelete }) => {
  return (
    <ul>
      {listContacts.map(listContact => (
        <li key={listContact.id}>
          <ContactItem contact ={listContact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
