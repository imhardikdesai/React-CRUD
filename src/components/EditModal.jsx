import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateUserData } from "../Redux/userActions";
// import { AiOutlineClose } from "react-icons/ai";

const EditModal = (props) => {
  const { name, email, website, phone, id, username } = props.item;
  const [currentUserData, setCurrentData] = useState({
    id, name, email, website, phone, username
  })
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setCurrentData({ ...currentUserData, [e.target.name]: e.target.value })
  }

  const handleEdit = () => {
    props.onHide()
    console.log(currentUserData);
    dispatch(updateUserData(currentUserData))
  }
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
        <Modal.Body>
          <Form>
            {/* Name */}
            <Form.Group
              className="mb-3 d-flex align-items-center gap-2"
              controlId="formBasicPassword"
            >
              <Form.Label>
                <span className="text-danger me-2">*</span>
                <span>Name</span>
              </Form.Label>
              <Form.Control onChange={handleChange} name="name" value={currentUserData.name} type="text" required />
            </Form.Group>
            {/* Email  */}
            <Form.Group
              className="mb-3 d-flex align-items-center gap-2"
              controlId="formBasicPassword"
            >
              <Form.Label>
                <span className="text-danger me-2">*</span>
                <span>Email</span>
              </Form.Label>
              <Form.Control onChange={handleChange} name="email" value={currentUserData.email} type="email" required />
            </Form.Group>
            {/* Phone  */}
            <Form.Group
              className="mb-3 d-flex align-items-center gap-2"
              controlId="formBasicPassword"
            >
              <Form.Label>
                <span className="text-danger me-2">*</span>
                <span>Phone</span>
              </Form.Label>
              <Form.Control onChange={handleChange} name="phone" value={currentUserData.phone} type="tel" required />
            </Form.Group>
            {/* Website  */}
            <Form.Group
              className="mb-3 d-flex align-items-center gap-2"
              controlId="formBasicPassword"
            >
              <Form.Label>
                <span className="text-danger me-2">*</span>
                <span>Website</span>
              </Form.Label>
              <Form.Control onChange={handleChange} name="website" value={currentUserData.website} type="text" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={props.onHide}>
            Cancel
          </button>
          <Button className="btn btn-primary" onClick={handleEdit}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
