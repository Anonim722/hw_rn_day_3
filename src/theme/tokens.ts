export interface ColorTokens {
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  primary: string;
  primaryPressed: string;
  border: string;
  badge: string;
  onPrimary: string;
}

export const lightColors: ColorTokens = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#64748B',
  primary: '#2563EB',
  primaryPressed: '#1D4ED8',
  border: '#E2E8F0',
  badge: '#3B82F6',
  onPrimary: '#FFFFFF',
};

export const darkColors: ColorTokens = {
  background: '#09090B',
  surface: '#18181B',
  text: '#F4F4F5',
  textSecondary: '#A1A1AA',
  primary: '#3B82F6',
  primaryPressed: '#2563EB',
  border: '#27272A',
  badge: '#2563EB',
  onPrimary: '#FFFFFF',
};
