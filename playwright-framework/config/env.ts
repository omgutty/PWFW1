type EnvType = 'OrangeBaseURL' | 'saucedemo';

const ENV_CONFIG = {
  OrangeBaseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  saucedemo: 'https://www.saucedemo.com/'
};

export function getBaseUrl(): string {
  const env = (process.env.TEST_ENV as EnvType) || 'OrangeBaseURL';
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