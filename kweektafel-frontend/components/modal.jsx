import styles from "../styles/UserModal.module.css"
import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, setIsOpen) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

const UserModal = ({setIsOpen, children}) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setIsOpen);

    return (
        <div ref={wrapperRef} className={styles.modal}>
            {children}
            
        </div>
    );
}

export default UserModal;