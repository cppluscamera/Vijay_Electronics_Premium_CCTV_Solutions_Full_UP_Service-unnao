
export interface ServiceInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: 'Installation' | 'Repair' | 'Maintenance';
  location: string;
  message: string;
  timestamp: number;
}

export enum Page {
  HOME = '/',
  INSTALLATION = '/installation',
  REPAIR = '/repair',
  MAINTENANCE = '/maintenance',
  ADMIN = '/admin'
}
