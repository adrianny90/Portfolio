export const contactMe = async (name, email, message) => {
  const formData = { name: name, email: email, message: message };
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res) throw new Error("Error while signing up");
  const data = await res.json();
  return data;
};
