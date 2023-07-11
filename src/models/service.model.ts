export type Service = {
  title: Queries.Maybe<string>;
  slug: Queries.Maybe<string>;
  contentHtml?: string | TrustedHTML;
  excerpt?: Queries.Maybe<string>;
  iconImage?: any;
  isFeatured?: Queries.Maybe<boolean>;
  featureOrder?: Queries.Maybe<number>;
};
