import * as yup from "yup";

export const signinSchema = yup.object({
  email: yup
    .string()
    .email("Email invalide")
    .required("L'adresse email est Obligatoire"),
  password: yup
    .string()
    .min(6, "Le mot de passe doit avoir au moins 6 caractères")
    .required("Le mot de passe est requis"),
});
