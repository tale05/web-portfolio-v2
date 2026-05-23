import { HandHeart } from "lucide-react";
import ActiveCard from "./ActiveCard";
import { listActive } from "../../data/listActive";
import { useTranslation } from "react-i18next";

export default function ActiveMobile() {
  const { t } = useTranslation();
  const getActiveItems = (active) =>
    active.itemKeys.map((itemKey) => t(itemKey));

  return (
    <div className="p-4">
      <div className="mx-auto my-6 flex w-full max-w-[800px] items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/50" />

        <h1
          className="
                inline-flex items-center gap-3 rounded-full
                border border-cyan-500/20 bg-cyan-500/10
                px-5 py-3 text-lg font-bold text-cyan-700
                shadow-[0_10px_30px_rgba(8,145,178,0.12)]
                backdrop-blur-xl
                dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200
                sm:text-xl
              "
        >
          <HandHeart className="w-8 h-8 text-cyan-700 dark:text-cyan-200" />
          {t("titleActivities")}
        </h1>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
      </div>

      <div className="grid grid-cols-1 gap-4 py-3">
        {listActive.map((active) => (
          <ActiveCard
            key={active.translationKey}
            title={t(active.titleKey, active.title)}
            items={getActiveItems(active)}
          />
        ))}
      </div>
    </div>
  );
}
