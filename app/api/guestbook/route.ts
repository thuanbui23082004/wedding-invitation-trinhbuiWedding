import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET() {
    const { data, error } = await supabase
        .from("wishes")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !message) {
        return NextResponse.json(
            { error: "Tên và lời chúc không được để trống." },
            { status: 400 },
        );
    }

    const { data, error } = await supabase
        .from("wishes")
        .insert([{ name, message }])
        .select()
        .single();

    if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
}
