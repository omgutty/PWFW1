type EnvType = 'QA' | 'saucedemo';

const ENV_CONFIG = {
  QA: 'https://qa.example.com',
  saucedemo: 'https://www.saucedemo.com/'
};

export function getBaseUrl(): string {
  const env = (process.env.TEST_ENV as EnvType) || 'saucedemo';
  return ENV_CONFIG[env];
}

/**
 * Advanced version 
 * 
 * export const ENV = {
  QA: {
    baseURL: 'https://qa.example.com'
  },
  DEV: {
    baseURL: 'https://www.saucedemo.com/'
  }
};

export function getEnv() {
  const env = process.env.TEST_ENV || 'DEV';
  return ENV[env];
}

Then:
//update playwright config like below.
use: {
  ...getEnv()
}
 */