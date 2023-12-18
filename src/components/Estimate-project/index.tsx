import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { DeveloperProfileType } from "@/lib/sanity/types/page";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiringRequestResponseData } from "@/pages/api/contact-form";
import { routes } from "@/lib/routes";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Button = dynamic(() => import("../Button"));
const CustomImage = dynamic(() => import("../CustomImage"));
export interface FormValues {
  name: "";
  email: "";
  project_type: "";
  message: "";
}
const EstimateProjectFormSection: React.FC<DeveloperProfileType> = (props) => {
  const {
    content,
    title,
    name_placeholder,
    email_placeholder,
    select_type_of_project,
    select_type_button,
    how_can_we_help_placeholder,
    hire_jamstack_development_button,
    section_theme,
    image,
  } = props || {};

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email address"),
  });
  const initialValues = {
    name: "",
    email: "",
    project_type: select_type_button?.[0] || "",
    message: "",
  };
  const [getData, setGetData] = useState<HiringRequestResponseData>();

  const navigate = useRouter();
  const onSubmit = async (values: FormValues) => {
    try {
      const fetcher = await axios.post(`api/estimate-project`, values);
      const data = fetcher?.data;
      if (data) {
        setGetData(data);
      }
      navigate.push(routes.thank_you());
    } catch (error) {
      return [values];
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div
      className={clsx(
        "pt-[6em] pb-[2em] em:pt-[8em] em:pb-[6em]",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div
          className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#f4fbff] mx-0 mt-[2em] xl:mt-[4.5em] sm:px-[2.5em] sm:py-[5em]
    px-[2.5em] py-[3em]
    "
        >
          <div className="w-full lg:w-6/12">
            <h6 className="font-bold leading-[1.25em] tracking-[0.012em] capitalize mb-[1em] text-[1.125em]">
              {title}
            </h6>
            <div className="[&>h4]:font-bold [&>h4]:leading-[1.25em] [&>h4]:tracking-[0.012em] [&>h4]:capitalize [&>h4]:mb-[1em] text-[1.875em] [&>h4>strong]:text-[#da3654]">
              {content && <RichText block={content} />}
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="estimate-form">
                <input
                  placeholder={name_placeholder || ""}
                  type="string"
                  className={`block w-full mb-[1.3em] rounded-lg border  p-[0.5em] text-black h-[3em] px-4  text-base ${
                    formik.errors.name && formik.touched.name
                      ? "border-[red]"
                      : "border-white-color"
                  }`}
                  {...formik.getFieldProps("name")}
                />
                <input
                  placeholder={email_placeholder || ""}
                  type="string"
                  className={`block w-full rounded-lg border  p-[0.5em] text-black h-[3em] px-4  text-base ${
                    formik.errors.email && formik.touched.email
                      ? "border-[red]"
                      : "border-white-color"
                  }`}
                  {...formik.getFieldProps("email")}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center mt-0 mb-0 mx-0 py-6 xl:py-8">
                <div className="text-[1em] leading-[1.25em] font-light">
                  {select_type_of_project}
                </div>
                <div className="lg:ml-[1em] lg:mr-0 my-[1em]">
                  <ul className="flex flex-wrap [&>*:nth-child(1)]:ml-0">
                    {select_type_button?.map((label, index) => (
                      <li
                        key={index}
                        className="relative cursor-pointer m-[0.5em] lg:mx-[0.5em] my-2
                  "
                      >
                        <input
                          // name="project_type"
                          type="radio"
                          id={label!}
                          defaultChecked={index == 0}
                          {...formik.getFieldProps("project_type")}
                          className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                          value={label!}
                        />
                        {label && (
                          <label
                            htmlFor={label}
                            className={clsx(
                              "peer-checked:bg-[#da3654] peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-[0.5em]"
                            )}
                          >
                            {label}
                          </label>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-textarea">
                <textarea
                  // name="message"
                  placeholder={how_can_we_help_placeholder || ""}
                  {...formik.getFieldProps("message")}
                  className="bg-white-color text-[1em] font-light leading-[1.5em] rounded-[0.625em]"
                />
              </div>
              <div className="block mt-[1.75em] mb-0 mx-0">
                <Button
                  type="submit"
                  className="hover:text-white-color hover:bg-[#222549] hover:shadow-[0_0.1875em_0.75em_#4a3aff2e]"
                >
                  {hire_jamstack_development_button?.label}
                </Button>
              </div>
            </form>
          </div>
          <div className="estimate-right mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-0 max-w-[27.5rem] w-full">
            {image && <CustomImage block={image} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EstimateProjectFormSection;
