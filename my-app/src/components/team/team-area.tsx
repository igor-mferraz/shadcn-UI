import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import TeamItem from "./team-item";

  const members = [
    {
        id: 1,
        avatar:'https://ui.shadcn.com/avatars/01.png',
        name: 'Sofia Davis',
        email: 'davis@email.com',
        role: 'owner'
    },
    {
        id: 2,
        avatar:'https://ui.shadcn.com/avatars/02.png',
        name: 'Jackson Lee',
        email: 'jackson@email.com',
        role: 'viewer'
    }
]

export default function TeamArea() {
    return (
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {   members.map((item)=>{
                    return( 
                        <TeamItem key={item.id} data={item}/>
                    )
                })

                }
                
            </CardContent>
        </Card>
    );
}