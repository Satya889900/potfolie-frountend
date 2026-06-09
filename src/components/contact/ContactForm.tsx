"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sendContactForm } from "../../services/contactService";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

const onSubmit = async (
  data: ContactFormData
) => {
  const response =
    await sendContactForm(data);

  if (response.success) {
    toast.success(response.message);

    reset();
  }
};

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div>
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full border rounded-lg p-4"
            />

            {errors.name && (
              <p className="text-red-500 mt-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("email")}
              placeholder="Your Email"
              className="w-full border rounded-lg p-4"
            />

            {errors.email && (
              <p className="text-red-500 mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="Your Message"
              className="w-full border rounded-lg p-4"
            />

            {errors.message && (
              <p className="text-red-500 mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}