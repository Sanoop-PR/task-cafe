import { useMutation, useQuery } from '@tanstack/react-query';
import { IItem, IMenu } from '../lib/type';
import axios from 'axios';
import { baseUrl } from '../lib/baseUrl';
import { useParams } from 'react-router';
import ItemForm from '../components/ItemForm';

function EditItem() {
    const { id } = useParams()

    const { data } = useQuery({
        queryKey: ["menuByTitle"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/item/one/${id}`)
            return res.data
        }
    })

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: async (menu: IItem) => {
            await axios.put(`${baseUrl}/item/${id}`, menu)
        },
        onError(error) {
            console.log("error: ", error);
        },
    })

    return (
        <div className='p-10'>
            <ItemForm defaultValues={data} mutate={mutate} isPending={isPending} buttonLabel='Update' isSuccess={isSuccess} />
        </div>
    )
}

export default EditItem