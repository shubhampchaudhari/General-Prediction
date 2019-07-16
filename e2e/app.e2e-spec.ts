import { GeneralPredictionPage } from './app.po';

describe('general-prediction App', () => {
  let page: GeneralPredictionPage;

  beforeEach(() => {
    page = new GeneralPredictionPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
