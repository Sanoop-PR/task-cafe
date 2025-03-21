import { useMutation } from '@tanstack/react-query';
import MenuForm from '../components/MenuForm'
import { IMenu } from '../lib/type';
import axios from 'axios';
import { baseUrl } from '../lib/baseUrl';

function CreateMenu() {
    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (data: IMenu) => {
            await axios.post(`${baseUrl}/menu`, data)
        },
        onError(error) {
            console.log("error: ", error);
        },
    })
    return (
        <div className='p-10'>
            <MenuForm mutate={mutate} isPending={isPending} buttonLabel='ADD' isSuccess={isSuccess} />
        </div>
    )
}

export default CreateMenu