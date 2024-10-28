import { useState } from 'react';

export default function ContactPage() {

  const [msgSubject, setMsgSubject] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonStatus, setButtonStatus] = useState('button is-primary');

  // helper text is conditionally shown below the submit button
  const [helperText, setHelperText] = useState('Success!');
  const [helperTextFormat, setHelperTextFormat] = useState('help is-hidden');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputField = target.name;
    const inputValue = target.value;

    // When the user starts typing in any field, the button is set back to Submit, and helper text is hidden
    setButtonText('Submit');
    setButtonStatus('button is-primary');
    setHelperTextFormat('help is-hidden');

    switch (inputField) {
      case 'subject':
        setMsgSubject(inputValue)
        break;
      case 'name':
        setMsgName(inputValue)
        break;
      case 'body':
        setMsgBody(inputValue)
        break;
      case 'email':
        setMsgEmail(inputValue)
        break;
      default:
        break;
    }
  };

  // Handles changing the submit button text and color, and helper text, color, and visibility 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (msgBody === '' || msgEmail === '' || msgName === '' || msgSubject === '') {
      setButtonText('Submit');
      setButtonStatus('button is-danger');
      setHelperText('Please fill out all fields.');
      setHelperTextFormat('help is-danger');
    } else {
      setButtonText('Thanks!');
      setButtonStatus('button is-success');
      setHelperText('This is still a work in progress, and nothing was actually recorded, but thanks for playing!');
      setHelperTextFormat('help is-warning');

      setMsgBody('');
      setMsgEmail('');
      setMsgName('');
      setMsgSubject('');
    }

  }

  return (
    <div className="container">

      <h1 className="title tag is-dark">
        CONTACT
      </h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input
              name="subject"
              value={msgSubject}
              onChange={handleInputChange}
              className="input"
              type="text"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              name="body"
              value={msgBody}
              onChange={handleInputChange}
              className="textarea"
              placeholder="Message">
            </textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              value={msgName}
              onChange={handleInputChange}
              className="input"
              type="text"
              placeholder="Name"
            />
            <p className="help">Please provide your full name.</p>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="email"
              value={msgEmail}
              onChange={handleInputChange}
              className="input"
              type="email"
              placeholder="e.g. moniker@email.com"
            />
          </div>
        </div>
        <div className="control">
          <button className={buttonStatus} type="submit">{buttonText}</button>
          <p className={helperTextFormat}>
            {helperText}
          </p>
        </div>
      </form>

    </div>
  );
}
