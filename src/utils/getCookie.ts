export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") {
    return null;
  }
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name))
    ?.split("=")[1];
  return cookieValue ? decodeURIComponent(cookieValue) : null;
};
