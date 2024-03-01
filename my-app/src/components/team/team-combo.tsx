"use client"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

const roles = [
    {
        label: 'Viewer',
        description: 'Can viewm and comment',
        value: 'viewer'
    },
    {
        label: 'Developer',
        description: 'Can view, comment and edit',
        value: 'developer'
    },
    {
        label: 'Billing',
        description: 'Can view, comment and manage billing ',
        value: 'billing'
    }
    ,{
        label: 'Owner',
        description: 'Admin-level acess to all resources.',
        value: 'owner'
    }
]

type Props = {
    value: string;
    setValue: (newValue:any) => void
}

export function TeamCombobox({value, setValue}:Props) {

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=""
        >
          {value
            ? roles.find((role) => role.value === value)?.label
            : "Select role..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search role..." />
          <CommandEmpty>No role found.</CommandEmpty>
          <CommandGroup>
            {roles.map((role) => (
              <CommandItem
                key={role.value}
                value={role.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <div>
                    <p>{role.label}</p>
                    <p className="text-muted-foreground">{role.description}</p>
                </div>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === role.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
