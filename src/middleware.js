import { NextResponse } from "next/server";

export default async function middleware(req, res) {
    if(req.nextUrl.pathname.startsWith("/api/headersModifi")){
       const requestHeader = new Headers(req.headers);
       const authorization = requestHeader.get("Authorization");
       if(authorization === "milon@293"){
        const response = NextResponse.next();
        response.headers.set("Authorization", "Bearer")
        return response;
       }
       else{
        return NextResponse.json({message: "fail"}, {status: "404"})
       }
    }
}