'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format, differenceInYears, subYears } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";


const formSchema = z.object({
  nome: z.string().min(2, 'Mínimo de 2 caracteres'),
  email: z.string().email('E-mail não é valido!'),
  password: z.string().min(4, 'Mínimo de 4 caracteres'),
  date: z.date().nullable().refine((date) => {
    const age = differenceInYears(new Date(), date as Date);
    return age >= 12
  }, 'Você deve ser maior de 12 anos para se cadastrar')
});

export default function Page() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      password: "",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <main className="min-h-screen flex flex-col justify-start items-center">
      <div className="w-full max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Faça seu Cadastro</CardTitle>
            <CardDescription>Digite seus dados para realizar o cadastro!</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="exemplo@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="****" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-4">
                        <FormLabel>
                          Data de Nascimento
                        </FormLabel>
                        <FormControl>
                          <Popover {...field}>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? format(field.value, "PPP") : <span>Nascimento</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={undefined}
                                initialFocus
                                onSelect={(date)=>{ form.setValue('date', date as Date)}}
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Login</Button>
              </form>
            </Form>
          </CardContent>

        </Card>
      </div>
    </main>
  );
}

