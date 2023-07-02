const mapping: Record<string, string> = {
  complaints: 'complaint',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
