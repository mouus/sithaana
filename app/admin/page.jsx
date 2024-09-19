import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function page() {
  return (
    <div className='p-6 space-y-2'>
        <Card>
            <CardHeader>
                <CardTitle>Sales</CardTitle>
                <CardDescription>Orders</CardDescription>
            </CardHeader>
            <CardContent>
                <p><span className='font-semibold text-green-500'>MVR</span> <span className='text-gray-500'>0</span></p>
            </CardContent>  
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Customers</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-gray-500'>0</p>
            </CardContent>  
        </Card>
    </div>
  )
}

export default page