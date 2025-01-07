export default function Mailbox({
  username = 'Noname',
  messages = ['text1', 'text2'],
}) {
  return (
    <div>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
}
