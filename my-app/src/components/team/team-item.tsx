"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamCombobox } from "./team-combo";
import { useState } from "react";

type Member = {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: 'owner' | 'billing' | 'developer' | 'viewer' | string
}


export default function TeamItem({ data }: { data: Member }) {
    const [role, setRole] = useState(data.role);

    return (
        <div className="flex gap-4 items-center">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar}/>
                    <AvatarFallback>--</AvatarFallback>
                </Avatar>

            </div>
            <div className="w-full sm:flex overflow-x-hidden">
                <div className="flex-1 overflow-x-hidden">
                    <div className="truncate">{data.name}</div>
                    <div className="truncate text-sm text-muted-foreground">{data.email}</div>
                </div>
                <div >
                    <TeamCombobox value={role} setValue={setRole}/>
                </div>
            </div>
        </div>
    );
}