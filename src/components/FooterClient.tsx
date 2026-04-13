"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FooterClient() {
  const { t } = useLanguage();
  return (
    <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800">
      {t.footer}
    </footer>
  );
}
