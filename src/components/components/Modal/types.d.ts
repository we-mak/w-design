import { ReactChild, MouseEventHandler } from "react";
import { GlobProps, SyntheticEventProps, MouseEventProps } from "../../typings";

export interface ModalContainerStyleProps {
  size?: "large" | "medium" | "small";
}

export interface ModalProps
  extends GlobProps,
    ModalContainerStyleProps,
    SyntheticEventProps,
    MouseEventProps {
  onClose: (e: React.SyntheticEvent<HTMLElement>) => void;
  modalTitle?: string;
  modalBody?: ReactChild;
  modalFooter?: ReactChild;
}
