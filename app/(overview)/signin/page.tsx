"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "@/validation/signinSchema";
import { useForm } from "react-hook-form";
import { SignInFormData } from "@/types/types";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Formulaire soumis :", data);
    // Ajoute ici ton appel API ou ta logique de connexion
  };
  return (
    <main className="bg-[#161950] ">
      <div className="container p-4 lg:p-0 bg-[#] ">
        <div className=" h-screen flex justify-center items-center">
          <div className="w-[400px] ">
            <div className=" bg-white custom-shadaw p-5">
              <div>
                <h3 className="mb-2 font-bold text-gray-800 text-xl dark:text-white/90  text-center">
                  Connexion
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mb-4">
                  <div>
                    <label
                      htmlFor="mail"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Adresse mail
                    </label>
                  </div>
                  <div>
                    <input
                      type="mail"
                      id="mail"
                      placeholder="ex : joe.mayinzi@linked-solution.com"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30  focus:outline-none"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className=" mb-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Mot de passe
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Entrez votre mot de passe"
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 focus:outline-none"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 bg-[#465fff] ">
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
