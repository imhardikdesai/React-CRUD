import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
// import { AiOutlineClose } from "react-icons/ai";

const EditModal = (props) => {
  const { name, email, website, phone, username } = props.item;
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
              <Form.Control value={name} type="text" required />
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
              <Form.Control value={email} type="email" required />
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
              <Form.Control value={phone} type="tel" required />
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
              <Form.Control value={website} type="email" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={props.onHide}>
            Cancel
          </button>
          <Button className="btn btn-primary" onClick={props.onHide}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
