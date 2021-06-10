import { ListContainer, ListItem, LiveFeedContainer } from "./styles";

export const KarmaLiveFeed = () => (
  <LiveFeedContainer>
    <ListContainer>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <ListItem key={i}>
            <div>
              <a href="/u/BlueBlindBox">u/BlueBlindBox</a> gained 1 karma!
            </div>
          </ListItem>
        ))}
    </ListContainer>
  </LiveFeedContainer>
);
