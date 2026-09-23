interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1>New portfolio message</h1>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>{message}</p>
    </div>
  );
};
