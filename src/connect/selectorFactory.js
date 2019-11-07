
export default function finalPropsSelectorFactory (
  store,
  { initMapReducers, initMapDispatchToProps, pageLifecycle, ...options }
) {
  const component = options.page;
  component['reducers'] = initMapReducers;
  if (initMapDispatchToProps) {
    component['props'] = initMapDispatchToProps(store.dispatch);
  }
  pageLifecycle(store, component);
}