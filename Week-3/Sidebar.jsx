import React from 'react'

const Sidebar = () => {

  const contactList = [
    "Kajal",
    "jill",
    "jack",
    "james",
    "john"
  ];
  return (
    <div className="sidebar">
      <h3>Contact List</h3>

      {contactList.map((contact, index) => (
        <div key={index}>
          {contact}
        </div>
      ))}
    </div>
  );
}
export default Sidebar
