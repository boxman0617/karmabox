import { AvatarContainer, EmptyAvatar } from "./styles";

export const Avatar = ({ src }) => (
  <AvatarContainer>
    {Boolean(src) ? <img src={src} alt="Avatar Image" /> : <EmptyAvatar />}
  </AvatarContainer>
);
