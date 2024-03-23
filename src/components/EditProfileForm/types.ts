export interface EditProfileFormFields {
  name: string;
  phone: string;
  month: string;
  day: string;
  year: string;
  description: string;
  avatar: FileList;
}

export interface EditProfileFormProps {
  onClose: () => void;
}
