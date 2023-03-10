import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story) => (
            <>
              <VerticalDividerWrapper key={story.id}>
                <SecondaryStory {...story} />
              </VerticalDividerWrapper>
            </>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OptionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OptionStoryDividerWrapper key={story.id}>
              <OpinionStory {...story} />
            </OptionStoryDividerWrapper>
          ))}
        </OptionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  row-gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story      secondary-stories"
      "advertisement   advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement     advertisement";
    grid-template-columns: 5fr 4fr 3fr;
    row-gap: revert;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStoryList = styled.div`
  display: grid;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const OptionStoryList = styled.div`
  display: grid;

  @media ${QUERIES.tabletOnly} {
    grid-auto-flow: column;
    gap: 32px;
  }
`;

const VerticalDividerWrapper = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const OptionStoryDividerWrapper = styled(VerticalDividerWrapper)`
  @media ${QUERIES.tabletOnly} {
    padding-bottom: 0;
    margin-bottom: 0;
    &:not(:last-of-type) {
      border-bottom: revert;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
