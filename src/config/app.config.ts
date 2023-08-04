interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'SEO Manager', 'Content Creator'],
  tenantName: 'Organization',
  applicationName: 'Dash Management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
