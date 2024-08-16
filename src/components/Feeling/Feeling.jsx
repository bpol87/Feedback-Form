import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Description, Field, Input, Label, Button } from '@headlessui/react'
import clsx from 'clsx'

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
            <h2>How Are You Feeling Today?</h2>
            <p></p>
            <form onSubmit={submitFeeling}>
                <input
                    value={feeling}
                    onChange={e => setFeeling(e.target.value)}
                    type="number" />
                <div className="w-full max-w-md px-4">
                    <Field>
                        <Label className="text-sm/6 font-medium text-white">Name</Label>
                        <Description className="text-sm/6 text-white/50">Between 1 (terrible) and 5 (best)</Description>
                        <Input
                            className={clsx(
                                'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                </div>
                <Button 
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
      Next
    </Button>
            </form>
        </div>
    )
}

export default Feeling;