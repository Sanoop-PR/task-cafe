import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "../components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { IformProps } from "../lib/type"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const formSchema = z.object({
    title: z.string().min(1),
    description: z.string()
});



export default function MenuForm({ mutate, isPending, buttonLabel, isSuccess,defaultValues }: IformProps) {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: ""
        }
    })

    useEffect(() => {
        if (isSuccess) {
            navigate(-1)
        }
    }, [isSuccess])

    useEffect(() => {
        if(defaultValues){
            form.reset({
                title:defaultValues.title,
                description:defaultValues.description
            })
        }
    }, [defaultValues,form])
    


    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            mutate(values)
        } catch (error) {
            console.error("Form submission error", error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto">
                <h1 className='text-4xl text-center font-bold'>Create New Menu</h1>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Menu Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter menu title"

                                    type=""
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Menu Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="enter menu description"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between">
                    <Button onClick={() => navigate(-1)} type="button" variant={'outline'}>Cancel</Button>
                    <Button type="submit" disabled={isPending}>
                        {
                            isPending ?
                                <Loader2 className="animate-spin" />
                                :
                                buttonLabel
                        }
                    </Button>
                </div>
            </form>
        </Form>
    )
}