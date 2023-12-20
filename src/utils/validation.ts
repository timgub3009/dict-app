export function isEnglish(text: string) {
  return /^[A-Za-z\s]+$/.test(text);
}

export function isRussian(text: string) {
  return /^[А-Яа-яёЁ\s]+$/.test(text);
}
