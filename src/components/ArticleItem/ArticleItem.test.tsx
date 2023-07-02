import { render, screen } from '@testing-library/react';
import { ArticleItem } from './ArticleItem';

const title = 'Example Title';
const content = 'Example Content';
const keyword = 'Example';

describe('ArticleItem', () => {
  it('should title and content showed correctly', () => {
    render(<ArticleItem title={title} content={content} keyword="" />);
    expect(screen.getByText('Example Title')).toBeInTheDocument();
    expect(screen.getByText('Example Content')).toBeInTheDocument();
  });
  it('should highlight search text in title and content', () => {
    render(<ArticleItem title={title} content={content} keyword={keyword} />);
    expect(
      screen
        .getByTestId('test-title')
        .innerHTML.includes(`<mark>${keyword}</mark>`)
    ).toBeTruthy();
    expect(
      screen
        .getByTestId('test-content')
        .innerHTML.includes(`<mark>${keyword}</mark>`)
    ).toBeTruthy();
  });
});
