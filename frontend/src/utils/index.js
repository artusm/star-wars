export const createResourceRoute = (name, tableComponent, pageComponent) => [
  {
    name,
    path: `/${name}`,
    component: tableComponent,
    meta: {
      resource: name,
    },
  },
  {
    path: `/${name}/:id`,
    component: pageComponent,
    meta: {
      resource: name,
    },
  },
];
