import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/hero/en.json';
import es from '../infrastructure/i18n/hero/es.json';

const messages = { en, es };

export function useHeroTranslations() {
  return useI18n(messages);
}
