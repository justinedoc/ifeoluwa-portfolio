/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const ModalContext = createContext({
  close: () => {},
  open: () => {},
  isOpenName: "",
});

function Modal({ children }) {
  const [isOpenName, setIsOpenName] = useState("");
  const close = () => setIsOpenName("");
  const open = setIsOpenName;

  return (
    <ModalContext.Provider value={{ close, open, isOpenName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { isOpenName, close } = useContext(ModalContext);
  const modalRefContainer = useRef();

  useEffect(() => {
    function handleCloseModal(e) {
      if (!modalRefContainer?.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", handleCloseModal, true);
    return () => {
      document.removeEventListener("click", handleCloseModal, true);
    };
  }, [modalRefContainer, close]);

  useEffect(() => {
    function handleEscCloseModal(e) {
      if (e.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", handleEscCloseModal);
    return () => {
      document.removeEventListener("keydown", handleEscCloseModal);
    };
  }, [close]);

  if (name !== isOpenName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-[100vh] backdrop-blur-sm z-[1001] transition duration-300">
      <div
        ref={modalRefContainer}
        className="fixed md:top-[50%] top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-2xl md:w-[50%] w-[90%] p-8 transition-all justify-center"
      >
        <div className="relative">
          {children}
          <button
            onClick={close}
            className={
              "w-fit p-1 rounded-md cursor-pointer border-2 border-transparent hover:border-lightGray transition-all absolute -top-8 -right-8"
            }
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => close() });
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Close = Close;

export default Modal;
