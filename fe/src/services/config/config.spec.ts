import * as Config from './config';

describe('config service', () => {
  it('should contain application data', () => {
    const application = Config.getApplicationConfig();
    expect(application.Port).not.toBeNull();
    expect(application.Port).not.toBeNaN();
  });

  it('should contain copyright data', () => {
    const copyright = Config.getCopyright();
    expect(copyright.Year).not.toBeNull();
    expect(copyright.Year).not.toBeNaN();
    expect(copyright.Author).not.toBeNull();
  });
});