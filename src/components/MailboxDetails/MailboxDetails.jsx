import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = props.letters.filter((letter) => (
    letter.mailboxId === Number(mailboxId)
  ));

  if (!selectedBox) {
    return <main><h2>Mailbox Not Found!</h2></main>;
  }

  return (
    <main>
      <h2>Mailbox {selectedBox._id}</h2>
      <p><strong>Box Owner:</strong> {selectedBox.boxOwner}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>

      <hr />
      <h3>Letters</h3>
      {selectedLetters.length === 0 ? (
        <p>No letters for this mailbox yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <p><strong>To:</strong> {letter.recipient}</p>
              <p><strong>Message:</strong> {letter.message}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MailboxDetails;