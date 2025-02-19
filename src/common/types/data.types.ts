export interface Menu {
  id: string;
  title: string;
  submenu: Submenu[];
}

export interface Submenu {
  label: string;
  href: string;
}

export interface Socials {
  name: "Facebook" | "Google" | "Twitter";
  href: string;
  Icon: React.FC;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
}

export interface Option {
  display: string;
  value: boolean | string;
  isRejection: boolean;
}
export interface QuizQuestions {
  question: string;
  type: "ChoiceType";
  options: Option[];
}

export interface Quiz {
  questions: QuizQuestions[];
}
