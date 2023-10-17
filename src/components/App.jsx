import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { SearchBar } from './SearchBar/SearchBar';
import { Title } from './Title/Title';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const dubleContact = this.state.contacts.find(
      item => item.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (dubleContact) {
      alert(newContact.name + ' is already in contacts');
    }
    return this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  chengeContactFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Title title="Phonebook">
          <PhonebookForm onAdd={this.addContact} />
        </Title>

        <Title title="Contacts">
          <SearchBar
            filter={filter}
            onChengeContact={this.chengeContactFilter}
          />
          <Contacts
            listContacts={this.getVisibleContacts()}
            onDelete={this.deleteContact}
          />
        </Title>
      </>
    );
  }
}
