const mapping: Record<string, string> = {
  analytics: 'analytics',
  backlinks: 'backlink',
  organizations: 'organization',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
