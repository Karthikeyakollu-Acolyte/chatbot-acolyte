export interface ChatCardProps {
  imageSrc: string;
  alt: string;
}

export interface IconButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export interface QuickPromptProps {
  text: string;
}
