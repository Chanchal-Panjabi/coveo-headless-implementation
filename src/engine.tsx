import {buildSearchEngine} from '@coveo/headless';
export const headlessEngine = buildSearchEngine({
  configuration: {
    accessToken: 'xx030143a2-d2c3-4822-a0f7-7f104b9dfec9',
    organizationId: 'coveoimplementation0a0d97ov',
    searchHub: 'techzample-people-search',
  },
});
