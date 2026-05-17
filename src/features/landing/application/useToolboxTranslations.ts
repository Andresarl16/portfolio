import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/toolbox/en.json';
import es from '../infrastructure/i18n/toolbox/es.json';

const messages = { en, es };

export function useToolboxTranslations() {
  return useI18n(messages);
}
