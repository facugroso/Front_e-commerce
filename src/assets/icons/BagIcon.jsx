import CartOffCanvas from "../../components/CartOffCanvas";
import { useState } from "react";

function BagIcon() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setShow(true)}
    >
      <path
        d="M20.455 22.9998C20.4536 23.0001 20.4514 23.0001 20.4495 22.9998H3.54539C3.39734 22.9998 3.25557 22.9404 3.15278 22.8354C3.04999 22.7304 2.99492 22.5886 3.00037 22.4428L3.54566 7.94027C3.55657 7.65156 3.79732 7.42301 4.09069 7.42301H19.9042C20.1976 7.42301 20.4383 7.65156 20.4493 7.94027L20.9915 22.3665C20.9973 22.3977 21 22.4296 21 22.4624C21.0003 22.7592 20.7563 22.9998 20.455 22.9998ZM4.11141 21.9255H19.8838L19.3786 8.49727H4.61608L4.11141 21.9255ZM7.6351 10.6458C7.33383 10.6458 7.08981 10.8862 7.08981 11.1829C7.08981 11.4797 7.33383 11.7201 7.6351 11.7201C7.93638 11.7201 8.1804 11.4797 8.1804 11.1829C8.1804 10.8864 7.93638 10.6458 7.6351 10.6458ZM16.3598 10.6458C16.0585 10.6458 15.8145 10.8862 15.8145 11.1829C15.8145 11.4797 16.0585 11.7201 16.3598 11.7201C16.6611 11.7201 16.9051 11.4797 16.9051 11.1829C16.9051 10.8864 16.6611 10.6458 16.3598 10.6458ZM16.9051 5.83418C16.9051 3.16867 14.7035 1 11.9975 1C9.29143 1 7.08981 3.16867 7.08981 5.83418C7.08981 6.13067 7.3341 6.37131 7.6351 6.37131C7.9361 6.37131 8.1804 6.13067 8.1804 5.83418C8.1804 3.76085 9.89262 2.07426 11.9975 2.07426C14.1023 2.07426 15.8145 3.76085 15.8145 5.83418C15.8145 6.13067 16.0588 6.37131 16.3598 6.37131C16.6608 6.37131 16.9051 6.13067 16.9051 5.83418Z"
        stroke="currentColor"
      ></path>
      <CartOffCanvas show={show} handleClose={handleClose} placement={"end"} />
    </svg>
  );
}

export default BagIcon;
