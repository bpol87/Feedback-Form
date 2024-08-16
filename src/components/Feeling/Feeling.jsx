import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";


function Feeling() {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeeling = (event) => {
        event.preventDefault();

        if (Number(feeling) <= 5 && Number(feeling >= 1)) {
            dispatch({
                type: 'SET_FEELING',
                payload: {
                    feeling: feeling,
                }
            })
            history.push('/understanding')
        }
    }
    return (
        <div>
            <form
                className="flex flex-col justify-center items-center"
                onSubmit={submitFeeling}>
                <div className="flex flex-col items-center">
                    <label className="text-2xl font-bold text-gray-900">How Are You Feeling Today?</label>
                    <p className="text-sm/6 text-gray-400">Between 1 (terrible) and 5 (best)</p>
                    <input className="border-2 border-sky-950 rounded-lg p-1 m-4 max-w-40 text-center"
                        type="number"
                        value={feeling}
                        placeholder="0"
                        required
                        onChange={e => setFeeling(e.target.value)} />
                </div>
                <button
                    className="w-32 border-2 border-slate-400 bg-slate-400 hover:bg-slate-200 rounded-full">
                    Next
                </button>
            </form>
        </div>
    )
}

export default Feeling;