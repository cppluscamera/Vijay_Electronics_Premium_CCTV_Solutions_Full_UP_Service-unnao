
import { ServiceInquiry } from '../types.ts';

const STORAGE_KEY = 'vijay_electronics_leads';

export const saveInquiry = (inquiry: Omit<ServiceInquiry, 'id' | 'timestamp'>): void => {
  const inquiries = getInquiries();
  const newInquiry: ServiceInquiry = {
    ...inquiry,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...inquiries, newInquiry]));
};

export const getInquiries = (): ServiceInquiry[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const deleteInquiry = (id: string): void => {
  const inquiries = getInquiries();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries.filter(i => i.id !== id)));
};
