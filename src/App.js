import React, { useState } from 'react';
import './App.css';
import { Search } from './components/search';
import { RepoList } from './components/repo-list';
import { Header } from './components/header';


const styles = {
  app: {
    maxWidth: '450px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '2rem',
  }
}


function App() {

  const [gitRepos, setGitRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (query) => {
    setIsLoading(true);
    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => response.json())
      .then(({ items }) => items ?? [])
      .then(items => items.map(item => ({
        description: item.description,
        author: item.owner.login,
        stars: item.stargazers_count,
        id: item.id,
      })))
      .then(setGitRepos)
      .then(() => setIsLoading(false))
  }

  return (
    <div className="App" style={styles.app}>
      <Header iconName="github">Search Github Repos</Header>
      <Search onSubmit={handleSearchSubmit} />
      <RepoList isLoading={isLoading} repos={gitRepos} />
    </div>
  );
}

export default App;
