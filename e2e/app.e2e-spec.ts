import { ProjectAttemptPage } from './app.po';

describe('project-attempt App', function() {
  let page: ProjectAttemptPage;

  beforeEach(() => {
    page = new ProjectAttemptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
