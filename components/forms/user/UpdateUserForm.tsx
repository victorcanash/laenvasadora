import { FormFieldTypes } from '@core/constants/forms';
import { ManageActions } from '@core/constants/auth';
import type { User } from '@core/types/user';

import type { FormButtonsNormal } from '@lib/types/forms';
import { useAuthContext } from '@lib/contexts/AuthContext';
import useForms from '@lib/hooks/useForms';
import useUser from '@lib/hooks/useUser';
import BaseForm from '@components/forms/BaseForm';

const UpdateUserForm = () => {
  const { user } = useAuthContext();

  const { updateUserFormValidation, userFieldsInitValues } = useForms();
  const { manageUser, errorMsg, successMsg } = useUser();

  const handleSubmit = async (values: User) => {
    manageUser(ManageActions.update, values);
  };

  return (
    <BaseForm
      initialValues={{
        id: user?.id || -1,
        email: user?.email || userFieldsInitValues.email,
        firstName: user?.firstName || userFieldsInitValues.firstName,
        lastName: user?.lastName || userFieldsInitValues.lastName,
        birthday: user?.birthday || userFieldsInitValues.birthday,
        getEmails: user?.getEmails || userFieldsInitValues.getEmails,
      } as User}
      validationSchema={updateUserFormValidation}
      enableReinitialize={true}
      formFieldGroups={[
        {
          titleTxt: {
            id: 'forms.updateUser.title',
          },
          formFields: [
            {
              name: 'firstName',
              type: FormFieldTypes.text,
              required: true,
              autoFocus: true,
            },
            {
              name: 'lastName',
              type: FormFieldTypes.text,
              required: true,
            },
            {
              name: 'birthday',
              type: FormFieldTypes.datePicker,
              required: true,
            },
            {
              name: 'getEmails',
              type: FormFieldTypes.checkbox,
            }
          ],
        }
      ]}
      formButtons={{
        submit: {
          text: { 
            id: 'forms.updateUser.successBtn',
          },
          onSubmit: handleSubmit,
        },
      } as FormButtonsNormal}
      successMsg={successMsg}
      errorMsg={errorMsg}
    />
  );
};

export default UpdateUserForm;
