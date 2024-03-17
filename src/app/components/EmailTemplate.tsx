import * as React from "react";

interface EmailTemplateProps {
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  subject,
  message,
}) => (
  <div>
    <h1>{subject}</h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
