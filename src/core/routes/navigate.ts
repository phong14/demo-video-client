import { ROUTES_PATH } from './route-paths';

export function addSlashToPath(route: string): string {
  return `/${route}`;
}

export const routeExternal = {
  root: () => {
    return ROUTES_PATH.ROOT;
  },
  video: () => {
    return addSlashToPath(ROUTES_PATH.VIDEO);
  },
};
