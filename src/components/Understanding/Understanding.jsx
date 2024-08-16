import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const submitUnderstanding = (event) => {
        event.preventDefault();

        if (Number(understanding) <= 5 && Number(understanding >= 1)) {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: {
                    understanding: understanding,
                }
            })
            history.push('/support')
        }
    }
    return (
        <div>
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={submitUnderstanding}>
                <div className="flex flex-col items-center">
                    <label className="text-2xl font-bold text-gray-900">How Well Are You Understanding The Content?</label>
                    <p className="text-sm/6 text-gray-400">Between 1 (poorly) and 5 (full understanding)</p>
                    <input className="border-2 border-sky-950 rounded-lg p-1 m-4 max-w-40 text-center"
                        type="number"
                        value={understanding}
                        placeholder="0"
                        required
                        onChange={e => setUnderstanding(e.target.value)} />
                </div>
                <button
                    className="w-32 border-2 border-slate-400 bg-slate-400 hover:bg-slate-200 rounded-full">
                    Next
                </button>
            </form>
        </div>
    )
}

export default Understanding;