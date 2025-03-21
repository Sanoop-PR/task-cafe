import { useMutation, useQuery } from '@tanstack/react-query';
import MenuForm from '../components/MenuForm'
import { IMenu } from '../lib/type';
import axios from 'axios';
import { baseUrl } from '../lib/baseUrl';
import { useParams } from 'react-router';

function EditMenu() {
    const { title } = useParams()

    const { data } = useQuery({
        queryKey: ["menuByTitle"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/menu/${title}`)
            return res.data
        }
    })

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (menu: IMenu) => {
            await axios.put(`${baseUrl}/menu/${data._id}`, menu)
        },
        onError(error) {
            console.log("error: ", error);
        },
    })

    return (
        <div className='p-10'>
            <MenuForm defaultValues={data} mutate={mutate} isPending={isPending} buttonLabel='ADD' isSuccess={isSuccess} />
        </div>
    )
}

export default EditMenu