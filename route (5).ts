import {NextResponse} from "next/server";import {prisma} from "@/lib/prisma";import {currentUserId} from "@/lib/auth";
export async function GET(){const id=await currentUserId();if(!id)return NextResponse.json({user:null});const user=await prisma.user.findUnique({where:{id},select:{id:true,firstName:true,lastName:true,phone:true}});return NextResponse.json({user})}
