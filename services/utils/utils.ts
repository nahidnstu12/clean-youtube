export const urlParamsUpdate = (router: any, params: any) => {
  router.replace(
    {
      pathname: router.pathname,
      query: objectFilter({ ...router.query, ...params }),
    },
    undefined,
    { shallow: true }
  );
};

export const objectFilter = (object: any) => {
  Object.keys(object).forEach((key) => {
    if (!object[key]) {
      delete object[key];
    }
  });

  return object;
};
