import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const VerifyOtpModal = ({ toggle, setToggle, _handleOtpVerification }) => {
  const [otp, setOtp] = useState("");

  const _clearState = () => {
    setOtp("");
    let count = 1;
    while (count < 7) {
      const nextfield = document.querySelector(`input[name=field-${count}]`);
      nextfield.value = "";
      count = count + 1;
    }
    document.querySelector(`input[name=field-1]`).focus();
  };

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      // It should not be last input field
      if (fieldIntIndex < 6) {
        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
      setOtp(otp + value);
    } else {
      if (fieldIntIndex > 1) {
        // Get the next input field using it's name
        const prevfield = document.querySelector(
          `input[name=field-${fieldIntIndex - 1}]`
        );

        // If found, focus the next field
        if (prevfield !== null) {
          prevfield.focus();
        }
      }
      setOtp(otp.substring(0, otp.length - 1));
    }
  };

  const _handlePasteOtp = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        // `text` contains the text read from the clipboard
        console.log("text: ", typeof(text))
        if (text.length == 6) {
          // Its an OTP, now loop over inputs & assigns val
          let count = 1;
          while (count < 7) {
            const nextfield = document.querySelector(`input[name=field-${count}]`);
            nextfield.value = text[count - 1];
            count = count + 1;
          }
        }
      })
      .catch((err) => {
        // maybe user didn't grant access to read from clipboard
        console.log("Something went wrong", err);
      });
  };

  return (
    <>
      <Modal
        isOpen={toggle}
        centered
        toggle={() => setToggle()}
        backdrop="static"
      >
        <ModalBody>
          <h5 className="text-center text-primary">
            Please enter one time password to verify
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: 30 }}>
              <InputFild
                name="field-1"
                length="1"
                handleChange={handleChange}
              />
              <InputFild
                name="field-2"
                length="1"
                handleChange={handleChange}
              />
              <InputFild
                name="field-3"
                length="1"
                handleChange={handleChange}
              />
              <InputFild
                name="field-4"
                length="1"
                handleChange={handleChange}
              />
              <InputFild
                name="field-5"
                length="1"
                handleChange={handleChange}
              />
              <InputFild
                name="field-6"
                length="1"
                handleChange={handleChange}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={() => _handlePasteOtp()}
          >
            Paste
          </button>
          <button
            type="button"
            className="btn btn-info mr-2"
            onClick={() => _clearState()}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => _handleOtpVerification(otp)}
          >
            Verify
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const InputFild = (props) => {
  return (
    <input
      style={{
        width: "40px",
        fontSize: "24px",
        marginLeft: "4px",
        marginRight: "4px",
        textAlign: "center",
      }}
      type="text"
      name={props.name}
      maxLength={props.length}
      onChange={props.handleChange}
    />
  );
};

export default VerifyOtpModal;
