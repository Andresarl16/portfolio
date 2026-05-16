'use client';

import { useSearchParams } from 'next/navigation';

export type TLocale = 'en' | 'es';

export type I18nMessages<T extends Record<string, unknown>> = {
  en: T;
} & Partial<Record<Exclude<TLocale, 'en'>, Partial<T>>>;

export function useI18n<T extends Record<string, unknown>>(
  messages: I18nMessages<T>,
  defaultLocale: TLocale = 'en'
): <K extends keyof T>(key: K) => T[K] {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang') ?? defaultLocale;
  const locale = (langParam in messages ? langParam : defaultLocale) as TLocale;
  const localeData = (messages as Record<TLocale, Partial<T> | undefined>)[
    locale
  ];

  return <K extends keyof T>(key: K): T[K] =>
    (localeData?.[key] ?? messages.en[key]) as T[K];
}
