import { useState, useRef} from 'react';
import { Form, FormState } from '../utils/states'

export default function Subscribe() {
    const [form, setForm] = useState<FormState>({ state: Form.Initial });
    const input = useRef(null);

    const subscribe = async(e) => {
        e.preventDefault();
        setForm({ state: Form.Loading });

        const res = fetch("../pages/api/subscribe", {
            headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            });
        
            const { error } = await (await res).json();
            if (error) {
              setForm({
                state: Form.Error,
                message: error
              });
            }
            setForm({
                state: Form.Success,
                message: `Yay! You're now subscibed to my newsletter.`
              });
    }
    return (
        <>
        <form className="form" onSubmit={subscribe}>
            <h1>Stay up to date.</h1>
            <input ref={input} autoComplete="email" type="email" placeholder="mail.toby@icloud.com" required />
        <button type="submit">Subscribe</button>
        </form>
        </>
    )
}