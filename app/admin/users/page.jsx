'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UserTable from '../_components/UserTable';
import { supabase } from '@/lib/supabase/client';

function Products() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const { data, error } = await supabase
                    .from('user')
                    .select('*');

                if (error) {
                    console.error('Error fetching products:', error);
                    return;
                }

                console.log('Fetched Products:', data); // Log fetched data
                setUser(data);
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        };

        fetchProductsData();
    }, []);

    return (
        <div className='p-12'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold'>Customers</h1>
            </div>
            <div className='mt-10'>
                <UserTable users={user} />
            </div>
        </div>
    );
}

export default Products;
