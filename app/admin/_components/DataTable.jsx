import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

function DataTable({ products }) {
    console.log(products.picture)
    return (
        <div>
            <Table className='bg-white rounded-sm'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Number of Items</TableHead>
                        <TableHead>Is For Sale</TableHead>
                        <TableHead>Sale Percentage</TableHead>
                        <TableHead>Picture</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Edit Product</TableHead>
                        <TableHead className="text-right">Delete Product</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.name}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.itemNumber}</TableCell>
                            <TableCell>{product.forSale ? 'True' : 'False'}</TableCell>
                            <TableCell>{product.saleAmount}%</TableCell>
                            <TableCell><img src={`${product.picture}`} alt="product image" className="w-20 h-20 object-cover" /></TableCell>
                            <TableCell>MVR <span className="text-sm text-gray-600">{product.price}</span></TableCell>
                            <TableCell className="text-right text-red-500"><Link href={`/admin/products/edit/${product.id}`}>Edit</Link></TableCell>
                            <TableCell className="text-right text-red-500"><button>Delete</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default DataTable;
