const config = {

  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  path: '/',

  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './src/tests/**/*.ts'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
  }],

  // ===================
  // Test Configurations
  // ===================
  logLevels: {
    webdriver: 'warn',
    webdriverio: 'warn',
    '@wdio/cli': 'info',
    '@wdio/local-runner': 'info'
  },
  bail: 0,
  baseUrl: 'http://google.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: [
      'tsconfig-paths/register'
    ]
  },

  // =====
  // Hooks
  // =====
  before: function () {
  }
}

export { config }
