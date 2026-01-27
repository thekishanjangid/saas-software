// Domain mappings for Clearbit Logo API
const domainMap: Record<string, string> = {
  // Cold Email & Sales
  'Saleshandy': 'saleshandy.com',
  'Lemlist': 'lemlist.com',

  // CRM
  'HubSpot': 'hubspot.com',
  'Salesforce': 'salesforce.com',
  'Pipedrive': 'pipedrive.com',
  'Freshsales': 'freshsales.io',

  // Project Management
  'Monday': 'monday.com',
  'Monday.com': 'monday.com',
  'Asana': 'asana.com',
  'ClickUp': 'clickup.com',
  'Notion': 'notion.so',

  // Payroll & HR
  'Deel': 'deel.com',
  'Remote': 'remote.com',
  'Gusto': 'gusto.com',

  // Marketing
  'Mailchimp': 'mailchimp.com',
  'ActiveCampaign': 'activecampaign.com',
  'Semrush': 'semrush.com',

  // Communication
  'Slack': 'slack.com',
  'Zoom': 'zoom.us',
  'Zendesk': 'zendesk.com',
};

export function getLogoUrl(productName: string): string {
  const domain = domainMap[productName];
  if (domain) {
    return `https://logo.clearbit.com/${domain}`;
  }
  // Fallback: try to derive domain from product name
  const derivedDomain = productName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
  return `https://logo.clearbit.com/${derivedDomain}`;
}

export function getDomain(productName: string): string {
  return domainMap[productName] || productName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
}
