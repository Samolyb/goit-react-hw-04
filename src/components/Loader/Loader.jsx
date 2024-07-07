import { Audio } from 'react-loader-spinner';
import css from "./Loader.module.css";

export default function Loader({ loading }) {
    return (
        <div className={css.loader}>
            {loading && <Audio height="100" width="100" color='ocean' ariaLabel='loading' />}
        </div>
    );
}