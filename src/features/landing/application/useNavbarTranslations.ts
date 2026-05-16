import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/navbar/en.json';
import es from '../infrastructure/i18n/navbar/es.json';

const messages = { en, es };

export function useNavbarTranslations() {
  return useI18n(messages);
}
