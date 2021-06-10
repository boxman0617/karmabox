import styled, { css } from "styled-components";
import { rem } from "polished";
import media from "styled-media-query";

export const LiveFeedContainer = styled.div`
  display: flex;

  justify-content: center;
`;
export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${media.lessThan("small")`
    ${css`
      width: 90%;
    `}
  `}
  width: ${rem(420)};
`;
export const ListItem = styled.li(
  ({ theme }) => css`
    padding: ${rem(10)};

    border-radius: ${rem(5)};
    margin-bottom: ${rem(10)};
    &:last-child {
      margin-bottom: 0;
    }

    background-color: ${theme.colors.liveFeedBackground};
    box-shadow: ${rem(2)} ${rem(3)} ${rem(1)} rgba(0, 0, 0, 0.3);
  `
);
