import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const EmployeeFeedbackForm = () =>{
    const initialValues ={
        fullName:"",
        department:"",
        rating:"",
        feedback:"",

    };
    const validationSchema=Yup.object({
        fullName: Yup.string()
        .min(3,"Name must be atleast 3 character")
            .required("FullName is required"),
            email: Yup.string()
            .email("Invalid email Address")
            .required("Email is required"),
            department:Yup.string()
            .required("Select a Department"),
            rating:Yup.number()
            .min(1,"minimum rating is 1")
            .max(5,"maximum rating is 5")
            .required("rating is required"),
            feedback:Yup.string()
            .max(200,"Feedback should be under 200 characters")

    });
    const handleSubmit=(values,{resetForm})=>{
    console.log("Form submittes:",values);
    alert("Form submitted successfully");
    resetForm();
}
    return(
        <div className="form-container">
            <h2>Employee Feedback Form</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Full Name:</label>
                        <Field type="text" name="fullName"/>
                         <ErrorMessage name="fullName" component="div" className="error"/>

                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email"/>
                         <ErrorMessage name="email" component="div" className="error"/>
                    </div>
                    <div>
                        <label>Department</label>
                        <Field as="select" name="department">
                            <option value="">select Department</option>
                            <option value="HR">HR</option>
                            <option value="Tech">Tech</option>
                            <option value="Marketing">Marketing</option>
                             <ErrorMessage name="department" component="div" className="error"/>
                        </Field>
                    </div>
                    <div>
                        <label>Rating(1-5):</label>
                        <Field type="number" name="rating"/>
                         <ErrorMessage name="rating" component="div" className="error"/>
                    </div>
                    <div>
                        <label>Feedback</label>
                        <Field type ="textarea" name="feedback"></Field>
                    </div>
                    <button type="submit">submit</button>
                </Form>
            </Formik>
            </div>
    );
}

export default EmployeeFeedbackForm;