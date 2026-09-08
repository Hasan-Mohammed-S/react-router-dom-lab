import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Owner:</label>
        <input
          id="boxOwner"
          type="text"
          placeholder="Box Owner's Name"
          value={boxOwner}
          onChange={(e) => setBoxOwner(e.target.value)}
          required
        />

        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;