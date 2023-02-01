import { HeinemannProduct } from '@hnm/types';
import { Auth } from './Auth';

const AUTH_KEY = 'HCP_AUTH';
const ENTITLEMENTS_KEY = 'HCP_USER_ENTITLEMENTS';

export const hasAuth = (): boolean => {
  return Boolean(sessionStorage.getItem(AUTH_KEY));
};

export const getAuth = (): Auth => {
  const content = sessionStorage.getItem(AUTH_KEY);
  if (content) {
    return JSON.parse(content) as Auth;
  }

  throw new Error('Auth tokens not set.');
};

export const setAuth = (auth: Auth): void => {
  sessionStorage.setItem(AUTH_KEY, JSON.stringify(auth));
};

export const hasEntitlements = (): boolean => {
  return Boolean(sessionStorage.getItem(ENTITLEMENTS_KEY));
};

export const getEntitlements = (): HeinemannProduct[] => {
  const content = sessionStorage.getItem(ENTITLEMENTS_KEY);
  if (content) {
    return JSON.parse(content) as HeinemannProduct[];
  }

  throw new Error('Products not set.');
};

export const getEntitlementsByAuthor = <TProduct extends HeinemannProduct>(
  author: string,
): TProduct[] => {
  return (getEntitlements() ?? []).filter(
    entitlement =>
      entitlement.author.trim().toLocaleLowerCase() ===
      (author ?? '').trim().toLocaleLowerCase(),
  ) as TProduct[];
};

export const setEntitlements = (entitlements: HeinemannProduct[]): void => {
  sessionStorage.setItem(ENTITLEMENTS_KEY, JSON.stringify(entitlements));
};

export const clearContext = (): void => {
  sessionStorage.clear();
};
