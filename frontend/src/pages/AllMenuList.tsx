import { Link } from "react-router"
import { Button } from "../components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { baseUrl } from "../lib/baseUrl"
import { IMenu } from "../lib/type"

function AllMenuList() {
    const queryClient:any = useQueryClient();

    const { data, isFetched } = useQuery({
        queryKey: ["allMenu"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/menu`)
            return res.data
        }
    })

    const {mutate} = useMutation({
        mutationFn: async (id:string) => {
            await axios.delete(`${baseUrl}/menu/${id}`)
        },
        onSuccess() {
            queryClient.invalidateQueries(["allMenu"]);
        },
    })

    return (
        <main>
            <section className="flex justify-between px-20 py-10">
                <h1 className='text-4xl text-center font-bold'>All Menu list</h1>
                <Link to={'/create-menu'}><Button>Add New Menu</Button></Link>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
                {isFetched ?
                    data.map((item: IMenu,index:number) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>
                                    <p>{item.description}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link to={`/item-list/${item.title}`}><Button>View all items</Button></Link>
                                <Button variant={'destructive'} onClick={()=>mutate(item._id!)}>Delete</Button>
                                <Link to={`/edit-menu/${item.title}`}><Button>Edit</Button></Link>
                            </CardFooter>
                        </Card>
                    ))
                    :
                    <p></p>
                }
            </section>
        </main>
    )
}

export default AllMenuList