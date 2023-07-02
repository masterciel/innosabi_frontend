import React from 'react';

type Item = {
  title: string;
  content: string;
  keyword: string;
};
export const ArticleItem = ({ title, content, keyword }: Item) => {
  const markedTitle = title.replace(keyword, `<mark>${keyword}</mark>`);
  const markedContent = content.replace(keyword, `<mark>${keyword}</mark>`);
  return (
    <div className="flex flex-col border-2 border-b-gray-300 gap-4">
      <p
        className="ml-2 px-2 text-3xl border-b-2 border-b-gray-700 w-fit"
        data-testid="test-title"
        dangerouslySetInnerHTML={{ __html: markedTitle }}
      />
      <div
        className="px-5"
        data-testid="test-content"
        dangerouslySetInnerHTML={{ __html: markedContent }}
      />
    </div>
  );
};
