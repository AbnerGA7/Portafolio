import TabSwitcher from "@/react/TabSwitcher";
import { techSkillsData } from "@/components/skills/data/techSkillsData";
import type { TabSwitcherItem } from "@/types/TabSwitcherItem";
import TechGrid from "./TechGrid";

interface Props {
  translations: Record<string, string>;
}

const TechSkillsTab: React.FC<Props> = ({ translations }) => {
  const techSkillsItems: TabSwitcherItem[] = (
    Object.keys(techSkillsData) as Array<keyof typeof techSkillsData>
  ).map(
    (key): TabSwitcherItem => ({
      label: translations[key],
      content: <TechGrid techs={techSkillsData[key] ?? []} />,
    })
  );

  return (
    <TabSwitcher
      className="px-0 lg:px-10"
      textSize="text-sm lg:text-base xl:text-lg"
      items={techSkillsItems}
    />
  );
};

export default TechSkillsTab;
