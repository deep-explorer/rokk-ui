import { useAuth0 } from "@auth0/auth0-react";
import { ImageContainer } from "./ImageContainer";
import { InputContainer } from "./InputContainer";

export default () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <ImageContainer />
      <InputContainer />
    </div>
  );
};
