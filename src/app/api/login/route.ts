// app/api/auth/login/route.ts
import { account } from '@/lib/appwrite'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    const session = await account.createSession(email, password)
    
    return NextResponse.json({ 
      success: true, 
      session 
    })
    
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        error: error?.message || 'Authentication failed' 
      },
      { status: 401 }
    )
  }
}