import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = (props) => {
  const [mailboxId, setMailboxId] = useState(props.mailboxes[0]?._id || 1);
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addLetter({
      mailboxId: Number(mailboxId),
      recipient,
      message,
    });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select Mailbox:</label>
        <select
          id="mailboxId"
          value={mailboxId}
          onChange={(e) => setMailboxId(e.target.value)}
        >
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Box {mailbox._id} ({mailbox.boxOwner})
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          id="recipient"
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;