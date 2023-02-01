import { FormFieldTypes } from '@core/constants/forms';
import type { AuthUpdateEmail } from '@core/types/auth';

import type { FormButtonsNormal } from '@lib/types/forms';
import useForms from '@lib/hooks/useForms';
import useAuth from '@lib/hooks/useAuth';
import BaseForm from '@components/forms/BaseForm';

const UpdateEmailForm = () => {
  const { updateEmailFormValidation, userFieldsInitValues } = useForms();
  const { sendUpdateEmail, errorMsg, successMsg } = useAuth();

  const handleSubmit = async (values: AuthUpdateEmail) => {
    sendUpdateEmail(values);
  };

  return (
    <BaseForm
      initialValues={{
        password: userFieldsInitValues.password,
        newEmail: userFieldsInitValues.email,
      } as AuthUpdateEmail}
      validationSchema={updateEmailFormValidation}
      formFieldGroups={[
        {
          titleTxt: {
            id: 'forms.updateEmail.title',
          },
          descriptionTxt: {
            id: 'forms.updateEmail.description',
          },
          formFields: [
            {
              name: 'password',
              type: FormFieldTypes.password,
              required: true,
            },
            {
              name: 'newEmail',
              type: FormFieldTypes.text,
              required: true,
            }
          ],
        }
      ]}
      formButtons={{
        submit: {
          text: {
            id: 'forms.updateEmail.successBtn',
          },
          onSubmit: handleSubmit,
        },
      } as FormButtonsNormal}
      successMsg={successMsg}
      errorMsg={errorMsg}
    />
  );
};

export default UpdateEmailForm;
