import {
  UsernameOuterBox,
  UsernameInnerCircle,
  Username,
  UsernameCircleContainer,
  Karma,
} from "./styles";

export const UsernameBox = ({ user }) => (
  <UsernameCircleContainer>
    <UsernameOuterBox>
      <UsernameInnerCircle />
    </UsernameOuterBox>
    <Username>{user.username}</Username>
    <Karma>Karma: {user.karma}</Karma>
  </UsernameCircleContainer>
);
