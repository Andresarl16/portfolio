import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/experience/en.json';
import es from '../infrastructure/i18n/experience/es.json';

const messages = { en, es };

export function useExperienceTranslations() {
  return useI18n(messages);
}
