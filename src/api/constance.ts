import axios from 'axios';
const baseURL = 'http://192.168.5.221:2022/';

export const request = axios.create({
  baseURL,
});

request.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiQVNJRCIsImN0eSI6IkpXVCJ9.pd-_EyEPPybnur9Q_v15yngDjymGT-syAKIEg-UfnoJqvPa2jd4AAw.AvFYhh80ArdcDZqw6gccXw.3d7jHHM2tDCT5VFUe6GTmbu3aCQ7xlSujCBq-skLDLNg3vXGNS9Bv73skMCCztEhSbaI38Ot_gcqV6pTX-TAnK4SbFVjqLjia-57_QtgeZCJP7m8cjepslstXiw1F6nSdWKKzaoL3aGDP9n-wZ9dIQDpYN3qCy7M7JNa2miofjrPc4yFXSYmS8Id0AhOdQn1Qd6SxcCoylrU-PpYXVNw8ibfMs_ASm9IyMv5GnygudtrCYpC2-vVvAZVuyKzBfAgdTOh0ZhdXLBQChXdaGGYeGuVdvZ74qcqKZOXbFV7BYUEG1thijHZlLFxEMMIKhidI4J2d9hpRo5IbJPS_crKXA.FjDjYUF7dRY1bt3d_wnTkg`;
  return req;
});
