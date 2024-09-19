'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DataTable from '../_components/DataTable';
import { supabase } from '@/lib/supabase/client';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*');

                if (error) {
                    console.error('Error fetching products:', error);
                    return;
                }

                console.log('Fetched Products:', data); // Log fetched data
                setProducts(data);
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        };

        fetchProductsData();
    }, []);

    return (
        <div className='p-12'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold'>Products</h1>
                <Button asChild>
                    <Link href={'/admin/products/new'}>Add New Product</Link>
                </Button>
            </div>
            <div className='mt-10'>
                <DataTable products={products} />
            </div>
        </div>
    );
}

export default Products;
