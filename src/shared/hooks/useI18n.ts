'use client';

import { useSearchParams } from 'next/navigation';

export type TLocale = 'en' | 'es';

export type I18nMessages<T extends Record<string, string>> = {
  en: T;
} & Partial<Record<Exclude<TLocale, 'en'>, T>>;

export function useI18n<T extends Record<string, string>>(
  messages: I18nMessages<T>,
  defaultLocale: TLocale = 'en'
): (key: keyof T) => string {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') ?? defaultLocale;
  const locale = (langParam in messages ? langParam : defaultLocale) as TLocale;

  return (key: keyof T) =>
    messages[locale]?.[key] ?? messages?.[defaultLocale]?.[key] ?? String(key);
}
