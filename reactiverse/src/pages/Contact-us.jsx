import FormikForm from "../components/Forms/Formik-Form/FormikForm.jsx";
import ReactHookForm from "../components/Forms/React-Hook-Form/ReactHookForm.jsx";

function ContactUs() {
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      Formik form Demo
      <FormikForm/>
      React Hook Form Demo
      <ReactHookForm/>
    </div>
  );
}

export default ContactUs;
