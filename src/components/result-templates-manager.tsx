import {
    ResultTemplatesManager,
    Result,
    buildResultTemplatesManager,
    ResultTemplatesHelpers,
  } from '@coveo/headless';
  import {InteractiveResult} from '../components/interactive-result';
  import {headlessEngine} from '../engine';
  
  export const resultTemplatesManager: ResultTemplatesManager<
    (result: Result) => JSX.Element
  > = buildResultTemplatesManager(headlessEngine);
  
  resultTemplatesManager.registerTemplates({
    conditions: [],
    content: (result: Result) => (
      <li key={result.uniqueId}>
        <article>
          <h2>
            <InteractiveResult result={result}>
              {result.title}
            </InteractiveResult>
          </h2>
          <p>{result.excerpt}</p>
        </article>
      </li>
    ),
  });