import { HandHeart } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { listActive } from "../../data/listActive";
import ActiveCard from "./ActiveCard";
import ActiveMobile from "./ActiveMobile";
import { useTranslation } from "react-i18next";

export default function Active() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const getActiveItems = (active) =>
    active.itemKeys.map((itemKey) => t(itemKey));

  return (
    <>
      {isMobile ? (
        <div>
          <ActiveMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto py-4 relative">
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

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-4 justify-items-center">
            {listActive.map((active) => (
              <ActiveCard
                key={active.translationKey}
                title={t(active.titleKey, active.title)}
                items={getActiveItems(active)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
