import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };

  return (
    <a
        href={repo.html_url}
        target="_blank"
        className="block border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
    >
      <h2 className="text-large font-bold">{repo.full_name}</h2>
        <p className="text-sm">
            Forks: <span className="font-bold mr-2">{repo.forks}</span>
            Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-small font-thin">{repo?.description}</p>
      {!isFav && (
          <button
              className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
              onClick={addToFavorites}
          >
            Add
          </button>
      )}
      {isFav && (
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavorites}
        >
          Remove
        </button>
      )}
    </a>
  );
}
