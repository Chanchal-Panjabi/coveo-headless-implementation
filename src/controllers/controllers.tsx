import {
  buildSearchBox,
  buildResultList,
  buildFacet,
  buildPager,
  buildSort,
  buildDidYouMean,
  buildFacetManager,
} from '@coveo/headless';
import {headlessEngine} from '../engine';
import {criteria} from './sort-criteria';

export const searchBox = buildSearchBox(headlessEngine);

export const didyoumean = buildDidYouMean(headlessEngine);

export const resultList = buildResultList(headlessEngine);

export const facet = buildFacet(headlessEngine, {options: {field: 'source'}});

export const facetManager = buildFacetManager(headlessEngine);
export const facetA = buildFacet(headlessEngine, {
  options: {field: 'author'},
});
export const facetB = buildFacet(headlessEngine, {
  options: {field: 'language'},
});

export const pager = buildPager(headlessEngine);

const initialCriterion = criteria[0][1];
export const sort = buildSort(headlessEngine, {
  initialState: {criterion: initialCriterion},
});
