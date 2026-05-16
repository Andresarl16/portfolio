import { useI18n } from '@/shared/hooks/useI18n';
import en from '../infrastructure/i18n/whatIBuild/en.json';
import es from '../infrastructure/i18n/whatIBuild/es.json';

const messages = { en, es };

export function useWhatIBuildTranslations() {
  return useI18n(messages);
}
