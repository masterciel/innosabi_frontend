import React, { useEffect, useState } from 'react';

import { makeFilter } from '../utils/utils';
import { fetchSuggestions } from '../service';
import { ArticleItem } from '../components/ArticleItem';
import { Spinner } from '../components/Spinner';
import Icons from '../components/Icons';

export type Article = {
  title: string;
  content: string;
};

export const MainPage = () => {
  const [filter, setFilter] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    const filterRequest = makeFilter(filter.split(' '));
    setIsLoading(true);
    const responseData = await fetchSuggestions(filterRequest);
    setIsLoading(false);
    const fetchArticles = responseData?.data?.map(
      (value: { title: any; content: any }) => {
        const articleItem: Article = {
          title: value.title,
          content: value.content,
        };
        return articleItem;
      }
    );
    setArticles(fetchArticles);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-5">
      <div className="flex gap-5 w-1/3">
        <input
          id="filter"
          data-testid="test-filter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          data-testid="test-button"
          className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 font-medium rounded-lg w-auto px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="relative w-1/3">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icons.Search />
        </div>
        <input
          id="keyword"
          data-testid="test-keyword"
          className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-1 w-[70%] my-5">
          {articles.length ? (
            articles.map((value: Article, index: number) => (
              <ArticleItem
                key={index}
                title={value.title}
                content={value.content}
                keyword={keyword}
              />
            ))
          ) : (
            <p>No article</p>
          )}
        </div>
      )}
    </div>
  );
};
