"use client";
import { signIn } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const LogIn = () => {
  return (
    <Card className="flex gap-2 flex-col min-w-[300px]">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={"motorq.png"} />
          </Avatar>
          <span>
            Motorq<span className="text-muted-foreground">GPT</span>
          </span>
        </CardTitle>
        <CardDescription>
          Login in with your GitHub or Microsoft 365 account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button onClick={() => signIn("azure-ad")}> Microsoft 365</Button>
      </CardContent>
    </Card>
  );
};
