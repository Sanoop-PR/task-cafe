import { useMutation } from '@tanstack/react-query';
import ItemForm from '../components/ItemForm'
import { IItem } from '../lib/type';
import { baseUrl } from '../lib/baseUrl';
import axios from 'axios';

function CreateItem() {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (data: IItem) => {
      await axios.post(`${baseUrl}/item`, data)
    },
    onError(error) {
      console.log("error: ", error);
    },
  })
  return (
    <div className='p-10'>
      <ItemForm mutate={mutate} isPending={isPending} buttonLabel='ADD' isSuccess={isSuccess} />
    </div>
  )
}

export default CreateItem