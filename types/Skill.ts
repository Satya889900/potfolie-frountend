export interface Skill {
  name: string;
  icon: string;
}

export interface SkillSection {
  label: string;
  skills: Skill[];
}
