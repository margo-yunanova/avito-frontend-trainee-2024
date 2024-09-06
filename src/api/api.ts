export const getAdvertisements = async () => {
  const response = await fetch('http://localhost:3000/advertisements');
  const data = await response.json();
  return data;
};
