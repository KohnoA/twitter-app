import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignUpSteps } from '@/constants';
import { EmailFormFields } from '@/types';

interface SignUpStateType {
  step: SignUpSteps;
  emailFormData?: EmailFormFields;
}

const initialState: SignUpStateType = {
  step: SignUpSteps.EMAIL_STEP,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setEmailStep(state) {
      state.step = SignUpSteps.EMAIL_STEP;
    },
    setPasswordStep(state) {
      state.step = SignUpSteps.PASSWORD_STEP;
    },
    setEmailFormData(state, action: PayloadAction<EmailFormFields>) {
      state.emailFormData = action.payload;
    },
    clearEmailFormData(state) {
      if (state.emailFormData) state.emailFormData = undefined;
    },
  },
});

export const { setEmailStep, setPasswordStep, setEmailFormData, clearEmailFormData } =
  signUpSlice.actions;

export default signUpSlice.reducer;
