import { useState } from 'react';

const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        console.log(target)
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        onInputChange,
        onResetForm,
        formState,
        ...formState
    }
}

export default useForm
