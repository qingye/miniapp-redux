export default function connectAdvanced (
  selectorFactory,
  {
    context = getApp(),
    ...connectOptions
  }
) {
  const store = context.store;

  return function wrapWithPage(page) {
    const selectorFactoryOptions = {
      ...connectOptions,
      page
    };
    selectorFactory(store, selectorFactoryOptions);

    return Object.assign({}, page);
  }
}