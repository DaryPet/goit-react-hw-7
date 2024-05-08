// import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import "./App.css";

export default function App() {
  return (
    <div>
      {/* <Layout> */}
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {/* </Layout> */}
    </div>
  );
}
