import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const currentToken = request.Cookies.get('next-js');
    console.log(currentToken)
    const patheName = request.nextUrl.pathname.startsWith('/about');
    const data = {
        role: 'admin',
        email: 'marufsheikh803@gmail.com'
    }
    const isAdmin = data.role == 'admin';
    if (patheName && !isAdmin)
        return NextResponse.rewrite(new URL('/home', request.url))
    return NextResponse.next();
}

// export const config = {
//   matcher: '/about/:path*',
// }