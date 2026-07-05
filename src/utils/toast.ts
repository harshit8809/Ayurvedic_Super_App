import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info';

export const showToast = (
  type: ToastType,
  message: string,
  description?: string,
): void => {
  Toast.show({
    type,
    text1: message,
    text2: description,
    position: 'bottom',
    visibilityTime: 3000,
  });
};

export const toast = {
  success: (message: string, description?: string) =>
    showToast('success', message, description),
  error: (message: string, description?: string) =>
    showToast('error', message, description),
  info: (message: string, description?: string) =>
    showToast('info', message, description),
};
