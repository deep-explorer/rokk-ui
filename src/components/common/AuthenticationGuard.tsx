import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AuthenticationGuard = ({
  component,
}: {
  component: React.FC<object>;
}) => {
  const Component = withAuthenticationRequired(component);
  return <Component />;
};
