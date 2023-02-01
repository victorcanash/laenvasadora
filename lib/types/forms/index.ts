import type { FormField, FormButton, FormSubmit } from '@core/types/forms';
import type { FormatText } from '@core/types/texts';
import type { NavItem } from '@core/types/navigation';

export type FormFieldGroup = {
  avatarIcon?: JSX.Element,
  avatarBgColor?: string,
  titleTxt?: FormatText,
  descriptionTxt?: FormatText,
  formFields?: FormField[],
  extraElements?: JSX.Element,
};

export type FormButtons = {
  submit: FormSubmit,
};

export type FormButtonsNormal = FormButtons & {
  delete?: FormButton & {
    confirm?: {
      enabled: boolean,
    },
  },
  cancel?: FormButton,
};

export type FormButtonsCheckout = FormButtons & {
  back: FormButton,
};

export type FormBase = {
  maxWidth?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues?: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: any,
  enableReinitialize?: boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: any) => void,
  formFieldGroups?: FormFieldGroup[],
  formButtons?: FormButtonsNormal | FormButtonsCheckout,
  successMsg?: string,
  errorMsg?: string,
  linksItems?: NavItem[],
};
