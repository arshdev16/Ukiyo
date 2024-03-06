import { z } from "zod";

export type productData = {
  name: string;
  imgUrl: Array<string>;
  price: number;
  slug: string;
};

export type CartItemData = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  productImage: string;
};

export const signupFormSchema = z
  .object({
    phoneNumber: z
      .string()
      .min(10, { message: "Phone no. must be atleast 10 digits" }),
    email: z.string().email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

export const signinFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
