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
import { useEffect } from "react"
import { IItemformProps } from "../lib/type"
import { useNavigate, useParams } from "react-router"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  menu: z.string().min(1),
  title: z.string().min(1),
  price: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number().positive("Price must be a positive number")),
  description: z.string().min(1)
});

export default function ItemForm({ mutate, isPending, buttonLabel, isSuccess, defaultValues }: IItemformProps) {
  const navigate = useNavigate();
  const { title } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      menu: title || "",
      title: "",
      price: 0,
      description: ""
    }
  })

  useEffect(() => {
    if (isSuccess) {
      navigate(-1)
    }
  }, [isSuccess])

  useEffect(() => {
    if (defaultValues) {
      form.reset({
        menu: defaultValues.menu,
        title: defaultValues.title,
        price: Number(defaultValues.price),
        description: defaultValues.description,
      })
    }
  }, [defaultValues, form])


  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      mutate(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto">

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter title"

                  type=""
                  {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter price"

                  type="number"
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="enter description"
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