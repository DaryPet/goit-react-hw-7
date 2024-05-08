import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contacts({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container} key={data.id}>
      <div className={css.data}>
        <p className={css.text}>
          <RiUser3Fill />
          {data.name}
        </p>
        <p className={css.text}>
          <BiSolidPhone />
          {data.number}
        </p>
      </div>

      <button
        className={css.btn}
        onClick={() => dispatch(deleteContact(data.id))}
      >
        Delete
      </button>
    </div>
  );
}
