import { getLinksFromPaths } from './get-links-from-path';
import { Expand, MapRelativePathsToAbsolute } from './path-types';

export const Paths = {
  index: '/',

  about: 'about',
  projects: {
    index: 'projects',
    id: ':projectId',
  },
} as const;

export const generatePathWithRouteParams = (
  path: string,
  params: Record<string, string>,
): string => {
  return Object.entries(params).reduce((acc, [key, value]) => {
    return acc.replace(`:${key}`, value);
  }, path);
};

export type RelativePathsType = typeof Paths;
export type AbsolutePathsType = Expand<
  MapRelativePathsToAbsolute<RelativePathsType>
>;

type GetAppPathsUnion<T> = {
  [Prop in keyof T]: T[Prop] extends string
    ? T[Prop]
    : GetAppPathsUnion<T[Prop]>;
}[keyof T];

export type AppPathsUnion = Expand<GetAppPathsUnion<AbsolutePathsType>>;
export const Links: AbsolutePathsType = getLinksFromPaths(Paths, '');
