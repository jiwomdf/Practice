export const validateEmailInput = (text: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(text) == false) {
    return false;
  } else {
    return true;
  }
};
