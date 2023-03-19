import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateUserData } from "../Redux/userActions";
import { useFormik } from "formik";

const EditModal = (props) => {
  const dispatch = useDispatch();
  const { name, email, website, phone, id, username } = props.item;
  const initialValues = {
    id: id,
    name: name,
    email: email,
    website: website,
    phone: phone,
    username: username,
  };
  const onSubmit = (values) => {
    props.onHide();
    dispatch(updateUserData(values));
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "This field is required";
    }
    if (!values.email) {
      errors.email = "This field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email";
    }
    if (!values.phone) {
      errors.phone = "This field is required";
    }
    if (!values.website) {
      errors.website = "This field is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Basic Modal
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={formik.handleSubmit}>
          <Modal.Body>
            {/* Name */}
            <Form.Group
              className="inputArea my-1 d-flex flex-column align-items-center"
              controlId="formBasicPassword"
            >
              <div className="d-flex w-100 gap-2 align-items-center">
                <Form.Label>
                  <span className="text-danger me-2">*</span>
                  <span>Name</span>
                </Form.Label>

                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="name"
                  value={formik.values.name}
                  type="text"
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className="error my-1 w-75">{formik.errors.name}</div>
              ) : (
                <div className="my-1">&nbsp;</div>
              )}
            </Form.Group>
            {/* Email  */}
            <Form.Group
              className="inputArea my-1 d-flex flex-column align-items-center"
              controlId="formBasicPassword"
            >
              <div className="d-flex w-100 gap-2 align-items-center">
                <Form.Label>
                  <span className="text-danger me-2">*</span>
                  <span>Email</span>
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  value={formik.values.email}
                  type="email"
                  required
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="error my-1 w-75">{formik.errors.email}</div>
              ) : (
                <div className="my-1">&nbsp;</div>
              )}
            </Form.Group>
            {/* Phone  */}
            <Form.Group
              className="inputArea my-1 d-flex flex-column align-items-center"
              controlId="formBasicPassword"
            >
              <div className="d-flex w-100 gap-2 align-items-center">
                <Form.Label>
                  <span className="text-danger me-2">*</span>
                  <span>Phone</span>
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="phone"
                  value={formik.values.phone}
                  type="tel"
                  required
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error my-1 w-75">{formik.errors.phone}</div>
              ) : (
                <div className="my-1">&nbsp;</div>
              )}
            </Form.Group>
            {/* Website  */}
            <Form.Group
              className="inputArea my-1 d-flex flex-column align-items-center"
              controlId="formBasicPassword"
            >
              <div className="d-flex w-100 gap-2 align-items-center">
                <Form.Label>
                  <span className="text-danger me-2">*</span>
                  <span>Website</span>
                </Form.Label>
                <Form.Control
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="website"
                  value={formik.values.website}
                  type="text"
                  required
                />
              </div>
              {formik.touched.website && formik.errors.website ? (
                <div className="error my-1 w-75">{formik.errors.website}</div>
              ) : (
                <div className="my-1">&nbsp;</div>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-primary" onClick={props.onHide}>
              Cancel
            </button>
            <Button type="submit" className="btn btn-primary">
              OK
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
