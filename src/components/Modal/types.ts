import { ReactNode } from "react";

export interface ModalProps {
  width?: number | undefined;
  height?: number | undefined;
  children: ReactNode;
  closeCallback?: () => void | undefined;
}
