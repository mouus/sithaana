import { addProduct } from "@/app/api/server-actions/addProduct"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function New() {

    return (
        <div className='p-12'>
            <h1 className='text-4xl font-semibold'>Add Products</h1>
            <form action={addProduct} className="mt-6 ml-10">
                <div className="grid w-full max-w-lg items-center gap-1.5  space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="max-w-lg w-full mt-2 space-y-2">
                    <Label>Category</Label>
                    <Select className='h-4' name="category" required>
                        <SelectTrigger className="w-full" >
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Category 1</SelectLabel>
                                <SelectItem value="Kitchen">Kitchen</SelectItem>
                                <SelectItem value="Bathroom">Bathroom</SelectItem>
                                <SelectItem value="Hardware">Hardware</SelectItem>
                                <SelectItem value="Fishing">Fishing</SelectItem>
                                <SelectItem value="Home Improvment">Home Improvement</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>Category 2</SelectLabel>
                                <SelectItem value="Electical">Electrical</SelectItem>
                                <SelectItem value="Power Tool">Power Tool</SelectItem>
                                <SelectItem value="Painting and Coatings">Painting & Coatings</SelectItem>
                                <SelectItem value="Professional CLeaning">Professional Cleaning</SelectItem>
                                <SelectItem value="Tiles">Tiles</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-full max-w-lg space-y-2 mt-2">
                    <Label htmlFor="itmeno">Number Of Items</Label>
                    <Input type="Number" id="itemno" name="itemno" placeholder="Number Of Items" required />
                </div>
                <div className="max-w-lg w-full mt-2 space-y-2">
                    <Label>Is For Sale</Label>
                    <Select className='h-4'name="forsale" required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="true">True</SelectItem>
                            <SelectItem value="false">False</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-full max-w-lg space-y-2 mt-2">
                    <Label htmlFor="saleamt">Sale Percentage</Label>
                    <Input type="Number" id="saleamt" name="saleamt" defaultValue="0" placeholder="Sale Percentage"  />
                </div>
                <div className="w-full max-w-lg space-y-2 mt-2">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" accept=".png, .jpg, .jpeg" name="picture" required/>
                </div>
                <div className="w-full max-w-lg space-y-2 mt-2">
                    <Label htmlFor="price">Price</Label>
                    <Input type="Number" id="price" name="price" placeholder="MVR" required />
                </div>
                <div className="w-full max-w-lg  mt-3">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default New

