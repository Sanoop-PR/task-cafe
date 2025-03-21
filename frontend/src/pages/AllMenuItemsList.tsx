import { Link, useParams } from "react-router"
import { Button } from "../components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { baseUrl } from "../lib/baseUrl"
import axios from "axios"
import { IItem } from "../lib/type"


function AllMenuItemsList() {
    const { title } = useParams()
    const queryClient:any = useQueryClient();

    const { data } = useQuery({
        queryKey: ["allMenuItems"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/item/${title}`)
            return res.data
        }
    })

    const {mutate} = useMutation({
        mutationFn: async (id:string) => {
            await axios.delete(`${baseUrl}/item/${id}`)
        },
        onSuccess() {
            queryClient.invalidateQueries(["allMenuItems"]);
        },
    })

    return (
        <main>
            <section className="flex justify-between px-20 py-10">
                <h1 className='text-4xl text-center font-bold'>Items list</h1>
                <Link to={`/create-item/${title}`}><Button>Add New Item</Button></Link>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
                {
                    data?.length>0 ?
                        data?.map((item: IItem, index: number) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>
                                        <p>${item.price}</p>
                                    </CardDescription>
                                    <CardDescription>
                                        <p>{item.description}</p>
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link to={`/edit-item/${item._id}`}><Button>Edit</Button></Link>
                                    <Button variant={'destructive'} onClick={()=>mutate(item._id!)}>Delete</Button>
                                </CardFooter>
                            </Card>
                        )):
                        <div>items not available</div>
                }
            </section>
        </main>
    )
}

export default AllMenuItemsList