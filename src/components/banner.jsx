import RickMorty from "../images/banner.jpg";
import {
  BannerBase,
  Image,
  InfoLayout,
  InfoLayoutMobile,
  SeasonLayout,
  Span,
} from "./style";

export const Banner = () => (
  <BannerBase>
    <Image src={RickMorty} />
    <InfoLayoutMobile>
      <h3>Are you ready to board this intergalactic travel?</h3>
      <Span>
        Join the misadventures of the scientist Rick and his overly nervous
        grandson Morty, in their domestic family life and intergalactic travels.
      </Span>
    </InfoLayoutMobile>
    <InfoLayout>
      <h2>Are you ready to board this intergalactic travel?</h2>
      <Span>
        Join the misadventures of the scientist Rick and his overly nervous
        grandson Morty, in their domestic family life and intergalactic travels.
      </Span>
      <h4>Creators:</h4>
      <Span> Dan Harmon, Justin Roiland</Span>
      <h4>Genre:</h4>
      <Span> Animation, Aventure, Comedy</Span>
      <h4>Debut year:</h4>
      <Span> 2013</Span>
    </InfoLayout>
    <SeasonLayout>
      <h3>SEASON 6 PREMIERE</h3>
      <Span>September 4, 2022</Span>
    </SeasonLayout>
  </BannerBase>
);
