import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <main>
      <h2>Mailbox List</h2>
      <ul className="mailbox-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none' }}>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              <div className="mail-box" style={{ width: '100px', height: '100px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Box {mailbox._id}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MailboxList;