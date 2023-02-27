import {useEffect} from 'react';
import './App.css';
import {SearchBox} from './components/search-box';
import {loadSearchAnalyticsActions, loadSearchActions} from '@coveo/headless';
import {headlessEngine} from './engine';
import {ResultList} from './components/result-list';
import {Facet} from './components/facet';
import {Pager} from './components/pager';
import {Sort} from './components/sort';
import {DidYouMean} from './components/did-you-mean';
import {FacetManager} from './components/facet-manager';
import {
  facet,
  pager,
  resultList,
  searchBox,
  sort,
  didyoumean,
  facetA,
  facetB,
  facetManager,
} from './controllers/controllers';
import {criteria} from './controllers/sort-criteria';

function App() {
  useEffect(() => {
    const {logInterfaceLoad} = loadSearchAnalyticsActions(headlessEngine);
    const {executeSearch} = loadSearchActions(headlessEngine);
    headlessEngine.dispatch(executeSearch(logInterfaceLoad()));
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Coveo Headless Search Interface</h1>
      </header>
      <div className="App-body">
        <div className="search-section">
          <SearchBox controller={searchBox} />
        </div>
        <div className="main-section">
          <div className="facet-section column">
            <Facet controller={facet} title="Source" />
            <FacetManager controller={facetManager}>
              <Facet controller={facetA} title="author" />
              <Facet controller={facetB} title="language" />
            </FacetManager>
          </div>
          <div className="results-section column">
            <Sort controller={sort} criteria={criteria} />
            <ResultList controller={resultList} />
            <Pager controller={pager} />
            <DidYouMean controller={didyoumean} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
