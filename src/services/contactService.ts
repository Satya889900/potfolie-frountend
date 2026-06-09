export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactForm(
  data: ContactFormData
) {
  console.log("Contact Form Data:", data);

  return {
    success: true,
    message: "Message sent successfully",
  };
}