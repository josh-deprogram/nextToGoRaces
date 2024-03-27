export const NEDS_ENDPOINT = 'https://api.neds.com.au/rest/v1';

export const RACE_CATEGORIES = {
  greyhound: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
  harness: '161d9be2-e909-4326-8c2c-35ed71fb460b',
  thoroughbred: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
} as const;

export const size = {
  small: 8,
  medium: 16,
  large: 32,
  xl: 48,
};

export const font = {
  small: 10,
  body: 16,
  title: 24,
  xl: 38,
};

export const colors = {
  light: '#fff',
  primary: '#ff6d00',
  secondary: '#bc7b5b',
  highlight: '#ff5500',
  dark: '#2a2f33',
  medium: '#e9e9e9',
  border: '#585757',
};

export default {
  size,
  font,
  colors,
};
