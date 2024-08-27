import { Connectmongodb } from "@/lib/Connectmongodb";
import { Blog } from "../../../../Models/topic";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await Connectmongodb()
        const blogs = await Blog.find().sort({ createdAt: -1 }).exec();
        return NextResponse.json({blogs})

    } catch (error) {
        console.log(error)
    }
}