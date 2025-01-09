export const validatePhoneNumber = (number: string) => {
  const cleanNumber = number.replace(/\s+/g, '').replace(/[()-]/g, '');
  const phoneRegex = /^\+57\d{10}$/;
  return phoneRegex.test(cleanNumber);
};
