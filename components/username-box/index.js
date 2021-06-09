import {
  UsernameOuterBox,
  UsernameInnerCircle,
  Username,
  UsernameCircleContainer,
  Karma,
} from "./styles";

export const UsernameBox = ({ user: { karma, username } }) => (
  <UsernameCircleContainer>
    <UsernameOuterBox>
      <UsernameInnerCircle />
    </UsernameOuterBox>
    <Username>{username}</Username>
    <Karma>Karma: {karma}</Karma>
  </UsernameCircleContainer>
);
