import { AwsDeployPage } from './app.po';

describe('aws-deploy App', function() {
  let page: AwsDeployPage;

  beforeEach(() => {
    page = new AwsDeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
