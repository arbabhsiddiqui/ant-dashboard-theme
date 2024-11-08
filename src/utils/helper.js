export function formatString(str) {
  // Replace hyphens with spaces
  const formattedStr = str.replace(/-/g, ' ');

  // Capitalize the first letter of the first word
  const finalStr = formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1);

  return finalStr;
}
