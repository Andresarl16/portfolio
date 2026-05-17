import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/systemsIHaveBuilt/en.json';
import es from '../infrastructure/i18n/systemsIHaveBuilt/es.json';

const messages = { en, es };

export function useSystemsIHaveBuiltTranslations() {
  return useI18n(messages);
}
