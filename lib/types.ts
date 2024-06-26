// #region Contentful Types
type ContentfulSys = {
  id: string;
  type: string;
  linkType: string;
}

type ContentfulFile = {
  contentType: string;
  details: {
    image: {
      height: number;
      width: number;
    }
    size: number;
  }
  fileName: string;
  url: string;
}

type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: ContentfulFile;
  }
  metaData: {
    tags: string[]
  }
  sys: {
    createdAt: string;
    environment: {
      sys: ContentfulSys;
    }
  }
  id: string;
  locale: string;
  revision: number;
  space: {
    sys: ContentfulSys;
    type: string;
    updatedAt: string;
  }
}
// #endregion

// #region Ryan Records Types
type Talent = {
  name: string;
  location: string;
  headshot: ContentfulImage;
  biography?: string;
}

type Release = {
  title: string;
  spotifyLink?: string;
  beatportLink?: string;
  coverArt: ContentfulImage;
  artist: string;
}

type SocialMedia = {
  platform: string;
  url: string;
}

type Show = {
  title: string;
  poster: ContentfulImage;
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
  tableLink: string;
  artist: string;
}
// #endregion

export type {
  ContentfulImage,
  Talent,
  Release,
  SocialMedia,
  Show,
};
