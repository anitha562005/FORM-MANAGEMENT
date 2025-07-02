import { ErrorMessage, Field ,Form , Formik } from "formik";

const StudentRegistartionForm=()=>{
    const initialValues={
        name:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        course:"",
        terms:false,
    };

const validate=(values)=>{
    const errors={};//for error to be displayed

    if(!values.name)
        errors.name = "FullName is required";

    if(!values.email){
        errors.email = "Email is required";
    }
    //for rejects of email
    else if(!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)){
        errors.email="Invalid email address";
    }

    if(!values.phone){
        errors.phone = "Phone number is required";
    }
    else if(!/^\d{10}$/.test(values.phone)){
        errors.phone="Invalid phone number";
    }

     if(!values.password)
        errors.password = "Password is required";
    else if(values.password.length<6){
        errors.password="password must be atleast 6 character";
    }

    
    if(!values.confirmPassword)
        errors.confirmPassword = "ConfirmPassword is required";
    else if(values.confirmPassword != values.password){
        errors.confirmPassword="Password doesn't match";
    }

    if(!values.course)
        errors.course = "Select a course";
    
    if(!values.terms)
        errors.terms = "Agree to the terms and condition";

    return errors;
};
//for submit button
const handleSubmit=(values,{resetForm})=>{
    console.log("Form submittes:",values);
    alert("Form submitted successfully");
    resetForm();
}

//for the form details
    return(
        <div className="form-container">
            <h2>Studet Registration Form</h2>
             <Formik initialValues={initialValues}  validate={validate}  onSubmit={handleSubmit}>
                <Form>
                
                    <div>
                        <label>FullName:</label>
                           <Field type="text" name="name"></Field>
                           <ErrorMessage name="name" component="div" className="error"/>
                    </div>
                
                    <div>
                         <label>Email:</label>
                            <Field type="email" name="email"></Field>
                            <ErrorMessage name="email" component="div" className="error"/>
                    </div>

                    <div>
                         <label>Phone:</label>
                            <Field type="phone" name="phone"></Field>
                            <ErrorMessage name="phone" component="div" className="error"/>
                    </div>

                    <div>
                         <label>password:</label>
                            <Field type="password" name="password"></Field>
                            <ErrorMessage name="password" component="div" className="error"/>
                    </div>

                    <div>
                         <label>ConfirmPassword:</label>
                            <Field type="confirmPassword" name="confirmPassword"></Field>
                            <ErrorMessage name="confirmPassword" component="div" className="error"/>
                    </div>

                    <div>
                        <label>Course:</label>
                          <Field as="select" name="course">
                             <option value="">Select Course</option>
                             <option value="Web Dev">Web Development</option>
                             <option value="AI">Artificial Intelligence</option>
                             <option value="Data Science">Data Science</option>
                         </Field>
                         <ErrorMessage name="course" component="div" className="course"/>
                    </div>

                    <div>
                       <label>
                         <Field type="checkbox" name="terms" />
                            I agree to the terms and condition
                        </label>
                        <ErrorMessage name="terms" component="div" className="terms"/>
                    </div>

                    <button type="submit">Submit</button>

                </Form>
             </Formik>
        </div>
    )
}
export default StudentRegistartionForm;