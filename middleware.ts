export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/issues/new', '/issues/edit/:id+'], // use + means need 1 or more parameters, so anything that comes after /issues/edit/ will include this route in this middleware function
};
