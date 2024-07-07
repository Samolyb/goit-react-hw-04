import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
    console.log(message);
    return (
        <p className={css.message}>{message}</p>
    );
}